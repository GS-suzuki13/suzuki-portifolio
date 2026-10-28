import { useCallback, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projetos from './components/Projetos';
import Stack from './components/Stack';
import Experiencia from './components/Experiencia';
import Servicos from './components/Servicos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import { projetos } from './data/projetos';
import { useStatusOnline } from './hooks/useStatusOnline';

function App() {
  const [ativo, setAtivo] = useState(projetos[0].id);
  const status = useStatusOnline(projetos);
  const cor = projetos.find((p) => p.id === ativo)?.cor ?? projetos[0].cor;

  // Seleciona o projeto e leva o visitante até ele (usado pelo hero, tecnologias e serviços).
  const abrirProjeto = useCallback((id: string) => {
    setAtivo(id);
    document.getElementById('projetos')?.scrollIntoView({ block: 'start' });
  }, []);

  return (
    // A cor de destaque da página acompanha o projeto em foco.
    <div className="transicao-acento min-h-screen overflow-x-clip" style={{ '--acento': cor } as React.CSSProperties}>
      <a href="#projetos" className="btn-primario sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50">
        Pular para os projetos
      </a>
      <Nav />
      <main>
        <Hero projetos={projetos} status={status} onAbrirProjeto={abrirProjeto} />
        <Projetos projetos={projetos} ativo={ativo} status={status} onSelecionar={setAtivo} />
        <Stack projetos={projetos} onAbrirProjeto={abrirProjeto} />
        <Experiencia />
        <Servicos projetos={projetos} onAbrirProjeto={abrirProjeto} />
        <Sobre />
      </main>
      <Contato />
    </div>
  );
}

export default App;
