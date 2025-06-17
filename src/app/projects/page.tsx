// app/projects/page.tsx
export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Repeat this card per project */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-cyan-400">Trading Bot</h3>
          <p className="text-sm text-gray-300">Real-time crypto strategy using Kraken and Binance APIs.</p>
        </div>
        {/* Add more cards here */}
      </div>
    </section>
  )
}
