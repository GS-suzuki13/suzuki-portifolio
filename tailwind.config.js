/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nevoa: '#EEF0F3',
        papel: '#FFFFFF',
        tinta: '#161A33',
        grafite: '#5A6072',
        linha: '#D8DCE4',
        sinal: '#13A35B',
        // Cor do projeto em foco (muda conforme o visitante navega pelos projetos)
        acento: 'var(--acento)',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        texto: '38rem',
      },
    },
  },
  plugins: [],
};
