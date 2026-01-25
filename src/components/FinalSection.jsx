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
          <h2 className="section-title text-3xl sm:text-4xl font-medium mb-8">
            {finalMessage.title}
          </h2>
          <div className="title-underline mb-8"></div>
          
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
