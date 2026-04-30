import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

const paginate = useCallback((newDirection) => {
  setDirection(newDirection);
  setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
}, [projects.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      paginate(diff > 0 ? 1 : -1);
    }
  };

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') paginate(-1);
    if (e.key === 'ArrowRight') paginate(1);
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [paginate]);

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="h-full"
        >
          <ProjectCard project={projects[currentIndex]} />
        </motion.div>
      </AnimatePresence>

<button
  onClick={() => paginate(-1)}
  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"
  aria-label="Previous project"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
</button>

<button
  onClick={() => paginate(1)}
  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"
  aria-label="Next project"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6"/>
  </svg>
</button>

      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-border hover:bg-text-muted'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
