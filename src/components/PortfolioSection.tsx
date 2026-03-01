import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Campanha de Lançamento Digital", category: "Tráfego Pago", description: "Estratégia completa de tráfego pago para lançamento de infoproduto com ROI de 5x." },
  { title: "Automação de Vendas WhatsApp", category: "Automação", description: "Fluxo automatizado de atendimento e vendas via WhatsApp para e-commerce." },
  { title: "Rebranding Digital Completo", category: "Social Media", description: "Reformulação visual e estratégica da presença digital de marca de joias." },
  { title: "Funil de Vendas High-Ticket", category: "Funil de Vendas", description: "Construção de funil completo para serviço de consultoria premium." },
  { title: "Gestão de Redes Sociais", category: "Social Media", description: "Planejamento e criação de conteúdo para Instagram com crescimento de 300%." },
  { title: "E-commerce Performance", category: "E-commerce", description: "Otimização de loja virtual com aumento de 150% nas conversões." },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">&lt; Portfólio /&gt;</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Projetos e Cases de Sucesso
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover-glow transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl text-primary/20 font-bold">IN</span>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>

              <div className="p-6">
                <span className="inline-block text-xs font-display text-primary tracking-wider bg-primary/10 px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-body text-foreground font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
