import { motion } from "framer-motion";
import { MessageCircle, Mail, Globe, Instagram, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: MessageCircle, label: "WhatsApp", value: "62 981773529", href: "https://wa.me/5562981773529" },
  { icon: Mail, label: "Email", value: "contato@ivannogueira.com.br", href: "mailto:contato@ivannogueira.com.br" },
  { icon: Globe, label: "Website", value: "curriculo.ivannogueira.com.br", href: "https://gestor.ivannogueira.com.br" },
  { icon: Instagram, label: "Instagram", value: "@ivannogueira.mkt", href: "https://instagram.com/ivannogueira.mkt" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Nome: ${form.name}%0AEmail: ${form.email}%0AAssunto: ${form.subject}%0AMensagem: ${form.message}`;
    window.open(`https://wa.me/5562981773529?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">&lt; Contato /&gt;</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Vamos trabalhar juntos?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border hover-glow transition-all duration-300 group"
              >
                <info.icon className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" size={22} />
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">{info.label}</p>
                  <p className="text-foreground font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {[
              { key: "name", placeholder: "Seu nome", type: "text" },
              { key: "email", placeholder: "Seu email", type: "email" },
              { key: "subject", placeholder: "Assunto", type: "text" },
            ].map((field) => (
              <input
                key={field.key}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
              />
            ))}
            <textarea
              placeholder="Sua mensagem"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:scale-105 transition-transform duration-300 glow-primary"
            >
              Enviar Mensagem
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
