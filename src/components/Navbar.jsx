
import { Link, NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) =>
    `transition-colors hover:text-amber-400 ${isActive ? 'text-amber-400' : 'text-neutral-300'
    }`

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/95 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-8">
                <Link to="/" className="text-xl font-black tracking-[0.18em]">
                    <span className="text-amber-400">ELITE</span>
                    <span className="text-white"> MOTORS</span>
                </Link>

                <div className="flex items-center gap-5 text-sm font-semibold sm:gap-8">
                    <NavLink to="/" end className={linkStyle}>
                        Home
                    </NavLink>

                    <NavLink to="/carros" className={linkStyle}>
                        Carros
                    </NavLink>

                    <Link
                        to="/carros"
                        className="hidden rounded-full bg-amber-400 px-5 py-2.5 font-bold text-neutral-950 transition hover:bg-amber-300 sm:inline-block"
                    >
                        Reservar
                    </Link>
                </div>
            </nav>
        </header>
    )
}
