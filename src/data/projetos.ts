export interface Tela {
  src: string;
  legenda: string;
}

export interface Acesso {
  perfil: string;
  usuario: string;
  senha: string;
}

export interface Projeto {
  id: string;
  nome: string;
  // Usado onde o espaço é curto (abas do hero)
  nomeCurto?: string;
  tipo: string;
  resumo: string;
  // De onde o projeto veio: dá contexto (cliente real, produto próprio, estudo).
  contexto: string;
  comoFunciona: string[];
  destaques: string[];
  tecnologias: string[];
  // Cor principal (texto branco por cima precisa ter contraste) e endereço exibido.
  cor: string;
  url: string;
  demo: {
    url: string;
    nota: string;
    acessos?: Acesso[];
    extra?: { rotulo: string; url: string };
  };
  codigo?: string;
  telas: Tela[];
  celular: string;
}

export const projetos: Projeto[] = [
  {
    id: 'investportal',
    nome: 'InvestPortal',
    tipo: 'Plataforma de gestão de investimentos',
    resumo:
      'Portal do investidor e painel da gestora: rendimentos diários, repasses mensais, aportes, saques e uma comparação com CDI e poupança usando dados do Banco Central.',
    contexto:
      'Versão de portfólio de um sistema que desenvolvi e que está em produção numa gestora de investimentos. Marca e dados do cliente foram trocados por dados fictícios.',
    comoFunciona: [
      'A gestora cadastra o investidor com o valor aportado e o percentual do contrato.',
      'Os rendimentos entram por dia: para um cliente, para todos de uma vez ou por planilha CSV.',
      'A cada 30 dias úteis o repasse fecha: 70% para o investidor e 30% de taxa de gestão.',
      'O investidor acompanha tudo no portal, conversa com a gestora pelo chat e compara o resultado com CDI e poupança.',
    ],
    destaques: [
      '240 testes de integração automatizados na API',
      'Login com JWT, senhas com bcrypt e limite de tentativas',
      'API Express publicada como função serverless',
      'Índices oficiais (CDI e poupança) consultados no Banco Central',
    ],
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'SQLite', 'Vercel'],
    cor: '#1C2C55',
    url: 'invest-portal-six.vercel.app',
    demo: {
      url: 'https://invest-portal-six.vercel.app',
      nota: 'Na tela de login há atalhos que preenchem as duas contas.',
      acessos: [
        { perfil: 'Gestora (admin)', usuario: 'admin', senha: 'admin123' },
        { perfil: 'Investidor', usuario: 'investidor.demo', senha: 'demo123' },
      ],
    },
    codigo: 'https://github.com/GS-suzuki13/invest-portal',
    telas: [
      { src: '/projetos/investportal-desktop.jpg', legenda: 'Portal do investidor' },
      { src: '/projetos/investportal-comparativo.jpg', legenda: 'Comparação com CDI e poupança' },
      { src: '/projetos/investportal-admin.jpg', legenda: 'Painel da gestora' },
      { src: '/projetos/investportal-login.jpg', legenda: 'Login com contas de demonstração' },
    ],
    celular: '/projetos/investportal-mobile.jpg',
  },
  {
    id: 'vetclinic',
    nome: 'VetClinic',
    tipo: 'Sistema para clínicas veterinárias',
    resumo:
      'Tutores, pets, prontuários, vacinas, microchips e agenda num só lugar, com várias clínicas no mesmo sistema e os dados de cada uma isolados.',
    contexto:
      'Produto próprio pensado como SaaS: cada clínica tem a sua equipe e os seus dados, separados no próprio banco de dados.',
    comoFunciona: [
      'A clínica cria a conta e cadastra a equipe com papéis: proprietário, administrador, veterinário e recepção.',
      'A recepção cadastra tutores e pets e marca as consultas na agenda e no calendário.',
      'O veterinário registra prontuários, vacinas com alerta da próxima dose e o microchip do animal.',
      'Um animal perdido pode ser localizado pelo número do microchip, sem expor os dados do tutor.',
    ],
    destaques: [
      'Isolamento entre clínicas com Row Level Security no PostgreSQL',
      'A demonstração cria uma clínica própria para cada visitante',
      'Validação de microchip nos padrões ISO 11784/11785, FDX-A e AVID',
      'Migrações SQL versionadas e testes automatizados de isolamento',
    ],
    tecnologias: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Vercel'],
    cor: '#167C79',
    url: 'vet-clinic-manager.vercel.app',
    demo: {
      url: 'https://vet-clinic-manager.vercel.app/?demo',
      nota: 'Um clique cria uma clínica de exemplo só para você, com dados fictícios. Não precisa de cadastro nem de senha.',
    },
    codigo: 'https://github.com/GS-suzuki13/VetClinicManager',
    telas: [
      { src: '/projetos/vetclinic-desktop.jpg', legenda: 'Painel da clínica' },
      { src: '/projetos/vetclinic-vacinas.jpg', legenda: 'Controle de vacinas' },
      { src: '/projetos/vetclinic-calendario.jpg', legenda: 'Calendário de consultas' },
      { src: '/projetos/vetclinic-login.jpg', legenda: 'Entrada com acesso de demonstração' },
    ],
    celular: '/projetos/vetclinic-mobile.jpg',
  },
  {
    id: 'mimoqr',
    nome: 'MimoQR',
    tipo: 'Mensagens surpresa por QR Code',
    resumo:
      'Quem compra um presente grava uma mensagem em texto, foto, áudio ou vídeo. Quem recebe abre tudo apontando a câmera para o QR Code do cartão.',
    contexto:
      'Versão de portfólio de um sistema que fiz para uma confeitaria entregar recados personalizados junto com os doces.',
    comoFunciona: [
      'O cliente recebe um link junto com o pedido e escreve a mensagem.',
      'Foto e vídeo vêm do celular, e o áudio pode ser gravado na hora, pelo navegador.',
      'O sistema gera um QR Code único para imprimir no cartão do presente.',
      'Quem recebe aponta a câmera e abre uma página exclusiva com a mensagem.',
    ],
    destaques: [
      'Upload direto do navegador para o storage, com token de curta duração',
      'Tipo e tamanho dos arquivos validados no servidor',
      'Gravação de áudio no navegador com a MediaRecorder API',
      'Limpeza automática diária com cron',
    ],
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Blob', 'Vercel'],
    cor: '#6C47FF',
    url: 'mimoqr.vercel.app',
    demo: {
      url: 'https://mimoqr.vercel.app',
      nota: 'Crie uma mensagem e escaneie o QR Code com o celular. Não quer criar? Veja o exemplo pronto.',
      extra: { rotulo: 'Ver mensagem de exemplo', url: 'https://mimoqr.vercel.app/mensagem/exemplo' },
    },
    codigo: 'https://github.com/GS-suzuki13/mimoqr',
    telas: [
      { src: '/projetos/mimoqr-desktop.jpg', legenda: 'Página inicial' },
      { src: '/projetos/mimoqr-criar.jpg', legenda: 'Criação da mensagem' },
      { src: '/projetos/mimoqr-mensagem.jpg', legenda: 'O que o presenteado vê' },
    ],
    celular: '/projetos/mimoqr-mobile.jpg',
  },
  {
    id: 'bela10',
    nome: 'Bela10',
    tipo: 'Loja virtual de cosméticos',
    resumo:
      'Vitrine com busca, filtros, sacola, cupom, frete por CEP e checkout com Pix, pensada para lojas pequenas venderem pelo celular.',
    contexto: 'Criada como proposta para uma loja de cosméticos. Produtos, preços e pagamentos são fictícios.',
    comoFunciona: [
      'A cliente busca e filtra os produtos e monta a sacola, que fica salva no aparelho.',
      'Cupom de desconto e uma barra mostram quanto falta para o frete grátis.',
      'No checkout, o CEP preenche o endereço sozinho.',
      'O Pix gera QR Code e código copia e cola, e o resumo do pedido segue pelo WhatsApp.',
    ],
    destaques: [
      'Código Pix no padrão BR Code do Banco Central (EMV com CRC16)',
      'Endereço preenchido pela API ViaCEP',
      'JavaScript puro, sem framework: um arquivo e carregamento instantâneo',
      'Checkout em 4 etapas, pensado para o celular',
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'API ViaCEP', 'Pix (BR Code)', 'Vercel'],
    cor: '#C93C26',
    url: 'bela10.vercel.app',
    demo: {
      url: 'https://bela10.vercel.app',
      nota: 'Use o cupom BELA10 e um CEP real para ver o endereço aparecer. O Pix é de demonstração e não cobra nada.',
    },
    codigo: 'https://github.com/GS-suzuki13/bela10',
    telas: [
      { src: '/projetos/bela10-desktop.jpg', legenda: 'Vitrine' },
      { src: '/projetos/bela10-sacola.jpg', legenda: 'Sacola com cupom e frete grátis' },
      { src: '/projetos/bela10-pix.jpg', legenda: 'Pagamento com Pix' },
    ],
    celular: '/projetos/bela10-mobile.jpg',
  },
  {
    id: 'netflix',
    nome: 'Netflix Suzuki',
    nomeCurto: 'Netflix',
    tipo: 'Interface de streaming',
    resumo:
      'Recriação da interface da Netflix com catálogo real de filmes e séries vindo da API do TMDB, título em destaque e listas por gênero.',
    contexto: 'Projeto de estudo de front-end e consumo de API, feito em 2021.',
    comoFunciona: [
      'Ao abrir, a página busca as listas de filmes e séries na API do TMDB.',
      'Um título é sorteado para o destaque, com capa, sinopse e gêneros.',
      'As listas por categoria rolam na horizontal, como no app original.',
    ],
    destaques: [
      'Consumo de API REST com várias listas carregadas em paralelo',
      'Componentes reutilizáveis para destaque e listas',
      'Layout responsivo do desktop ao celular',
    ],
    tecnologias: ['React', 'JavaScript', 'Material UI', 'API TMDB'],
    cor: '#B20710',
    url: 'netflix-suzuki.vercel.app',
    demo: {
      url: 'https://netflix-suzuki.vercel.app',
      nota: 'Abre direto, sem login.',
    },
    codigo: 'https://github.com/GS-suzuki13/Netflix_Demo',
    telas: [{ src: '/projetos/netflix-desktop.jpg', legenda: 'Página inicial com título em destaque' }],
    celular: '/projetos/netflix-mobile.jpg',
  },
];
