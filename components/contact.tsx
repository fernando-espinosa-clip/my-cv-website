"use client"

import { useState, useMemo } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import type { Dictionary } from "@/lib/dictionaries"

type ContactFormData = {
  name: string
  email: string
  message: string
}

export function Contact({ t }: { t: Dictionary['contact'] }) {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const schema = useMemo(() => z.object({
    name: z.string().min(1, t.errors.nameRequired).max(150, t.errors.nameLength),
    email: z.string().min(1, t.errors.emailRequired).email(t.errors.emailInvalid),
    message: z.string().min(1, t.errors.messageRequired).max(1000, t.errors.messageLength),
  }), [t.errors])

  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  })

  const messageLength = watch('message', '').length

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('idle')
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full bg-dark-input border ${hasError ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors disabled:opacity-50`

  return (
    <section id="contact" className="py-20 px-8 md:px-16 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">{t.title}</h2>
        <div className="w-16 h-1 bg-primary mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{t.subtitle1}</h3>
            <p className="text-gray-400 mb-10 leading-relaxed">{t.description}</p>

            <div className="space-y-6">
              {[
                { icon: MapPin, label: t.addressTitle, value: "Guadalajara, Mexico" },
                { icon: Phone, label: t.phoneTitle, value: "+52 (624) 12745-05" },
                { icon: Mail, label: t.emailTitle, value: "mail@fer.cc" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start">
                  <div className="w-10 h-10 rounded bg-dark-input flex items-center justify-center text-primary mr-4 flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase mb-1">{label}</h4>
                    <p className="text-gray-400 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{t.subtitle2}</h3>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    maxLength={150}
                    disabled={isSubmitting}
                    className={inputClass(!!errors.name)}
                    {...register('name')}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    disabled={isSubmitting}
                    className={inputClass(!!errors.email)}
                    {...register('email')}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <textarea
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  maxLength={1000}
                  disabled={isSubmitting}
                  className={`${inputClass(!!errors.message)} resize-none`}
                  {...register('message')}
                />
                <div className="flex justify-between mt-1">
                  {errors.message
                    ? <p className="text-red-500 text-xs">{errors.message.message}</p>
                    : <span />
                  }
                  <p className="text-gray-500 text-xs">{messageLength}/1000</p>
                </div>
              </div>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm">✓ {t.successMessage}</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm">✗ {t.errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-transparent border-2 border-primary text-white font-bold tracking-wider hover:bg-primary transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.sending : t.button}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
