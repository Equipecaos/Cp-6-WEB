
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const carros = [
    {
        id: 1,
        marca: 'Porsche',
        modelo: '911 Carrera',
        ano: 2025,
        preco: 2800,
        imagem:
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        marca: 'BMW',
        modelo: 'Série 4',
        ano: 2025,
        preco: 1500,
        imagem:
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        marca: 'Audi',
        modelo: 'R8',
        ano: 2024,
        preco: 2600,
        imagem:
            'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    },
]

export default function Home() {
    return (
        <main className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
            <section className="text-center">
                <h1 className="text-4xl font-bold sm:text-6xl">
                    Alugue seu carro dos sonhos
                </h1>

                <p className="mt-5 text-neutral-400">
                    Encontre carros importados com conforto e estilo.
                </p>

                <Link
                    to="/carros"
                    className="mt-7 inline-block rounded-lg bg-amber-400 px-6 py-3 font-bold text-black"
                >
                    Ver carros
                </Link>
            </section>

            <section className="mx-auto mt-16 max-w-6xl">
                <h2 className="mb-8 text-3xl font-bold">
                    Carros em destaque
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {carros.map((carro) => (
                        <Card key={carro.id} carro={carro} />
                    ))}
                </div>
            </section>
        </main>
    )
}
