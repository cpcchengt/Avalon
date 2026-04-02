export function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">About</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          The router is now part of the base project.
        </h2>
        <p className="mt-6 text-base leading-8 text-slate-300">
          This starter uses <span className="font-semibold text-white">createBrowserRouter</span>
          {' '}with a shared layout and child routes. It is a better default than wiring
          routes later, because navigation, page boundaries, and 404 handling already exist.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
            <p className="text-sm font-medium text-cyan-200">Current routes</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              `/` home, `/about` about, and a catch-all not found page.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-5">
            <p className="text-sm font-medium text-cyan-200">Typical next steps</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Add auth guards, nested dashboard routes, and data loaders or actions.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}