import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' }
  ];

return (
  <header className="fixed top-0 left-0 right-0 md:top-4 md:left-4 md:right-4 z-50">
  <nav className={`max-w-6xl mx-auto px-4 py-3 flex items-center justify-between bg-bg-card/80 backdrop-blur-md ${isMenuOpen ? '' : 'border-b border-border/30'} md:rounded-2xl`}>
<button
  onClick={() => scroll.scrollToTop()}
  className="text-xl font-bold text-primary hover:text-accent transition-colors cursor-pointer"
>
  TinL
</button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 px-4">
{navLinks.map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-text-muted hover:text-primary cursor-pointer transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://tinl-blog.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors"
            >
              Blog
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text-muted hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </nav>

{/* Mobile Menu */}
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ 
            opacity: 0, 
            y: -10, 
            boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)'
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.1)'
          }}
exit={{ 
  opacity: 0, 
  y: -10 
}}
          transition={{ 
            duration: 0.2, 
            ease: 'easeOut',
            boxShadow: { delay: 0.1, duration: 0.2 }
          }}
          className="md:hidden max-w-6xl mx-auto bg-bg-card/80 backdrop-blur-md"
        >
           <div className="flex flex-col items-center py-6 gap-2">
             {navLinks.map((link) => (
               <motion.div
                 key={link.to}
                 whileHover={{ scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 className="w-full"
               >
                 <Link
                   to={link.to}
                   spy={true}
                   smooth={true}
                   offset={-80}
                   duration={500}
                   className="block text-center text-lg text-text-muted hover:text-primary py-3 cursor-pointer transition-colors"
                   onClick={closeMenu}
                 >
                   {link.label}
                 </Link>
               </motion.div>
             ))}
             <motion.div
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="w-full"
             >
               <a
                 href="https://tinl-blog.netlify.app/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block text-center text-lg text-text-muted hover:text-primary py-3 transition-colors"
                 onClick={closeMenu}
               >
                 Blog
               </a>
             </motion.div>
           </div>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
