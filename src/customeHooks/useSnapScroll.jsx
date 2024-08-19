import { useEffect, useState } from 'react';

const useSnapScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.div_poster');
      let newSection = currentSection;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // Detecta si la sección está visible en más del 50%
        if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
          newSection = index;
        }
      });

      // Solo actualiza si se detecta una nueva sección
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
        window.scrollTo({
          top: sections[newSection].offsetTop,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  return currentSection;
};

export default useSnapScroll;
