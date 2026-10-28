# Portfólio de Gustavo Suzuki

Site pessoal com os sistemas que desenvolvi e que estão no ar. Cada projeto
mostra as telas reais (desktop e celular), como funciona, o que tem por dentro,
as tecnologias, as contas de demonstração e os links para testar e ver o código.

Publicado em https://gustavosuzuki.vercel.app

## O que tem de interativo

- **Visualizador de projetos:** abas acessíveis por teclado, galeria de telas
  com ampliação, moldura de celular e credenciais com botão de copiar.
- **Cor que acompanha o projeto:** a página troca o tom de destaque para a cor
  do projeto em foco (`--acento`, uma propriedade CSS registrada com `@property`
  para fazer a transição).
- **Status ao vivo:** ao abrir a página, cada sistema é consultado e o hero
  mostra quantos estão no ar naquele momento.
- **Tecnologias com prova:** cada tecnologia aponta para os projetos em que foi
  usada. Um clique abre o projeto.

## Tecnologias

React 18, TypeScript, Vite, Tailwind CSS e Lucide. Fonte Archivo (eixo de
largura variável).

## Rodar localmente

```bash
npm install
npm run dev
```

## Onde mudar o conteúdo

- `src/data/projetos.ts`: projetos, telas, contas de demonstração e links.
- `src/data/perfil.ts`: contato, experiência, formação, tecnologias e serviços.
- `public/projetos/`: capturas de tela de cada sistema.
