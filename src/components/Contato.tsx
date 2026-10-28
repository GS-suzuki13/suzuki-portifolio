import { Download, Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { contato } from '../data/perfil';
import curriculo from '../assets/gustavo-suzuki.pdf';
import Copiar from './Copiar';

export default function Contato() {
  return (
    <>
      <section id="contato" className="bg-tinta py-20 text-papel lg:py-28">
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <h2 className="titulo text-4xl sm:text-6xl">Tem um projeto ou uma vaga em mente?</h2>
            <p className="mt-6 max-w-texto text-lg text-papel/70">
              Conte o que você precisa. Respondo pelo canal que for mais prático para você.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" className="btn bg-sinal text-papel hover:bg-papel hover:text-tinta">
                <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
              </a>
              <a href={curriculo} download="gustavo-suzuki-curriculo.pdf" className="btn border border-papel/30 text-papel hover:border-papel">
                <Download className="h-4 w-4" /> Baixar currículo
              </a>
            </div>
          </div>

          <ul className="divide-y divide-papel/15 rounded-2xl border border-papel/15">
            <li className="flex items-center gap-3 px-5 py-4">
              <Mail className="h-5 w-5 shrink-0 text-papel/60" aria-hidden="true" />
              <a href={`mailto:${contato.email}`} className="min-w-0 flex-1 truncate font-medium hover:underline">
                {contato.email}
              </a>
              <span className="text-papel/70 [&_button:hover]:bg-papel/10 [&_button:hover]:text-papel [&_button]:text-papel/70">
                <Copiar texto={contato.email} rotulo="e-mail" />
              </span>
            </li>
            <li>
              <a href={contato.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-4 font-medium hover:bg-papel/5">
                <MessageCircle className="h-5 w-5 text-papel/60" aria-hidden="true" /> {contato.whatsappTexto}
              </a>
            </li>
            <li>
              <a href={contato.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-4 font-medium hover:bg-papel/5">
                <Linkedin className="h-5 w-5 text-papel/60" aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={contato.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-4 font-medium hover:bg-papel/5">
                <Github className="h-5 w-5 text-papel/60" aria-hidden="true" /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="bg-tinta pb-10 text-papel/60">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 border-t border-papel/15 pt-8 text-sm">
          <p>© {new Date().getFullYear()} Gustavo Suzuki. Blumenau, SC.</p>
          <div className="flex gap-1">
            {[
              { href: contato.linkedin, rotulo: 'LinkedIn', Icone: Linkedin },
              { href: contato.github, rotulo: 'GitHub', Icone: Github },
              { href: contato.instagram, rotulo: 'Instagram', Icone: Instagram },
            ].map(({ href, rotulo, Icone }) => (
              <a
                key={rotulo}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={rotulo}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-papel/10 hover:text-papel"
              >
                <Icone className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
