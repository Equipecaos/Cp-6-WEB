
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

export default function Carros() {
    return (
        <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
            <h1 className="text-center text-4xl font-bold">
                Nossos carros
            </h1>

            <p className="mt-4 text-center text-neutral-400">
                Escolha o carro ideal para você.
            </p>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
                {carros.map((carro) => (
                    <Card key={carro.id} carro={carro} />
                ))}
            </div>
        </main>
    )
}
