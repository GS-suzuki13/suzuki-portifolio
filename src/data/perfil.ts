export const contato = {
  whatsapp: 'https://wa.me/5547997609807',
  whatsappTexto: '(47) 99760-9807',
  email: 'gustavosuzuki3@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gustavo-suzuki-858189163/',
  github: 'https://github.com/GS-suzuki13',
  instagram: 'https://www.instagram.com/oreal.suzuki/',
};

export interface Experiencia {
  periodo: string;
  cargo: string;
  empresa: string;
  descricao: string;
}

export const experiencias: Experiencia[] = [
  {
    periodo: '2025 até hoje',
    cargo: 'Desenvolvedor full stack',
    empresa: 'Projetos sob demanda',
    descricao:
      'Sistemas sob medida para pequenos negócios: uma plataforma de gestão de investimentos em produção, mensagens por QR Code para uma confeitaria e lojas virtuais.',
  },
  {
    periodo: 'out. 2024 a fev. 2025',
    cargo: 'Desenvolvedor de produto',
    empresa: 'Aplus Engenharia',
    descricao:
      'Extensões em .NET para os softwares da Autodesk usados pela equipe de engenharia e automações em Python para tarefas repetitivas.',
  },
  {
    periodo: 'mar. 2022 a nov. 2022',
    cargo: 'Estagiário desenvolvedor',
    empresa: 'Pilar Sistemas Customizados',
    descricao:
      'Sistemas web para automatizar processos contábeis: leitura de arquivos, gestão de tarefas e acompanhamento de propostas.',
  },
  {
    periodo: 'out. 2021 a fev. 2022',
    cargo: 'Analista desenvolvedor',
    empresa: 'Work Data Business',
    descricao: 'Projetos com React, Node.js, Bootstrap e JavaScript.',
  },
];

export const formacao = {
  curso: 'Análise e Desenvolvimento de Sistemas',
  instituicao: 'Uniasselvi',
  periodo: 'desde ago. 2024 (cursando)',
};

// Cada tecnologia aponta para onde foi usada: projetos (ids) e/ou experiências.
export interface ItemStack {
  nome: string;
  projetos?: string[];
  onde?: string;
}

export const stack: { grupo: string; itens: ItemStack[] }[] = [
  {
    grupo: 'Interface',
    itens: [
      { nome: 'React', projetos: ['investportal', 'vetclinic', 'mimoqr', 'netflix'] },
      { nome: 'TypeScript', projetos: ['investportal', 'vetclinic', 'mimoqr'] },
      { nome: 'Next.js', projetos: ['mimoqr'] },
      { nome: 'Tailwind CSS', projetos: ['investportal', 'vetclinic', 'mimoqr'] },
      { nome: 'HTML, CSS e JavaScript', projetos: ['bela10'] },
    ],
  },
  {
    grupo: 'Servidor e dados',
    itens: [
      { nome: 'Node.js e Express', projetos: ['investportal'] },
      { nome: 'PostgreSQL e Supabase', projetos: ['vetclinic'] },
      { nome: 'MySQL, SQLite e Sequelize', projetos: ['investportal'] },
      { nome: 'APIs REST', projetos: ['investportal', 'bela10', 'netflix'] },
      { nome: 'C# e .NET', onde: 'Extensões para Autodesk na Aplus Engenharia' },
      { nome: 'Python', onde: 'Automações na Aplus Engenharia e em projetos próprios' },
    ],
  },
  {
    grupo: 'Entrega e qualidade',
    itens: [
      { nome: 'Testes automatizados', projetos: ['investportal', 'vetclinic'] },
      { nome: 'Segurança: JWT, bcrypt e RLS', projetos: ['investportal', 'vetclinic'] },
      { nome: 'Vercel, serverless e cron', projetos: ['investportal', 'mimoqr', 'bela10'] },
      { nome: 'Git e GitHub', onde: 'Em todos os projetos' },
    ],
  },
];

export const servicos = [
  {
    titulo: 'Sistemas sob medida',
    texto: 'Painéis de gestão, áreas de cliente, agendas e controles que substituem planilhas.',
    exemplo: 'investportal',
  },
  {
    titulo: 'Sites e lojas virtuais',
    texto: 'Páginas rápidas e lojas que vendem pelo celular, com Pix e pedidos pelo WhatsApp.',
    exemplo: 'bela10',
  },
  {
    titulo: 'Produtos digitais',
    texto: 'Ideias novas que viram produto no ar: do primeiro protótipo à versão publicada.',
    exemplo: 'mimoqr',
  },
];

export const etapas = [
  { titulo: 'Conversa', texto: 'Entendo o problema e definimos juntos o que precisa estar pronto primeiro.' },
  { titulo: 'Protótipo', texto: 'Você vê e testa as telas principais antes do sistema inteiro ser construído.' },
  { titulo: 'Entregas curtas', texto: 'Versões publicadas a cada etapa para você acompanhar e opinar.' },
  { titulo: 'Publicação e suporte', texto: 'Sistema no ar, no seu domínio, com ajustes depois da entrega.' },
];
