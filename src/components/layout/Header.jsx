import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<button
  onClick={() => scroll.scrollToTop()}
  className="text-xl font-bold text-primary hover:text-accent transition-colors cursor-pointer"
>
  TinL
</button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-text-muted hover:text-primary cursor-pointer transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://d0ughb0y.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors"
          >
            Blog
          </a>
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
      {isMenuOpen && (
        <div className="md:hidden bg-bg-card border-t border-border">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-text-muted hover:text-primary py-2 cursor-pointer transition-colors"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://d0ughb0y.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary py-2 transition-colors"
              onClick={closeMenu}
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
