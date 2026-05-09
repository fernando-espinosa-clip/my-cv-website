import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen bg-dark-bg items-center justify-center flex-col gap-6 text-white">
      <h1 className="text-7xl font-bold text-primary">404</h1>
      <p className="text-gray-400 text-lg uppercase tracking-widest">Page not found</p>
      <Link
        href="/"
        className="mt-4 border-2 border-primary px-8 py-3 text-sm font-bold tracking-widest hover:bg-primary transition-colors"
      >
        GO HOME
      </Link>
    </div>
  )
}
