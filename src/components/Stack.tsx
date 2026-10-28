import type { Projeto } from '../data/projetos';
import { stack } from '../data/perfil';

interface StackProps {
  projetos: Projeto[];
  onAbrirProjeto: (id: string) => void;
}

// Cada tecnologia vem com a prova: o projeto (clicável) ou a experiência onde foi usada.
export default function Stack({ projetos, onAbrirProjeto }: StackProps) {
  const porId = Object.fromEntries(projetos.map((p) => [p.id, p]));

  return (
    <section id="tecnologias" className="wrap py-20 lg:py-28">
      <div className="max-w-texto">
        <h2 className="titulo text-4xl sm:text-5xl">Tecnologias, com prova</h2>
        <p className="mt-4 text-lg text-grafite">
          Ao lado de cada tecnologia está onde ela foi usada. Clique num projeto para abrir as telas dele.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
        {stack.map((grupo) => (
          <div key={grupo.grupo}>
            <h3 className="titulo-medio border-b-2 border-tinta pb-3 text-xl">{grupo.grupo}</h3>
            <ul className="divide-y divide-linha">
              {grupo.itens.map((item) => (
                <li key={item.nome} className="py-4">
                  <p className="font-semibold">{item.nome}</p>
                  {item.projetos ? (
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {item.projetos.map((id) => (
                        <li key={id}>
                          <button
                            type="button"
                            onClick={() => onAbrirProjeto(id)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-linha bg-papel px-2.5 py-0.5 text-sm text-grafite transition-colors hover:border-tinta hover:text-tinta"
                          >
                            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: porId[id].cor }} aria-hidden="true" />
                            {porId[id].nome}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-1 text-sm text-grafite">{item.onde}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
