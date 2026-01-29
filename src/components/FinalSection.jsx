import { useCallback } from 'react';
import { HER_NAME, YOUR_NAME, finalMessage } from '../data/content';

function FinalSection() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section 
      id="final" 
      className="section-padding overflow-hidden"
      style={{ backgroundColor: '#fdfbf9' }}
    >
      <div className="container-main">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative frame with background image */}
          <div className="relative mx-auto mb-12 max-w-lg">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-12"
              style={{
                backgroundImage: 'url(/bg.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '8px solid white',
                boxShadow: '0 20px 60px rgba(139, 21, 56, 0.3)'
              }}
            >
              <h2 
                className="font-script text-3xl sm:text-4xl md:text-5xl leading-tight"
                style={{ 
                  color: '#8B1538',
                  fontWeight: '900',
                  textShadow: '3px 3px 6px rgba(255, 255, 255, 1), -3px -3px 6px rgba(255, 255, 255, 1), 3px -3px 6px rgba(255, 255, 255, 1), -3px 3px 6px rgba(255, 255, 255, 1), 0 0 15px rgba(255, 255, 255, 0.9), 0 0 25px rgba(255, 255, 255, 0.8)'
                }}
              >
                {finalMessage.title}
              </h2>
            </div>
          </div>
          
          <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            {finalMessage.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            {finalMessage.signature}
          </p>
          
          <p className="mt-6 font-script text-2xl sm:text-3xl" style={{ color: '#8B1538' }}>
            {YOUR_NAME}
          </p>
          
          <div className="mt-10">
            <button
              onClick={scrollToTop}
              className="btn-secondary text-sm"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
      
      <footer className="mt-16 pt-8 border-t border-rose-100 text-center">
        <p className="text-gray-400 text-xs">
          Made with ♥ for {HER_NAME}
        </p>
      </footer>
    </section>
  );
}

export default FinalSection;
