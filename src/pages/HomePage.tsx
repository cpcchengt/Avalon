import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-11rem)] flex-col justify-center">
      <section className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            React + TypeScript + Tailwind + Router
          </div>

          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-slate-400">
            Avalon Starter
          </p>
          <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Build from a routed foundation instead of a single-page stub.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The project now includes route configuration, a shared layout, and starter
            pages so you can expand navigation without reshaping the app shell later.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-200"
              to="/about"
            >
              Open About Page
            </Link>
            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
              href="https://reactrouter.com/home"
              target="_blank"
              rel="noreferrer"
            >
              Router Docs
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-medium text-cyan-200">App shell ready</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Shared header and navigation live in a central layout component.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-medium text-cyan-200">Route expansion ready</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Add nested routes, loaders, and protected pages from the same router file.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm font-medium text-cyan-200">404 included</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Unknown paths already fall back to a not found screen.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}