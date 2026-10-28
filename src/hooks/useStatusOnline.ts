import { useEffect, useState } from 'react';
import type { Projeto } from '../data/projetos';

export type Status = 'verificando' | 'online' | 'fora';

// Confere de verdade se cada sistema responde agora. Com mode "no-cors" a
// resposta é opaca, mas a requisição só resolve se o servidor respondeu.
export function useStatusOnline(projetos: Projeto[]) {
  const [status, setStatus] = useState<Record<string, Status>>(() =>
    Object.fromEntries(projetos.map((p) => [p.id, 'verificando' as Status])),
  );

  useEffect(() => {
    let ativo = true;

    projetos.forEach(async (p) => {
      const controle = new AbortController();
      const limite = setTimeout(() => controle.abort(), 10000);
      let resultado: Status = 'online';
      try {
        await fetch(`${new URL(p.demo.url).origin}/`, { mode: 'no-cors', cache: 'no-store', signal: controle.signal });
      } catch {
        resultado = 'fora';
      } finally {
        clearTimeout(limite);
      }
      if (ativo) setStatus((s) => ({ ...s, [p.id]: resultado }));
    });

    return () => {
      ativo = false;
    };
  }, [projetos]);

  return status;
}
