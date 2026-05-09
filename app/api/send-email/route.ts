import { NextResponse } from 'next/server'
import { z } from 'zod'

const MAX_BODY_BYTES = 4 * 1024

const ContactSchema = z.object({
  name:    z.string().trim().min(1, 'Name is required').max(150, 'Name too long'),
  email:   z.string().trim().email('Invalid email format').max(254),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message too long'),
})

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function stripNewlines(s: string): string {
  return s.replace(/[\r\n]+/g, ' ').trim()
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get('content-length') ?? '0')
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 413 })
    }

    const contentType = request.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported media type' }, { status: 415 })
    }

    const body = await request.json()
    const parsed = ContactSchema.safeParse(body)
    if (!parsed.success) {
      const message = parsed.error.errors[0]?.message ?? 'Invalid input'
      return NextResponse.json({ error: message }, { status: 400 })
    }

    const { name, email, message } = parsed.data

    const safeName    = escapeHtml(stripNewlines(name))
    const safeEmail   = escapeHtml(stripNewlines(email))
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    const subject   = `Contacto desde tu sitio de CV: ${stripNewlines(name).slice(0, 80)}`
    const emailHtml = `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${safeMessage}</p>
    `
    const emailText = `Nuevo mensaje de contacto\n\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'CV Website <onboarding@resend.dev>',
        to: ['akirafes@gmail.com'],
        subject,
        html: emailHtml,
        text: emailText,
        reply_to: email,
      }),
    })

    if (!response.ok) {
      console.error('Resend API error', { status: response.status })
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 })

  } catch (error) {
    console.error('Contact form error', { type: error instanceof Error ? error.constructor.name : 'unknown' })
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
