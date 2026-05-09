import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const existingLang = request.cookies.get('lang')?.value
  const resolvedLang =
    existingLang === 'es'
      ? 'es'
      : existingLang === 'en'
        ? 'en'
        : (request.headers.get('accept-language') ?? '').toLowerCase().startsWith('es')
          ? 'es'
          : 'en'

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-lang', resolvedLang)

  const response = NextResponse.next({ request: { headers: requestHeaders } })

  if (!existingLang) {
    response.cookies.set('lang', resolvedLang, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon\\.ico).*)'],
}
