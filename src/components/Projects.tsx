import { Folder, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Netflix Suzuki',
    description: 'Um clone funcional da interface da Netflix com destaque para responsividade e consumo de API para exibição de filmes e séries.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TMDB API'],
    liveUrl: 'https://netflix-suzuki.vercel.app/',
    githubUrl: 'https://github.com/seuusuario/netflix-suzuki'
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Folder className="w-8 h-8 text-[#0ea5e9]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Projetos</h2>
          </div>

          <p className="text-gray-400 text-lg mb-12">
            Aqui estão alguns dos meus trabalhos e projetos pessoais:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#141414] rounded-2xl border border-white/10 hover:border-[#0ea5e9] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0ea5e9]/20 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-[#0ea5e9]/20 to-[#141414] flex items-center justify-center border-b border-white/10 overflow-hidden">
                  <img
                    src="/image.png"
                    alt="Netflix Suzuki Preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#0ea5e9] transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#0ea5e9]/20 text-[#0ea5e9] rounded-full text-sm font-medium border border-[#0ea5e9]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-[#0ea5e9] transition-colors font-medium"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Ver Projeto
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-[#0ea5e9] transition-colors font-medium"
                    >
                      <Github className="w-5 h-5" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
