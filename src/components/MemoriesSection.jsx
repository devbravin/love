import { useState } from 'react';
import { memories } from '../data/content';
import Lightbox from './Lightbox';
import { useReveal } from '../hooks/useReveal';

function MemoriesSection() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [ref, isRevealed] = useReveal();

  const leftMemories = memories.slice(0, 4);
  const rightMemories = memories.slice(4, 8);

  return (
    <section id="memories" className="section-padding relative" style={{ backgroundColor: '#fdfbf9' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl mb-4 font-bold tracking-tight" style={{ color: '#8B1538' }}>
            Lovely Memories
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#8B1538' }}></div>
          <p className="font-script text-lg mt-4" style={{ color: '#d4526e' }}>
            Cherished moments of beautiful journey 
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Center vertical line (road) */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-1 top-0 bottom-0 hidden md:block"
            style={{ backgroundColor: '#e8c4c4' }}
            aria-hidden="true"
          />

          {/* Left side hanging frames */}
          <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-0 space-y-0">
            {leftMemories.map((memory, index) => (
              <div 
                key={memory.id}
                className={`relative animate-swing ${isRevealed ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                style={{ 
                  transformOrigin: 'top center',
                  animationDelay: `${index * 0.2}s`,
                  marginTop: index === 0 ? '0' : '0'
                }}
              >
                {index === 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 sm:h-12 bg-gray-300 -top-8 sm:-top-12"></div>
                )}
                <button
                  onClick={() => setSelectedMemory(memory)}
                  className="block bg-white p-2 sm:p-3 shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  style={{ 
                    transform: index % 2 === 0 ? 'rotate(-6deg)' : 'rotate(4deg)',
                    marginTop: index === 0 ? '0' : '180px'
                  }}
                  aria-label={`View ${memory.title}`}
                >
                  <div 
                    className="w-28 h-32 sm:w-36 sm:h-44 lg:w-44 lg:h-52 bg-gradient-to-br from-rose-100 to-rose-50"
                    style={{
                      backgroundImage: `url(/beautifulmemories/l${index + 1}.jpeg)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <p className="font-script text-center mt-2 text-gray-700 text-xs sm:text-sm lg:text-base">{memory.title}</p>
                </button>
                {index < leftMemories.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-16 sm:h-20 bg-gray-300 bottom-0 translate-y-16 sm:translate-y-20"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right side hanging frames */}
          <div className="absolute right-4 sm:right-8 md:right-12 lg:right-16 top-12 space-y-0">
            {rightMemories.map((memory, index) => (
              <div 
                key={memory.id}
                className={`relative animate-swing ${isRevealed ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                style={{ 
                  transformOrigin: 'top center',
                  animationDelay: `${(index + 4) * 0.2}s`,
                  marginTop: index === 0 ? '0' : '0'
                }}
              >
                {index === 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 sm:h-12 bg-gray-300 -top-8 sm:-top-12"></div>
                )}
                <button
                  onClick={() => setSelectedMemory(memory)}
                  className="block bg-white p-2 sm:p-3 shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  style={{ 
                    transform: index % 2 === 0 ? 'rotate(5deg)' : 'rotate(-7deg)',
                    marginTop: index === 0 ? '0' : '180px'
                  }}
                  aria-label={`View ${memory.title}`}
                >
                  <div 
                    className="w-28 h-32 sm:w-36 sm:h-44 lg:w-44 lg:h-52 bg-gradient-to-br from-rose-100 to-rose-50"
                    style={{
                      backgroundImage: `url(/beautifulmemories/r${index + 1}.jpeg)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <p className="font-script text-center mt-2 text-gray-700 text-xs sm:text-sm lg:text-base">{memory.title}</p>
                </button>
                {index < rightMemories.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-16 sm:h-20 bg-gray-300 bottom-0 translate-y-16 sm:translate-y-20"></div>
                )}
              </div>
            ))}
          </div>

          {/* Spacer to ensure section height */}
          <div style={{ height: '1200px' }} className="sm:h-[1400px] lg:h-[1600px]"></div>
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

export default MemoriesSection;
