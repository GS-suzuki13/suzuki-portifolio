import { useEffect, useRef, useState } from 'react';
import { Download, Lock, Pause, Play } from 'lucide-react';
import type { Projeto } from '../data/projetos';
import type { Status } from '../hooks/useStatusOnline';
import { contato } from '../data/perfil';
import curriculo from '../assets/gustavo-suzuki.pdf';

const INTERVALO = 5000;

interface HeroProps {
  projetos: Projeto[];
  status: Record<string, Status>;
  onAbrirProjeto: (id: string) => void;
}

function resumoStatus(projetos: Projeto[], status: Record<string, Status>) {
  const verificados = projetos.filter((p) => status[p.id] !== 'verificando');
  const online = projetos.filter((p) => status[p.id] === 'online').length;
  if (verificados.length < projetos.length) return 'Verificando os sistemas agora…';
  return `${online} de ${projetos.length} sistemas no ar agora`;
}

export default function Hero({ projetos, status, onAbrirProjeto }: HeroProps) {
  return (
    <section id="inicio" className="wrap grid grid-cols-1 items-center gap-12 pb-20 pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-14 lg:pb-28 lg:pt-16">
      <div>
        <p className="font-medium text-grafite">Gustavo Suzuki, desenvolvedor full stack em Blumenau (SC)</p>

        <h1 className="titulo mt-5 text-[2.6rem] sm:text-[3.4rem] lg:text-[3.6rem] xl:text-[4rem]">Do problema ao sistema no{' '}ar.</h1>

        <p className="mt-6 max-w-texto text-lg text-grafite">
          Desenvolvo sistemas web completos, do banco de dados à tela, e cuido da publicação e da manutenção. Os
          projetos abaixo estão no ar: abra, teste com as contas de demonstração e veja como cada um funciona por dentro.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projetos" className="btn-primario">
            Testar os projetos
          </a>
          <a href={curriculo} download="gustavo-suzuki-curriculo.pdf" className="btn-contorno">
            <Download className="h-4 w-4" /> Baixar currículo
          </a>
        </div>

        <div className="mt-8 space-y-2 text-[0.9375rem]">
          <p className="flex items-center gap-2.5 font-medium" aria-live="polite">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sinal opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sinal" />
            </span>
            {resumoStatus(projetos, status)}
          </p>
          <p className="text-grafite">
            Disponível para projetos e vagas.{' '}
            <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-tinta underline decoration-linha underline-offset-4 hover:decoration-tinta">
              Chamar no WhatsApp
            </a>
          </p>
        </div>
      </div>

      <NavegadorAoVivo projetos={projetos} status={status} onAbrirProjeto={onAbrirProjeto} />
    </section>
  );
}

function NavegadorAoVivo({ projetos, status, onAbrirProjeto }: HeroProps) {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [interagindo, setInteragindo] = useState(false);
  const reduzMovimento = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const rodando = !pausado && !interagindo && !reduzMovimento.current;

  useEffect(() => {
    if (!rodando) return;
    const t = setTimeout(() => setIndice((i) => (i + 1) % projetos.length), INTERVALO);
    return () => clearTimeout(t);
  }, [rodando, indice, projetos.length]);

  const atual = projetos[indice];

  return (
    <div
      className="relative"
      onMouseEnter={() => setInteragindo(true)}
      onMouseLeave={() => setInteragindo(false)}
      onFocus={() => setInteragindo(true)}
      onBlur={() => setInteragindo(false)}
    >
      <div
        className="transicao-acento overflow-hidden rounded-[1.25rem] border border-linha bg-papel shadow-[0_30px_60px_-30px_rgba(22,26,51,0.45)]"
        style={{ '--acento': atual.cor } as React.CSSProperties}
      >
        {/* Abas: um projeto por aba */}
        <div className="sem-barra flex gap-1 overflow-x-auto border-b border-linha bg-nevoa/70 px-2 pt-2" role="group" aria-label="Projetos em destaque">
          {projetos.map((p, i) => (
            <button
              key={p.id}
              type="button"
              aria-pressed={i === indice}
              onClick={() => setIndice(i)}
              className={`relative flex shrink-0 items-center gap-1.5 overflow-hidden rounded-t-lg px-2.5 py-2 text-[0.8125rem] font-medium transition-colors ${
                i === indice ? 'bg-papel text-tinta' : 'text-grafite hover:text-tinta'
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${status[p.id] === 'online' ? 'bg-sinal' : status[p.id] === 'fora' ? 'bg-red-500' : 'bg-linha'}`}
                aria-hidden="true"
              />
              {p.nomeCurto ?? p.nome}
              {i === indice && rodando && (
                <span
                  key={`barra-${indice}`}
                  className="absolute bottom-0 left-0 h-0.5 bg-acento"
                  style={{ animation: `progresso ${INTERVALO}ms linear forwards` }}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>

        {/* Barra de endereço com o domínio real */}
        <div className="flex items-center gap-3 border-b border-linha px-4 py-2.5">
          <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-nevoa px-3 py-1.5 text-sm text-grafite">
            <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{atual.url}</span>
          </span>
          <button
            type="button"
            onClick={() => setPausado((v) => !v)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-grafite hover:bg-nevoa hover:text-tinta"
            aria-label={pausado ? 'Retomar troca automática' : 'Pausar troca automática'}
          >
            {pausado ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
        </div>

        <div className="relative aspect-[16/10] bg-nevoa">
          {projetos.map((p, i) => (
            <img
              key={p.id}
              src={p.telas[0].src}
              alt={`Tela do ${p.nome}: ${p.telas[0].legenda}`}
              width={1920}
              height={1200}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
                i === indice ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3.5">
          <p className="leading-snug">
            <span className="block font-semibold">{atual.nome}</span>
            <span className="block text-sm text-grafite">{atual.tipo}</span>
          </p>
          <button type="button" onClick={() => onAbrirProjeto(atual.id)} className="btn-acento px-4 py-2 text-sm">
            Ver como funciona
          </button>
        </div>
      </div>
    </div>
  );
}
