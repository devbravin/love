import { HER_NAME } from '../data/content';

function HeroSection() {
  const scrollToMemories = () => {
    const el = document.getElementById('memories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14"
      style={{ backgroundColor: '#fdfbf9' }}
    >
      <div className="container-main relative z-10 text-center py-20">
        <div className="space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight">
            <span style={{ color: '#8B1538' }}>Happy Birthday,</span>
            <br />
            <span className="italic" style={{ color: '#8B1538' }}>{HER_NAME}</span>
          </h1>
          
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-6">
            "Today is the day the world was blessed with the most amazing person.
            This page is my gift to you — a celebration of us, of you, of love."
          </p>
          
          <div className="pt-8">
            <button
              onClick={scrollToMemories}
              className="btn-primary group"
            >
              Begin our Story
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
