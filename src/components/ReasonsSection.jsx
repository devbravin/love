import { useState } from 'react';
import { memories } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import Lightbox from './Lightbox';

function ReasonsSection() {
  const [ref, isRevealed] = useReveal();
  const [selectedMemory, setSelectedMemory] = useState(null);

  const displayMemories = memories.slice(0, 10);

  return (
    <section id="reasons" className="section-padding relative overflow-hidden" style={{ backgroundColor: '#f5e6d3' }}>
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl font-bold" style={{ color: '#8B1538' }}>
            Cute <span style={{ color: '#d4526e', fontStyle: 'italic' }}>Moments</span>
          </h2>
          <p className="font-script text-lg mt-4" style={{ color: '#d4526e' }}>
            Every moment that you never forget
          </p>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink-200 opacity-20 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-rose-200 opacity-20 blur-2xl"></div>
          
          {/* Photo frames grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {displayMemories.map((memory, index) => (
              <button
                key={memory.id}
                onClick={() => setSelectedMemory(memory)}
                className={`bg-white p-3 sm:p-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ 
                  transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div 
                  className="w-full aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-50"
                  style={{
                    backgroundImage: `url(/cutemoments/${
                      index < 5 ? `l${index + 1}` : `r${index - 4}`
                    }.jpeg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <p className="font-script text-center mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base">
                  {memory.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={!!selectedMemory}
        onClose={() => setSelectedMemory(null)}
        memory={selectedMemory}
      />
    </section>
  );
}

export default ReasonsSection;
