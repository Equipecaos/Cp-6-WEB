
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-neutral-950 px-6 py-8 text-center text-white">
            <Link to="/" className="text-lg font-bold">
                <span className="text-amber-400">ELITE</span> MOTORS
            </Link>

            <p className="mt-2 text-sm text-neutral-400">
                Locação de carros importados.
            </p>

            <p className="mt-4 text-xs text-neutral-500">
                © {new Date().getFullYear()} Elite Motors
            </p>
        </footer>
    )
}
