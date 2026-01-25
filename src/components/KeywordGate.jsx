import { useState, useCallback } from 'react';
import { SECRET_KEYWORD } from '../data/content';
import HeartBurst from './HeartBurst';

function KeywordGate({ onUnlock }) {
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [showBurst, setShowBurst] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    if (keyword.toLowerCase().trim() === SECRET_KEYWORD.toLowerCase()) {
      setError(false);
      setShowBurst(true);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  }, [keyword]);

  const handleBurstComplete = useCallback(() => {
    localStorage.setItem('birthday_unlocked', 'true');
    onUnlock();
  }, [onUnlock]);

  return (
    <div 
      className="fixed inset-0 min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{ 
        background: 'linear-gradient(135deg, #fcf8f9 0%, #fff1f5 50%, #fce4ec 100%)'
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute top-[10%] left-[15%] text-pink-300/40 text-3xl">💕</div>
      <div className="absolute top-[25%] left-[5%] text-pink-400/30 text-2xl">🌸</div>
      <div className="absolute top-[15%] right-[10%] text-pink-300/30 text-xl">💕</div>
      <div className="absolute top-[60%] left-[8%] text-pink-400/25 text-4xl">🌸</div>
      <div className="absolute top-[45%] right-[5%] text-pink-300/35 text-3xl">🌸</div>
      <div className="absolute bottom-[25%] right-[15%] text-pink-400/30 text-2xl">💕</div>
      <div className="absolute bottom-[15%] left-[20%] text-pink-300/25 text-xl">🌸</div>
      <div className="absolute top-[35%] right-[20%] text-pink-400/20 text-2xl">💕</div>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-20 w-full">
        <div className="max-w-[960px] w-full mb-8">
          <h1 className="text-gray-900 tracking-tight text-[32px] md:text-[40px] font-bold leading-tight text-center pb-3 pt-6">
            Happy Birthday, My Love
          </h1>
          <p className="text-[#9a4c66] text-center text-lg">
            A special day deserves a special surprise.
          </p>
        </div>

        <div className={`relative w-full max-w-md ${shaking ? 'shake' : ''}`}>
          <div 
            className="bg-white p-6 rounded-[32px] transform transition-transform hover:rotate-1 duration-500 border-[12px] border-white overflow-hidden"
            style={{ 
              boxShadow: '0 35px 60px -15px rgba(240, 66, 124, 0.3)'
            }}
          >
            <div className="w-full aspect-square bg-[#f3e7eb] overflow-hidden mb-6 relative rounded-2xl">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=600&fit=crop)'
                }}
              />
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <p className="text-gray-900 text-lg font-bold leading-tight tracking-tight mb-1">
                  Unlock my heart
                </p>
                <p className="text-[#9a4c66] text-sm font-normal">
                  Enter our secret code to reveal your gift
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex justify-center py-3">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value);
                      setError(false);
                    }}
                    placeholder="kannamma"
                    className={`w-full max-w-xs px-4 py-3 text-center border-0 border-b-2 transition-all duration-200
                      text-lg font-medium bg-transparent
                      placeholder:text-pink-300 placeholder:italic
                      focus:outline-none focus:ring-0
                      ${error 
                        ? 'border-red-400 text-red-600' 
                        : 'border-[#e7cfd7] focus:border-[#f0427c] text-gray-900'
                      }`}
                    autoComplete="off"
                    autoFocus
                  />
                </div>

                <div className="w-full pt-2">
                  <button
                    type="submit"
                    className="w-full flex cursor-pointer items-center justify-center rounded-xl h-12 px-5 text-white text-base font-bold leading-normal tracking-wide transition-colors"
                    style={{ 
                      backgroundColor: '#f0427c',
                      boxShadow: '0 4px 14px 0 rgba(240, 66, 124, 0.2)'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#d93a6e'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f0427c'}
                  >
                    <span className="truncate">Unlock My Heart</span>
                  </button>
                </div>

                <p className="text-[#9a4c66] text-xs font-normal mt-2 italic text-center">
                  Hint: The day we first met.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-20 py-10 text-center">
        <div className="flex items-center justify-center gap-2 text-[#9a4c66]">
          <span className="text-sm">💕</span>
          <span className="text-xs font-medium uppercase tracking-widest">Always &amp; Forever</span>
          <span className="text-sm">💕</span>
        </div>
      </footer>

      {showBurst && <HeartBurst onComplete={handleBurstComplete} />}
    </div>
  );
}

export default KeywordGate;
