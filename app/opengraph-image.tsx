import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Fernando Espinosa – Senior Full Stack Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Orange accent bar top */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, backgroundColor: '#ff6600' }} />

        {/* Subtle grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,102,0,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,102,0,0.05) 0%, transparent 50%)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, zIndex: 1 }}>
          <p style={{ color: '#ff6600', fontSize: 18, fontWeight: 700, letterSpacing: 6, textTransform: 'uppercase', margin: 0 }}>
            HELLO, I&apos;M
          </p>
          <h1 style={{ color: '#ffffff', fontSize: 72, fontWeight: 700, margin: 0, letterSpacing: -1, textAlign: 'center' }}>
            FERNANDO ESPINOSA
          </h1>
          <div style={{ width: 80, height: 4, backgroundColor: '#ff6600', borderRadius: 2 }} />
          <p style={{ color: '#9ca3af', fontSize: 24, fontWeight: 300, letterSpacing: 4, textTransform: 'uppercase', margin: 0 }}>
            SENIOR FULL STACK ENGINEER
          </p>
          <p style={{ color: '#6b7280', fontSize: 16, letterSpacing: 2, margin: '8px 0 0', textTransform: 'uppercase' }}>
            MICRO-FRONTENDS · DESIGN SYSTEMS · TECH LEAD
          </p>
        </div>

        {/* Bottom domain */}
        <p style={{ position: 'absolute', bottom: 32, color: '#4b5563', fontSize: 14, letterSpacing: 3, textTransform: 'uppercase', margin: 0 }}>
          curriculum.fer.cc
        </p>

        {/* Orange accent bar bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, backgroundColor: '#ff6600' }} />
      </div>
    ),
    { ...size }
  )
}
