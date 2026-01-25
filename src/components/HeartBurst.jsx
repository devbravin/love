import { useEffect, useState } from 'react';

function HeartBurst({ onComplete }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      const angle = (i / particleCount) * 360;
      const distance = 150 + Math.random() * 200;
      const rad = (angle * Math.PI) / 180;
      
      return {
        id: i,
        tx: `${Math.cos(rad) * distance}px`,
        ty: `${Math.sin(rad) * distance}px`,
        rot: `${Math.random() * 720 - 360}deg`,
        delay: Math.random() * 100,
        emoji: Math.random() > 0.3 ? '💖' : Math.random() > 0.5 ? '💕' : '❤️',
      };
    });

    setParticles(newParticles);

    const timer = setTimeout(() => {
      onComplete?.();
    }, 900);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="heart-burst-container">
      {particles.map((p) => (
        <span
          key={p.id}
          className="heart-particle"
          style={{
            '--tx': p.tx,
            '--ty': p.ty,
            '--rot': p.rot,
            animationDelay: `${p.delay}ms`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}

export default HeartBurst;
