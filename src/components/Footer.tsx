import { Instagram, Linkedin, MessageCircle, Github } from 'lucide-react';

const socialLinks = [
  {
    platform: 'Instagram',
    icon: Instagram,
    link: 'https://instagram.com/gustavosuzuki'
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/gustavosuzuki'
  },
  {
    platform: 'WhatsApp',
    icon: MessageCircle,
    link: 'https://wa.me/5547999999999'
  },
  {
    platform: 'GitHub',
    icon: Github,
    link: 'https://github.com/gustavosuzuki'
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.platform}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 hover:bg-[#e50914] p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-[#e50914]/50"
                  aria-label={social.platform}
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Gustavo Suzuki. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
