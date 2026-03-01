import { motion } from "framer-motion";
import {
  Zap, Layout, PenTool, Video, Target, Mail, MessageCircle, Phone, Users, BookOpen
} from "lucide-react";

const marketingSkills = [
  { icon: Zap, label: "Construção de Funil de Vendas" },
  { icon: Layout, label: "Construção de Páginas" },
  { icon: PenTool, label: "WebDesign" },
  { icon: Video, label: "Edição de Vídeos" },
  { icon: Target, label: "Tráfego Pago" },
  { icon: Mail, label: "Automações de Email" },
  { icon: MessageCircle, label: "Automações de Instagram" },
  { icon: Phone, label: "Automações de WhatsApp" },
  { icon: Users, label: "Consultoria" },
  { icon: BookOpen, label: "Instrutor de Ferramentas" },
  { icon: BookOpen, label: "Criação de Sistemas" },
  { icon: BookOpen, label: "Criação de Aplicações" },
  { icon: BookOpen, label: "Criação de Dashboards" },
  { icon: BookOpen, label: "Criação de Agentes de I.A" },
  { icon: BookOpen, label: "Integrações com APIs" },
];

const softwareSkills = [  
  { name: "N8n", level: 95 },
  { name: "Make", level: 95 },
  { name: "Manychat", level: 90 },
  { name: "Nicochat", level: 95 },
  { name: "Gpt Make", level: 95 },
  { name: "Apis em Geral", level: 98 },
  { name: "Vibe Coding", level: 95 },
  { name: "Adobe Photoshop", level: 90 },
  { name: "Adobe Illustrator", level: 80 },
  { name: "Adobe Premiere", level: 95 },
  { name: "Adobe After Effects", level: 75 },
  { name: "Capcut", level: 85 },
  { name: "Builderall", level: 95 },
  { name: "WordPress", level: 85 },
];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">&lt; Habilidades /&gt;</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Competências & Ferramentas
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Marketing Skills */}
          <div>
            <h3 className="font-display text-lg text-primary mb-6 tracking-wider">MARKETING</h3>
            <div className="grid grid-cols-2 gap-3">
              {marketingSkills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover-glow"
                >
                  <skill.icon className="text-primary flex-shrink-0" size={18} />
                  <span className="text-foreground text-sm">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Software Skills */}
          <div>
            <h3 className="font-display text-lg text-primary mb-6 tracking-wider">SOFTWARE</h3>
            <div className="flex flex-col gap-5">
              {softwareSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground text-sm font-medium">{skill.name}</span>
                    <span className="text-primary text-sm font-display">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
