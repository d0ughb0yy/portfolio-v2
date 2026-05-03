import { motion } from 'framer-motion';
import { Shield, Radar, Network, Bot, Mail, Globe } from 'lucide-react';
import { getTierColor } from '../../data/skills';

const iconMap = {
  shield: Shield,
  radar: Radar,
  network: Network,
  bot: Bot,
  mail: Mail,
  globe: Globe,
};

const SkillCard = ({ skill, index }) => {
  const IconComponent = iconMap[skill.icon] || Shield;
  const tierColor = getTierColor(skill.tier);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.15, delay: index * 0.1 }}
      className="flex gap-4"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.15 }}
        className="bg-bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50 hover:border-primary/70 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] flex gap-4 w-full"
      >
       <div className="relative w-2 bg-border/30 rounded-full overflow-hidden flex-shrink-0">
         <div 
           className="absolute bottom-0 w-full rounded-full"
           style={{ 
             height: `${skill.proficiency}%`,
             backgroundColor: tierColor
           }}
         />
       </div>
       
       <div className="flex-1">
         <div className="flex items-center gap-4 mb-4">
           <div className="text-primary">
             <IconComponent size={28} />
           </div>
           <h3 className="text-xl font-semibold text-text">
             {skill.name}
           </h3>
         </div>
         
         <p className="text-sm text-text-muted mb-4">
           {skill.description}
         </p>
         
         <div className="flex flex-wrap gap-2">
           {skill.tools.map((tool, i) => (
             <span key={i} className="px-3 py-1 text-xs bg-white/5 rounded-full text-text-muted border border-white/10">
               {tool}
             </span>
           ))}
         </div>
       </div>
     </motion.div>
   </motion.div>
  );
};

export default SkillCard;
