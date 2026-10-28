import { GraduationCap } from 'lucide-react';
import { experiencias, formacao } from '../data/perfil';

export default function Experiencia() {
  return (
    <section id="experiencia" className="border-y border-linha bg-papel py-20 lg:py-28">
      <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <h2 className="titulo text-4xl sm:text-5xl">Experiência</h2>
          <p className="mt-4 max-w-sm text-lg text-grafite">
            De estágios em sistemas corporativos a produtos completos publicados para clientes.
          </p>

          <div className="mt-10 flex gap-4 rounded-2xl bg-nevoa p-5">
            <GraduationCap className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold">{formacao.curso}</p>
              <p className="text-grafite">
                {formacao.instituicao}, {formacao.periodo}
              </p>
            </div>
          </div>
        </div>

        <ol className="relative border-l-2 border-linha">
          {experiencias.map((e) => (
            <li key={`${e.empresa}-${e.periodo}`} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-[3px] border-papel bg-tinta" aria-hidden="true" />
              <p className="text-sm font-medium text-grafite">{e.periodo}</p>
              <h3 className="titulo-medio mt-1 text-xl">{e.cargo}</h3>
              <p className="font-medium">{e.empresa}</p>
              <p className="mt-2 max-w-texto text-grafite">{e.descricao}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
