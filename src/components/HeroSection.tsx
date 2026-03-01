import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import ivanPhoto from "@/assets/ivan-photo-new.jpeg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-primary/20 rotate-45 animate-float" />
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-primary/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-32 left-[20%] w-4 h-4 border border-primary/20 rotate-45 animate-float-delayed" />
        <div className="absolute top-[60%] right-[10%] w-2 h-2 bg-primary/15 rotate-45 animate-float" />
        <div className="absolute bottom-20 right-[30%] w-3 h-3 border border-primary/10 rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p variants={item} className="section-tag mb-6">
              &lt; Consultor em Marketing Digital /&gt;
            </motion.p>

            <motion.h1 variants={item} className="mb-6">
              <span
                className="glitch-text font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground block leading-tight"
                data-text="IVAN"
              >
                IVAN
              </span>
              <span
                className="glitch-text font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient-primary block leading-tight"
                data-text="NOGUEIRA"
              >
                NOGUEIRA
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8">
              Especialista em Ferramentas para Negócios Online desde 2016
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="https://drive.google.com/drive/folders/0By4JhO3IDsAbblA2ejdTTk5SLTQ?resourcekey=0-pUnYeQ_uGv1A3pU8g-26Ug&usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:scale-105 transition-transform duration-300 glow-primary"
              >
                Ver Portfólio
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5562981773529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-body font-semibold rounded-lg hover:scale-105 hover-glow transition-transform duration-300"
              >
                <MessageCircle size={18} />
                Falar no WhatsApp
              </a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center">
                <AnimatedCounter target={15} prefix="+" />
                <p className="text-muted-foreground text-sm mt-1">anos no mercado</p>
              </div>
              <div className="text-center">
                <AnimatedCounter target={50} prefix="+" />
                <p className="text-muted-foreground text-sm mt-1">automações criadas</p>
              </div>
              <div className="text-center">
                <AnimatedCounter target={150} prefix="+" />
                <p className="text-muted-foreground text-sm mt-1">sites e páginas criadas</p>
              </div>
              <div className="text-center">
                <AnimatedCounter target={30} prefix="+" />
                <p className="text-muted-foreground text-sm mt-1">agentes de I.A criados</p>
              </div>
              <div className="text-center">
                <AnimatedCounter target={50} prefix="+" />
                <p className="text-muted-foreground text-sm mt-1">apis integradas</p>
              </div>
            </motion.div>
          </div>

          {/* Photo — large, no borders */}
          <motion.div variants={item} className="flex-shrink-0">
            <img
              src={ivanPhoto}
              alt="Ivan Nogueira - Consultor em Marketing Digital"
              className="w-80 h-[28rem] sm:w-96 sm:h-[32rem] object-cover object-top rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
