import { useMemo } from 'react';

function BackgroundAnimations() {
  const dots = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: `dot-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 3 + Math.random() * 5,
      opacity: 0.15 + Math.random() * 0.25,
      animationDuration: `${15 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * -15}s`,
    }));
  }, []);

  const smallHearts = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: `heart-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 8 + Math.random() * 6,
      opacity: 0.12 + Math.random() * 0.15,
      animationDuration: `${20 + Math.random() * 15}s`,
      animationDelay: `${Math.random() * -10}s`,
    }));
  }, []);

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="dot-float absolute rounded-full"
          style={{
            left: dot.left,
            top: dot.top,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: '#f4a0a0',
            opacity: dot.opacity,
            animationDuration: dot.animationDuration,
            animationDelay: dot.animationDelay,
          }}
        />
      ))}
      
      {smallHearts.map((heart) => (
        <span
          key={heart.id}
          className="heart-drift absolute"
          style={{
            left: heart.left,
            top: heart.top,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
            color: '#e8a0a0',
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

export default BackgroundAnimations;
