export default function CTA() {
  return (
    <section className="min-h-[100dvh] flex justify-center items-center py-16 bg-gradient-to-b from-black to-neutral-900" id="CTA">
      <div className="max-w-2xl text-center p-8 rounded-2xl border border-red-500 relative shadow-[0_0_30px_rgba(255,0,0,0.6)]">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para <span className="text-red-500 drop-shadow-[0_0_8px_red]">acelerar</span> seu site?
        </h2>

        {/* Subtítulo */}
        <p className="text-gray-300 mb-8">
          Junte-se a milhares de clientes satisfeitos e experimente a diferença que uma
          hospedagem de qualidade pode fazer.
        </p>

        {/* Botões */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#planos"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.6)] transition"
          >
            🚀 Começar Teste Grátis
          </a>

          <a
            href="https://wa.me/seuNumero"
            className="flex items-center gap-2 border border-red-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition"
          >
            📞 Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}