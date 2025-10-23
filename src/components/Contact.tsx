import { MessageCircle, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-[#141414]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Send className="w-8 h-8 text-[#0ea5e9]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Vamos conversar?</h2>
          </div>

          <p className="text-gray-400 text-lg mb-12">
            Curtiu meu perfil ou quer trocar uma ideia sobre tecnologia? Me chama 👇
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="https://wa.me/5547997609807"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 p-8 rounded-2xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-green-600/50"
            >
              <MessageCircle className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-white/80">Falar no WhatsApp</p>
            </a>

            <a
              href="mailto:gustavosuzuki3@gmail.com"
              className="group bg-gradient-to-br from-[#0ea5e9] to-[#b8070f] hover:from-[#ff1020] hover:to-[#0ea5e9] p-8 rounded-2xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-[#0ea5e9]/50"
            >
              <Mail className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">E-mail</h3>
              <p className="text-white/80">Enviar E-mail</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
