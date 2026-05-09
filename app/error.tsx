'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error.digest ?? error.message)
  }, [error])

  return (
    <div className="flex min-h-screen bg-dark-bg items-center justify-center flex-col gap-6 text-white">
      <h1 className="text-4xl font-bold text-primary">Something went wrong</h1>
      <p className="text-gray-400">An unexpected error occurred.</p>
      <button
        onClick={reset}
        className="mt-4 border-2 border-primary px-8 py-3 text-sm font-bold tracking-widest hover:bg-primary transition-colors"
      >
        TRY AGAIN
      </button>
    </div>
  )
}
