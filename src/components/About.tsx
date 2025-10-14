import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="w-8 h-8 text-[#e50914]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Sobre mim</h2>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Tenho 22 anos, sou de Blumenau-SC e sempre fui apaixonado por tecnologia.
              Trabalho com desenvolvimento de sistemas, uso duas telas no dia a dia e curto
              resolver problemas de forma prática e criativa. Sou comunicativo, competitivo
              e gosto de aprender coisas novas. Além do código, curto skate, futebol, jogar
              sinuca, sair com os amigos e cuidar dos meus dois cachorros. Estou em busca
              de oportunidades para crescer na área tech e causar impacto real com meus projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
