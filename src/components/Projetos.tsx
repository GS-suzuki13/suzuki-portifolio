import { useEffect, useRef, useState } from 'react';
import { BadgeCheck, Check, ExternalLink, Github, Lock, Maximize2, X } from 'lucide-react';
import type { Projeto, Tela } from '../data/projetos';
import type { Status } from '../hooks/useStatusOnline';
import Copiar from './Copiar';

interface ProjetosProps {
  projetos: Projeto[];
  ativo: string;
  status: Record<string, Status>;
  onSelecionar: (id: string) => void;
}

const statusTexto: Record<Status, string> = {
  verificando: 'verificando',
  online: 'no ar',
  fora: 'fora do ar',
};

export default function Projetos({ projetos, ativo, status, onSelecionar }: ProjetosProps) {
  const projeto = projetos.find((p) => p.id === ativo) ?? projetos[0];

  // Padrão de abas: setas, Home e End trocam de projeto e movem o foco.
  const aoTeclar = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const atual = projetos.findIndex((p) => p.id === projeto.id);
    const destino = {
      ArrowRight: (atual + 1) % projetos.length,
      ArrowLeft: (atual - 1 + projetos.length) % projetos.length,
      Home: 0,
      End: projetos.length - 1,
    }[e.key];
    if (destino === undefined) return;
    e.preventDefault();
    onSelecionar(projetos[destino].id);
    document.getElementById(`aba-${projetos[destino].id}`)?.focus();
  };

  return (
    <section
      id="projetos"
      className="transicao-acento bg-[color-mix(in_srgb,var(--acento)_7%,#EEF0F3)] py-20 lg:py-28"
    >
      <div className="wrap">
        <div className="max-w-texto">
          <h2 className="titulo text-4xl sm:text-5xl">Projetos no ar</h2>
          <p className="mt-4 text-lg text-grafite">
            Escolha um projeto para ver as telas, como funciona e as tecnologias. Onde há login, a conta de demonstração
            já está aqui.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Projetos"
          onKeyDown={aoTeclar}
          className="sem-barra -mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-5 lg:px-0"
        >
          {projetos.map((p) => {
            const selecionado = p.id === projeto.id;
            return (
              <button
                key={p.id}
                id={`aba-${p.id}`}
                type="button"
                role="tab"
                aria-selected={selecionado}
                aria-controls="painel-projeto"
                tabIndex={selecionado ? 0 : -1}
                onClick={() => onSelecionar(p.id)}
                className={`relative w-56 shrink-0 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-300 lg:w-auto ${
                  selecionado ? 'border-transparent text-papel' : 'border-linha bg-papel hover:border-tinta'
                }`}
                style={selecionado ? { backgroundColor: p.cor } : undefined}
              >
                <span className="flex items-center gap-2 font-semibold">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      status[p.id] === 'online' ? 'bg-sinal' : status[p.id] === 'fora' ? 'bg-red-500' : 'bg-linha'
                    } ${selecionado ? 'ring-2 ring-papel/70' : ''}`}
                    aria-hidden="true"
                  />
                  {p.nome}
                  <span className="sr-only">({statusTexto[status[p.id]]})</span>
                </span>
                <span className={`mt-0.5 block text-sm leading-snug ${selecionado ? 'text-papel/80' : 'text-grafite'}`}>
                  {p.tipo}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="painel-projeto"
          role="tabpanel"
          aria-labelledby={`aba-${projeto.id}`}
          className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14"
        >
          <Galeria key={projeto.id} projeto={projeto} />
          <Detalhes projeto={projeto} status={status[projeto.id]} />
        </div>
      </div>
    </section>
  );
}

function Galeria({ projeto }: { projeto: Projeto }) {
  const [indice, setIndice] = useState(0);
  const [ampliada, setAmpliada] = useState<Tela | null>(null);
  const tela = projeto.telas[indice];

  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
      <div className="relative pb-6 sm:pb-12">
        <button
          type="button"
          onClick={() => setAmpliada(tela)}
          className="group block w-full overflow-hidden rounded-[1.25rem] border border-linha bg-papel text-left shadow-[0_30px_60px_-32px_rgba(22,26,51,0.5)]"
          aria-label={`Ampliar tela: ${tela.legenda}`}
        >
          <span className="flex items-center gap-2 border-b border-linha px-4 py-2.5 text-sm text-grafite">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="truncate">{projeto.url}</span>
            <Maximize2 className="ml-auto h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" aria-hidden="true" />
          </span>
          <img
            key={tela.src}
            src={tela.src}
            alt={`${projeto.nome}: ${tela.legenda}`}
            width={1920}
            height={1200}
            loading="lazy"
            className="aspect-[16/10] w-full animate-[aparecer_0.35s_ease] object-cover object-top"
          />
        </button>

        <figure className="absolute -right-2 bottom-0 hidden w-[23%] rounded-[1.6rem] border-[5px] border-tinta bg-tinta shadow-[0_24px_40px_-18px_rgba(22,26,51,0.6)] sm:block">
          <img
            src={projeto.celular}
            alt={`${projeto.nome} no celular`}
            width={780}
            height={1688}
            loading="lazy"
            className="aspect-[9/19.5] w-full rounded-[1.15rem] object-cover object-top"
          />
          <figcaption className="sr-only">Versão para celular</figcaption>
        </figure>
      </div>

      {projeto.telas.length > 1 && (
        <div className="mt-2 flex flex-wrap gap-2 sm:pr-[26%]">
          {projeto.telas.map((t, i) => (
            <button
              key={t.src}
              type="button"
              onClick={() => setIndice(i)}
              aria-pressed={i === indice}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                i === indice ? 'border-transparent bg-acento text-papel' : 'border-linha bg-papel text-grafite hover:text-tinta'
              }`}
            >
              {t.legenda}
            </button>
          ))}
        </div>
      )}

      <Ampliacao tela={ampliada} nome={projeto.nome} onFechar={() => setAmpliada(null)} />
    </div>
  );
}

function Ampliacao({ tela, nome, onFechar }: { tela: Tela | null; nome: string; onFechar: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialogo = ref.current;
    if (!dialogo) return;
    if (tela && !dialogo.open) dialogo.showModal();
    if (!tela && dialogo.open) dialogo.close();
  }, [tela]);

  return (
    <dialog
      ref={ref}
      onClose={onFechar}
      onClick={(e) => e.target === ref.current && onFechar()}
      className="w-[min(1200px,94vw)] max-w-none rounded-2xl bg-papel p-0 backdrop:bg-tinta/70 backdrop:backdrop-blur-sm"
    >
      {tela && (
        <figure>
          <div className="flex items-center justify-between gap-4 border-b border-linha px-4 py-3">
            <figcaption className="font-medium">
              {nome}: {tela.legenda}
            </figcaption>
            <button
              type="button"
              onClick={onFechar}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-nevoa"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <img src={tela.src} alt={`${nome}: ${tela.legenda}`} className="max-h-[80vh] w-full object-contain" />
        </figure>
      )}
    </dialog>
  );
}

function Detalhes({ projeto, status }: { projeto: Projeto; status: Status }) {
  return (
    <div key={projeto.id} className="animate-[aparecer_0.35s_ease]">
      <p className="font-semibold text-acento">{projeto.tipo}</p>
      <h3 className="titulo mt-2 text-4xl sm:text-[2.75rem]">{projeto.nome}</h3>
      <p className="mt-4 text-grafite">{projeto.resumo}</p>

      <p className="mt-5 flex gap-3 rounded-2xl bg-papel p-4 text-[0.9375rem]">
        <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-acento" aria-hidden="true" />
        <span>{projeto.contexto}</span>
      </p>

      <div className="mt-6 rounded-2xl border border-linha bg-papel p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="titulo-medio text-lg">Teste agora</h4>
          <span className="flex items-center gap-2 text-sm text-grafite">
            <span className={`h-2 w-2 rounded-full ${status === 'online' ? 'bg-sinal' : status === 'fora' ? 'bg-red-500' : 'bg-linha'}`} aria-hidden="true" />
            {status === 'online' ? 'No ar agora' : status === 'fora' ? 'Fora do ar no momento' : 'Verificando'}
          </span>
        </div>
        <p className="mt-2 text-[0.9375rem] text-grafite">{projeto.demo.nota}</p>

        {projeto.demo.acessos && (
          <dl className="mt-4 divide-y divide-linha rounded-xl border border-linha">
            {projeto.demo.acessos.map((a) => (
              <div key={a.usuario} className="flex flex-wrap items-center gap-x-5 gap-y-1 px-4 py-3">
                <dt className="w-full text-sm font-semibold">{a.perfil}</dt>
                <dd className="flex items-center gap-1 text-[0.9375rem]">
                  <span className="text-grafite">usuário</span>
                  <code className="font-semibold">{a.usuario}</code>
                  <Copiar texto={a.usuario} rotulo={`usuário ${a.usuario}`} />
                </dd>
                <dd className="flex items-center gap-1 text-[0.9375rem]">
                  <span className="text-grafite">senha</span>
                  <code className="font-semibold">{a.senha}</code>
                  <Copiar texto={a.senha} rotulo={`senha de ${a.usuario}`} />
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <a href={projeto.demo.url} target="_blank" rel="noopener noreferrer" className="btn-acento">
            <ExternalLink className="h-4 w-4" /> Abrir demonstração
          </a>
          {projeto.demo.extra && (
            <a href={projeto.demo.extra.url} target="_blank" rel="noopener noreferrer" className="btn-contorno">
              {projeto.demo.extra.rotulo}
            </a>
          )}
          {projeto.codigo && (
            <a href={projeto.codigo} target="_blank" rel="noopener noreferrer" className="btn-contorno">
              <Github className="h-4 w-4" /> Ver código
            </a>
          )}
        </div>
      </div>
      <h4 className="titulo-medio mt-9 text-lg">Como funciona</h4>
      <ol className="mt-4 space-y-3.5">
        {projeto.comoFunciona.map((passo, i) => (
          <li key={passo} className="flex gap-3.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-acento text-sm font-bold text-papel">
              {i + 1}
            </span>
            <span className="pt-0.5">{passo}</span>
          </li>
        ))}
      </ol>

      <h4 className="titulo-medio mt-9 text-lg">Por dentro</h4>
      <ul className="mt-4 space-y-2.5">
        {projeto.destaques.map((d) => (
          <li key={d} className="flex gap-3">
            <Check className="mt-1 h-4 w-4 shrink-0 text-acento" aria-hidden="true" />
            <span>{d}</span>
          </li>
        ))}
      </ul>

      <h4 className="titulo-medio mt-9 text-lg">Tecnologias</h4>
      <ul className="mt-4 flex flex-wrap gap-2">
        {projeto.tecnologias.map((t) => (
          <li key={t} className="rounded-full border border-linha bg-papel px-3 py-1 text-sm font-medium">
            {t}
          </li>
        ))}
      </ul>

    </div>
  );
}
