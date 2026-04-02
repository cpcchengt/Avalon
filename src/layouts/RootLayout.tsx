import { NavLink, Outlet } from 'react-router-dom'

const navClassName = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-full px-4 py-2 text-sm font-medium transition',
    isActive
      ? 'bg-cyan-300 text-slate-950'
      : 'text-slate-300 hover:bg-slate-800 hover:text-white',
  ].join(' ')

export function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">
              Avalon
            </p>
            <h1 className="mt-2 text-lg font-semibold text-white">
              React Router Starter
            </h1>
          </div>

          <nav className="flex items-center gap-2">
            <NavLink to="/" end className={navClassName}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClassName}>
              About
            </NavLink>
          </nav>
        </header>

        <div className="flex-1 py-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}