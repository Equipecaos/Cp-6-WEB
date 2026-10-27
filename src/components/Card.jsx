
import { Link } from 'react-router-dom'

export default function Card({ carro }) {
    return (
        <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
            <img
                src={carro.imagem}
                alt={carro.modelo}
                className="h-48 w-full object-cover"
            />

            <div className="p-5">
                <p className="text-sm text-neutral-400">
                    {carro.marca} · {carro.ano}
                </p>

                <h2 className="mt-2 text-xl font-bold text-white">
                    {carro.modelo}
                </h2>

                <p className="mt-3 font-bold text-amber-400">
                    {carro.preco.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })} / dia
                </p>

                <Link
                    to="/carros"
                    className="mt-4 inline-block rounded-lg bg-amber-400 px-4 py-2 font-bold text-black hover:bg-amber-300"
                >
                    Ver carros
                </Link>
            </div>
        </div>
    )
}
