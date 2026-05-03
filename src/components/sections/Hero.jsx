import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Hero = () => {
  return (
<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-bg via-bg to-bg-card animate-gradient">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center px-6 max-w-4xl"
  >
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="font-mono text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-text via-primary to-accent bg-clip-text text-transparent"
    >
      Tin Lučić
    </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-mono text-xl md:text-2xl text-text-muted mb-2"
        >
          Ethical Web Hacker & Cybersecurity Analyst
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-mono text-base text-text-muted/80 max-w-2xl mx-auto mb-6"
        >
          Experienced in web security principles and threat monitoring
        </motion.p>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 1 }}
>
  <Link
    to="contact"
    smooth={true}
    offset={-80}
    duration={500}
    className="inline-block px-8 py-3 bg-primary hover:bg-primary/80 text-bg font-semibold rounded-lg transition-colors cursor-pointer"
  >
    Get In Touch
  </Link>
</motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
