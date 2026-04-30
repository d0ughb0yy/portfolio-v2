import { motion } from 'framer-motion';
import { getTierColor } from '../../data/skills';

const iconMap = {
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  radar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
    </svg>
  ),
  network: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 8v6m-5 2v2m10-2v2"/>
    </svg>
  ),
  bot: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 12v4"/><path d="M8 12h.01"/><path d="M16 12h.01"/>
    </svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  )
};

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group flex flex-row h-full"
    >
      <div className="flex flex-col items-center justify-between pr-4 border-r border-border mr-4">
        <div className="text-primary group-hover:text-accent transition-colors">
          {iconMap[skill.icon]}
        </div>
        <div className="w-2 h-32 bg-bg rounded-full overflow-hidden my-2 relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            className="w-full rounded-full absolute bottom-0"
            style={{ backgroundColor: getTierColor(skill.tier) }}
          />
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-text">{skill.name}</h3>
        <p className="text-text-muted text-sm mb-4 flex-grow">{skill.description}</p>

        <div className="flex flex-wrap justify-start gap-2 mt-auto">
          {skill.tools.map((tool, i) => (
            <span key={i} className="px-3 py-1 text-xs bg-bg-hover rounded-full text-text-muted">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
