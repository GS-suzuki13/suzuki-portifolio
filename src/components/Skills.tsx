import { Code2 } from 'lucide-react';

const skills = [
  'Python',
  'C#',
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Git & GitHub',
  'APIs REST'
];

export default function Skills() {
  return (
    <section className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-8 h-8 text-[#e50914]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Tecnologias</h2>
          </div>

          <p className="text-gray-400 text-lg mb-12">
            Essas são algumas das linguagens e ferramentas que domino no meu dia a dia:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#1a1a1a] to-[#141414] p-6 rounded-xl border border-white/10 hover:border-[#e50914] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#e50914]/20"
              >
                <div className="text-center">
                  <p className="text-white font-semibold group-hover:text-[#e50914] transition-colors">
                    {skill}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
