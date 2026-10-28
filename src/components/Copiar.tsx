import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function Copiar({ texto, rotulo }: { texto: string; rotulo: string }) {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch {
      // Sem permissão de área de transferência: o texto continua visível para copiar à mão.
    }
  };

  return (
    <button
      type="button"
      onClick={copiar}
      aria-label={copiado ? `${rotulo} copiado` : `Copiar ${rotulo}`}
      className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-grafite transition-colors hover:bg-nevoa hover:text-tinta"
    >
      {copiado ? <Check className="h-4 w-4 text-sinal" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only" aria-live="polite">
        {copiado ? 'Copiado' : ''}
      </span>
    </button>
  );
}
