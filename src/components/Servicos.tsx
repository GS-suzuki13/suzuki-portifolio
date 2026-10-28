import type { Projeto } from '../data/projetos';
import { etapas, servicos } from '../data/perfil';

interface ServicosProps {
  projetos: Projeto[];
  onAbrirProjeto: (id: string) => void;
}

export default function Servicos({ projetos, onAbrirProjeto }: ServicosProps) {
  const porId = Object.fromEntries(projetos.map((p) => [p.id, p]));

  return (
    <section id="servicos" className="wrap py-20 lg:py-28">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Para o seu negócio</h2>
          <p className="mt-4 max-w-texto text-lg text-grafite">
            Se você precisa de um sistema, uma loja ou quer tirar uma ideia do papel, é isso que eu entrego.
          </p>

          <ul className="mt-10 space-y-6">
            {servicos.map((s) => (
              <li key={s.titulo}>
                <h3 className="titulo-medio text-xl">{s.titulo}</h3>
                <p className="mt-1 text-grafite">{s.texto}</p>
                <button
                  type="button"
                  onClick={() => onAbrirProjeto(s.exemplo)}
                  className="mt-2 text-[0.9375rem] font-semibold underline decoration-linha underline-offset-4 hover:decoration-tinta"
                >
                  Exemplo: {porId[s.exemplo].nome}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.5rem] bg-tinta p-7 text-papel sm:p-10">
          <h3 className="titulo text-3xl">Como trabalho</h3>
          <ol className="mt-8 space-y-7">
            {etapas.map((e, i) => (
              <li key={e.titulo} className="grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="titulo text-3xl text-papel/40">{i + 1}</span>
                <div>
                  <p className="text-lg font-semibold">{e.titulo}</p>
                  <p className="mt-1 text-papel/70">{e.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
