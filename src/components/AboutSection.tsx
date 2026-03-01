import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import ivanPhoto from "@/assets/ivan-photo.jpeg";

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const infoCards = [
  { icon: GraduationCap, text: "MBA em Marketing e Estratégia Digitais — FacUnicamps (2018–2020)" },
  { icon: GraduationCap, text: "Administração — FacUnicamps (2009–2012)" },
  { icon: MapPin, text: "Localização: Goiânia - GO / Brasil" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl border-glow border opacity-70" />
              <img
                src={ivanPhoto}
                alt="Ivan Nogueira"
                className="relative w-72 h-80 sm:w-80 sm:h-96 object-cover object-top rounded-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-body text-sm font-semibold">
                ✦ Disponível para projetos
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="section-tag">&lt; Sobre Mim /&gt;</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Conheça minha trajetória
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Atuando no Mercado Digital desde 2010, sou especialista em Ferramentas para Negócios
              Online. Já ajudei diversos empreendedores, pessoas e empresas a faturarem mais
              através de estratégias de marketing, criação de funis, sistemas e inteligência artificial.
            </p>

            <div className="flex flex-col gap-4">
              {infoCards.map((card, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover-glow"
                >
                  <card.icon className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground text-sm">{card.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
