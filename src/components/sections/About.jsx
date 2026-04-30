import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>
<div className="bg-bg-card rounded-2xl p-8 border border-border">
  <p className="text-lg text-text-muted leading-relaxed mb-4">
    Web application security specialist with expertise in web penetration testing and threat monitoring.
  </p>
  <p className="text-lg text-text-muted leading-relaxed mb-4">
    I help organizations strengthen their security posture through vulnerability identification and strategic mitigation.
  </p>
  <p className="text-lg text-text-muted leading-relaxed">
    Based in Pula, Croatia, I'm committed to continuous learning and professional development in this rapidly evolving field.
  </p>
</div>
      </motion.div>
    </section>
  );
};

export default About;
