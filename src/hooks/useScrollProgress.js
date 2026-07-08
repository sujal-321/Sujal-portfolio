import { useState, useEffect } from 'react';

export default function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far down the element has scrolled relative to the viewport
      // rect.top goes from 0 to -(elementHeight - viewportHeight)
      const scrolled = -rect.top;
      const scrollableRange = elementHeight - viewportHeight;
      
      if (scrollableRange <= 0) return;
      
      let currentProgress = scrolled / scrollableRange;
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref]);

  return progress;
}
