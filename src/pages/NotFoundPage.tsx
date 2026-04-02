import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-14rem)] max-w-2xl flex-col items-center justify-center text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">404</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Page not found.
      </h2>
      <p className="mt-6 text-base leading-8 text-slate-300">
        The route does not exist yet, or the link points to an outdated path.
      </p>
      <Link
        className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-200"
        to="/"
      >
        Back to home
      </Link>
    </main>
  )
}