import { reasons } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function ReasonsSection() {
  const [ref, isRevealed] = useReveal();

  return (
    <section id="reasons" className="section-padding" style={{ backgroundColor: '#fef5f5' }}>
      <div className="container-main">
        <div className="text-center mb-10">
          <h2 className="section-title text-3xl sm:text-4xl font-medium">
            Reasons I Love You
          </h2>
          <div className="title-underline"></div>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto reveal-stagger ${isRevealed ? 'revealed' : ''}`}
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-3
                       bg-white rounded-md
                       text-gray-600 text-sm
                       shadow-sm hover:shadow-md
                       transition-all duration-300 cursor-default"
            >
              <span style={{ color: '#8B1538' }}>♥</span>
              <span>{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReasonsSection;
