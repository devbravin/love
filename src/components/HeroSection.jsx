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
      {/* Left hanging photo frames - chain of 2 */}
      <div className="absolute left-2 sm:left-4 lg:left-8 xl:left-16 top-24 z-0 animate-swing" style={{ transformOrigin: 'top center' }}>
        <div className="relative">
          {/* Hanging string */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 sm:h-12 bg-gray-300 -top-8 sm:-top-12"></div>
          {/* Photo frame 1 */}
          <div className="bg-white p-2 sm:p-3 shadow-xl rotate-[-8deg] hover:rotate-0 transition-transform duration-300">
            <div 
              className="w-24 h-28 sm:w-32 sm:h-40 lg:w-40 lg:h-48 bg-gradient-to-br from-rose-100 to-rose-50"
              style={{
                backgroundImage: 'url(/hero/l1.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <p className="font-script text-center mt-1 sm:mt-2 text-gray-700 text-xs sm:text-sm lg:text-base">Sweet Memories</p>
          </div>
          {/* Chain to frame 2 */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-6 sm:h-8 bg-gray-300 bottom-0 translate-y-6 sm:translate-y-8"></div>
        </div>
      </div>

      <div className="absolute left-2 sm:left-4 lg:left-8 xl:left-16 top-[200px] sm:top-[260px] lg:top-[340px] z-0 animate-swing" style={{ transformOrigin: 'top center', animationDelay: '0.3s' }}>
        <div className="relative">
          {/* Photo frame 2 */}
          <div className="bg-white p-2 sm:p-3 shadow-xl rotate-[5deg] hover:rotate-0 transition-transform duration-300">
            <div 
              className="w-24 h-28 sm:w-32 sm:h-40 lg:w-40 lg:h-48 bg-gradient-to-br from-rose-100 to-rose-50"
              style={{
                backgroundImage: 'url(/hero/l2.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <p className="font-script text-center mt-1 sm:mt-2 text-gray-700 text-xs sm:text-sm lg:text-base">Your Smile</p>
          </div>
        </div>
      </div>

      {/* Right hanging photo frames - chain of 2 */}
      <div className="absolute right-2 sm:right-4 lg:right-8 xl:right-16 top-32 z-0 animate-swing" style={{ transformOrigin: 'top center', animationDelay: '0.5s' }}>
        <div className="relative">
          {/* Hanging string */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-8 sm:h-12 bg-gray-300 -top-8 sm:-top-12"></div>
          {/* Photo frame 1 */}
          <div className="bg-white p-2 sm:p-3 shadow-xl rotate-[6deg] hover:rotate-0 transition-transform duration-300">
            <div 
              className="w-24 h-28 sm:w-32 sm:h-40 lg:w-40 lg:h-48 bg-gradient-to-br from-rose-100 to-rose-50"
              style={{
                backgroundImage: 'url(/hero/r1.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <p className="font-script text-center mt-1 sm:mt-2 text-gray-700 text-xs sm:text-sm lg:text-base">Your Beauty</p>
          </div>
          {/* Chain to frame 2 */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-6 sm:h-8 bg-gray-300 bottom-0 translate-y-6 sm:translate-y-8"></div>
        </div>
      </div>

      <div className="absolute right-2 sm:right-4 lg:right-8 xl:right-16 top-[210px] sm:top-[280px] lg:top-[360px] z-0 animate-swing" style={{ transformOrigin: 'top center', animationDelay: '0.8s' }}>
        <div className="relative">
          {/* Photo frame 2 */}
          <div className="bg-white p-2 sm:p-3 shadow-xl rotate-[-7deg] hover:rotate-0 transition-transform duration-300">
            <div 
              className="w-24 h-28 sm:w-32 sm:h-40 lg:w-40 lg:h-48 bg-gradient-to-br from-rose-100 to-rose-50"
              style={{
                backgroundImage: 'url(/hero/r2.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <p className="font-script text-center mt-1 sm:mt-2 text-gray-700 text-xs sm:text-sm lg:text-base">Cute : 2020</p>
          </div>
        </div>
      </div>

      {/* Happy Birthday heading in the center between frames */}
      <div className="absolute top-48 sm:top-56 md:top-64 left-1/2 -translate-x-1/2 z-20 text-center px-4">
        <h1 className="font-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
          <span style={{ color: '#8B1538' }}>Happy Birthday,</span>
          <br />
          <span className="italic" style={{ color: '#8B1538' }}>{HER_NAME}</span>
        </h1>
      </div>

      <div className="container-main relative z-10 text-center py-20 mt-40 sm:mt-48">
        <div className="space-y-6">
          <p className="font-script text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-6" style={{ color: '#8B1538' }}>
            "On this special day, I celebrate the love of my life. You are my everything, my forever, my heart's greatest treasure. 
            This page is a love letter to you — celebrating your beauty, your soul, and the endless love we share. 💕"
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
