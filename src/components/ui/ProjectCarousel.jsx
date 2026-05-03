import { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: 'x',
    watchDrag: (emblaApi, evt) => {
      return !(evt instanceof window.MouseEvent);
    }
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const initialized = useRef(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || initialized.current) return;
    initialized.current = true;
    emblaApi.on('select', onSelect);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!emblaApi) return;
      if (e.key === 'ArrowLeft') emblaApi.scrollPrev();
      if (e.key === 'ArrowRight') emblaApi.scrollNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {projects.map((project, index) => (
            <div className="flex-[0_0_100%] min-w-0 pl-4 pr-4" style={{ flex: '0 0 100%' }} key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 p-2 text-text-muted hover:text-primary transition-colors cursor-pointer z-10"
        aria-label="Previous project"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>

      <button
        onClick={scrollNext}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 p-2 text-text-muted hover:text-primary transition-colors cursor-pointer z-10"
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
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-primary w-8' : 'bg-border hover:bg-text-muted'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;