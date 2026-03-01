import { Instagram, MessageCircle, Mail } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  return (
    <footer className="border-t border-primary/30 bg-background">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            Ivan Nogueira © 2025 — Consultor em Marketing Digital
          </p>

          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground text-xs hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="https://instagram.com/ivannogueira.mkt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/5562981773529" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle size={18} />
            </a>
            <a href="mailto:contato@ivannogueira.com.br" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <p className="text-center text-muted-foreground/50 text-xs mt-8">
          Desenvolvido com ❤️ por Ivan Nogueira.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
