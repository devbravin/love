import { useState } from 'react';
import { memories } from '../data/content';
import Lightbox from './Lightbox';
import { useReveal } from '../hooks/useReveal';

function MemoriesSection() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [gridRef, isGridRevealed] = useReveal();

  const rotations = ['rotate-3', '-rotate-1', 'rotate-2', '-rotate-2'];

  return (
    <section id="memories" className="section-padding" style={{ backgroundColor: '#fdfbf9' }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 font-bold tracking-tight" style={{ color: '#1a1a1a' }}>
            Our Cherished Moments
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#8B1538' }}></div>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger ${isGridRevealed ? 'revealed' : ''}`}
        >
          {memories.slice(0, 4).map((memory, index) => (
            <button
              key={memory.id}
              onClick={() => setSelectedMemory(memory)}
              className={`polaroid ${rotations[index]} mt-12 lg:mt-8 group text-left transition-all duration-300 hover:scale-105 hover:rotate-0
                       focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2`}
              aria-label={`View ${memory.title}`}
            >
              <div className="bg-white p-4 shadow-lg">
                <div 
                  className="w-full aspect-square object-cover mb-4"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-${
                      index === 0 ? '1516589178581-6cd7833ae3b2' :
                      index === 1 ? '1522673607200-164d1b6ce486' :
                      index === 2 ? '1529626455594-4ff0802cfb7e' :
                      '1494790108377-be9c29b29330'
                    }?w=400&h=400&fit=crop)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <p className="font-script text-2xl text-slate-800">{memory.title}</p>
                <p className="text-xs text-slate-500 uppercase tracking-tighter">{memory.caption}</p>
              </div>
            </button>
          ))}
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
