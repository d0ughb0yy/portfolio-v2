import { motion } from 'framer-motion';
import projects from '../../data/projects.json';
import ProjectCarousel from '../ui/ProjectCarousel';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <ProjectCarousel projects={projects} />
      </motion.div>
    </section>
  );
};

export default Projects;
