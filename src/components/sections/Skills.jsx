import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
<h2 className="font-sans text-3xl md:text-4xl font-bold mb-12 text-center">
  Skills
</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
