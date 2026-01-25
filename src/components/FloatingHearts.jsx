import { useMemo } from 'react';

function FloatingHearts({ count = 15 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 12 + Math.random() * 20,
      animationDelay: `${Math.random() * -8}s`,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, [count]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="float-heart text-pink-300"
          style={{
            left: heart.left,
            top: heart.top,
            fontSize: `${heart.size}px`,
            animationDelay: heart.animationDelay,
            opacity: heart.opacity,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
