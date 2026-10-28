import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { contato } from '../data/perfil';

const links = [
  { href: '#projetos', rotulo: 'Projetos' },
  { href: '#tecnologias', rotulo: 'Tecnologias' },
  { href: '#experiencia', rotulo: 'Experiência' },
  { href: '#sobre', rotulo: 'Sobre' },
];

export default function Nav() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        rolou || aberto ? 'border-b border-linha bg-nevoa/90 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between gap-6" aria-label="Principal">
        <a href="#inicio" className="titulo text-lg tracking-tight">
          Gustavo Suzuki
        </a>

        <ul className="hidden items-center gap-7 text-[0.9375rem] font-medium text-grafite md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-tinta">
                {l.rotulo}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primario hidden px-4 py-2 sm:inline-flex">
            Fale comigo
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-celular"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-linha bg-papel md:hidden"
          >
            {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {aberto && (
        <div id="menu-celular" className="wrap pb-5 md:hidden">
          <ul className="flex flex-col gap-1 text-lg font-medium">
            {[...links, { href: '#contato', rotulo: 'Contato' }].map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setAberto(false)} className="block rounded-xl px-3 py-2.5 hover:bg-papel">
                  {l.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
