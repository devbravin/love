import { quotes } from '../data/content';
import { useReveal } from '../hooks/useReveal';

function QuoteCard({ quote }) {
  return (
    <div className="card p-6 sm:p-8 h-full flex flex-col justify-between bg-white">
      <div>
        <p className="text-gray-600 leading-relaxed italic text-sm sm:text-base">
          "{quote.text}"
        </p>
      </div>
      <p className="text-xs text-gray-400 mt-4">
        — {quote.author}
      </p>
    </div>
  );
}

function QuotesSection() {
  const [ref, isRevealed] = useReveal();

  return (
    <section id="quotes" className="section-padding" style={{ backgroundColor: '#fdfbf9' }}>
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl sm:text-4xl font-medium">
            Whispers of Love
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle mt-4">
            Quotes that describe my love for you
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto reveal-stagger ${isRevealed ? 'revealed' : ''}`}
        >
          {quotes.slice(0, 3).map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuotesSection;
