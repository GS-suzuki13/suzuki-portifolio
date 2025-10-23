import { Sparkles, CheckCircle2 } from 'lucide-react';

const differentials = [
  'Foco em entregar resultado de verdade, não só código.',
  'Rapidez para aprender novas tecnologias e aplicar na prática.',
  'Perfil comunicativo e boa adaptação a diferentes equipes.',
  'Capacidade de transformar ideias em projetos reais e funcionais.'
];

export default function Differentials() {
  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="w-8 h-8 text-[#0ea5e9]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">O que me diferencia</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-2xl border border-white/10 hover:border-[#0ea5e9] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ea5e9]/20"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5e9] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
