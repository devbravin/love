import { timeline } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function TimelineItem({ item, index, isRevealed }) {
  const isEven = index % 2 === 0;
  
  // Function to render description with Tamil text in italic
  const renderDescription = (text) => {
    const parts = text.split(/(\([^)]+\))/g);
    return parts.map((part, i) => {
      if (part.match(/\([^)]+\)/)) {
        // This is Tamil text in parentheses - render in italic
        return (
          <span key={i} className="italic font-medium" style={{ color: '#8B1538' }}>
            {part}
          </span>
        );
      }
      return part;
    });
  };
  
  return (
    <div 
      className={`relative flex items-start gap-6 md:gap-8 
                ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} 
                ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                transition-all duration-500`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="hidden md:block flex-1" />
      
      <div className="relative z-10 flex-shrink-0 mt-2">
        <div className="w-3 h-3 rounded-full ring-2 ring-white"
             style={{ backgroundColor: '#8B1538' }} />
      </div>
      
      <div className={`flex-1 md:max-w-[calc(50%-2rem)] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
        <div className="card p-5 sm:p-6">
          <span className="text-xs font-medium tracking-wide text-gray-400 uppercase">
            {item.date}
          </span>
          <h3 className="font-script text-lg font-medium text-gray-800 mt-1" style={{ color: '#8B1538' }}>
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mt-2">
            {renderDescription(item.description)}
          </p>
        </div>
      </div>
    </div>
  );
}

function TimelineSection() {
  const [ref, isRevealed] = useReveal({ threshold: 0.1 });

  return (
    <section id="timeline" className="section-padding" style={{ backgroundColor: '#fdfbf9' }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-script section-title text-3xl sm:text-4xl font-medium" style={{ color: '#8B1538' }}>
            Your Beautiful Journey
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle mt-4" style={{ color: '#d4526e' }}>
            Celebrating the love and light you bring to this world
          </p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div 
            className="absolute left-1.5 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{ backgroundColor: '#e8c4c4' }}
            aria-hidden="true"
          />
          
          <div className="space-y-8 md:space-y-10 pl-8 md:pl-0">
            {timeline.slice(0, 5).map((item, index) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                index={index}
                isRevealed={isRevealed}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineSection;
