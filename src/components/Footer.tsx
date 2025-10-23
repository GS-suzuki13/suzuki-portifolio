import { Instagram, Linkedin, MessageCircle, Github } from 'lucide-react';

const socialLinks = [
  {
    platform: 'Instagram',
    icon: Instagram,
<<<<<<< HEAD
    link: 'https://www.instagram.com/oreal.suzuki/'
=======
    link: 'https://instagram.com/oreal.suzuki'
>>>>>>> b0493e1b1429284cf5a18e6da9b383836b503c6b
  },
  {
    platform: 'LinkedIn',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/gustavo-suzuki-858189163/'
  },
  {
    platform: 'WhatsApp',
    icon: MessageCircle,
    link: 'https://wa.me/5547997609807'
  },
  {
    platform: 'GitHub',
    icon: Github,
    link: 'https://github.com/GS-suzuki13'
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
                  className="group bg-white/5 hover:bg-[#0ea5e9] p-4 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-[#0ea5e9]/50"
                  aria-label={social.platform}
                >
                  <Icon className="w-6 h-6 text-white" />
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Gustavo Suzuki.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
