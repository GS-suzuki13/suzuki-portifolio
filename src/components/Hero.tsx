import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#1a1a1a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                E aí, eu sou o <span className="text-[#e50914]">Gustavo Suzuki</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Desenvolvedor focado em transformar ideias em experiências digitais reais.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 bg-[#e50914] hover:bg-[#b8070f] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#e50914]/50"
              >
                Ver Projetos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/assets/cv-gustavo-suzuki.pdf"
                download
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 backdrop-blur-sm border border-white/20"
              >
                <Download className="w-5 h-5" />
                Baixar CV
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[#e50914] rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#e50914] shadow-2xl shadow-[#e50914]/50 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/IMG_20251015_180027-removebg-preview.jpg"
                alt="Gustavo Suzuki"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-white/60 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
