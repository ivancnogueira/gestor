import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Desde 2016",
    role: "Especialista em  Automações e Inteligencia Artificial",
    company: "Unni Marketing",
    description: "Atuando com Automações em Geral: email marketing, automação de processos, otimização de fluxos de trabalho, integrações com apis de terceiros, desenvolvimento de scripts personalizados para automação de tarefas, criação de agentes de i.a, integrações com api oficial, desenvolvimento de bots para automação de interações com usuários.",
  },
  {
    period: "2019–2021",
    role: "Editor e Captador de Vídeos e Design",
    company: "CRECI de Goiás",
    description: "Captação e edição profissional de vídeos para redes sociais (canal do YouTube, Facebook, TikTok, Instagram) e campanhas pagas. Design de peças para impressão e redes sociais.",
  },
  {
    period: "2017–2018",
    role: "Gerente de Marketing",
    company: "Dande Jóias",
    description: "Administração e estratégias de marketing para redes sociais, ecommerce e endomarketing — gerenciando 4 lojas.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">&lt; Experiências /&gt;</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Minha Jornada Profissional
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-16 md:pl-0 mb-14 last:mb-0"
            >
              {/* Dot with icon */}
              <div className="absolute left-3 md:left-1/2 top-6 w-7 h-7 bg-background border-2 border-primary rounded-full md:-translate-x-3.5 flex items-center justify-center glow-primary z-10">
                <Briefcase className="text-primary" size={14} />
              </div>

              <div className={`md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}`}>
                <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover-glow transition-all duration-300 group hover:border-primary/50">
                  {/* Accent bar */}
                  <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
                  
                  <div className="pl-4">
                    <span className="inline-block font-display text-primary text-xs font-semibold tracking-widest bg-primary/10 px-3 py-1 rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h3 className="font-body text-foreground font-bold text-lg">{exp.role}</h3>
                    <p className="text-primary/70 text-sm font-medium mt-1">{exp.company}</p>
                    <p className="text-muted-foreground/70 text-sm mt-3 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
