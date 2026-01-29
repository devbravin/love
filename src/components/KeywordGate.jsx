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
        background: 'linear-gradient(135deg, #fdfbf9 0%, #fff5f7 25%, #ffe8f0 50%, #ffd9e8 75%, #fce4ec 100%)'
      }}
    >
      {/* Elegant floating decorative circles */}
      <div className="absolute top-[10%] left-[15%] w-20 h-20 rounded-full bg-pink-200/20 blur-2xl"></div>
      <div className="absolute top-[25%] right-[10%] w-32 h-32 rounded-full bg-rose-200/25 blur-3xl"></div>
      <div className="absolute bottom-[20%] left-[10%] w-24 h-24 rounded-full bg-pink-300/20 blur-2xl"></div>
      <div className="absolute bottom-[30%] right-[15%] w-28 h-28 rounded-full bg-rose-300/15 blur-3xl"></div>
      <div className="absolute top-[50%] left-[5%] w-16 h-16 rounded-full bg-pink-200/30 blur-xl"></div>
      <div className="absolute top-[40%] right-[8%] w-20 h-20 rounded-full bg-rose-200/20 blur-2xl"></div>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-20 w-full">
        <div className="max-w-[960px] w-full mb-12">
          <h1 
            className="font-script text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center pb-4 pt-6"
            style={{ 
              color: '#8B1538',
              textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8)'
            }}
          >
            Happy Birthday Mu
          </h1>
          <p 
            className="font-script text-2xl md:text-3xl text-center italic"
            style={{ color: '#d4526e' }}
          >
            A special surprise awaits you
          </p>
        </div>

        <div className={`relative w-full max-w-lg ${shaking ? 'shake' : ''}`}>
          <div 
            className="bg-white p-8 md:p-10 rounded-3xl transform transition-all duration-500 hover:scale-[1.02] border-8 border-white overflow-hidden"
            style={{ 
              boxShadow: '0 40px 80px -20px rgba(139, 21, 56, 0.25), 0 0 0 1px rgba(139, 21, 56, 0.05)'
            }}
          >
            <div className="w-full aspect-square bg-gradient-to-br from-pink-50 to-rose-100 overflow-hidden mb-8 relative rounded-2xl">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-all duration-700 hover:scale-110"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=600&fit=crop)',
                  filter: 'sepia(0.2) brightness(1.1)'
                }}
              />
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <p 
                  className="font-script text-2xl md:text-3xl font-bold leading-tight mb-2"
                  style={{ color: '#8B1538' }}
                >
                  Unlock Your Gift
                </p>
                <p className="text-base" style={{ color: '#9a4c66' }}>
                  Enter the secret word to reveal your special surprise
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex justify-center py-4">
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value);
                      setError(false);
                    }}
                    placeholder="Enter secret word..."
                    className={`w-full max-w-sm px-6 py-4 text-center border-2 rounded-xl transition-all duration-300
                      text-xl font-medium
                      placeholder:text-pink-300/60
                      focus:outline-none focus:ring-2
                      ${error 
                        ? 'border-red-400 text-red-600 focus:ring-red-200 bg-red-50' 
                        : 'border-pink-200 focus:border-pink-400 focus:ring-pink-200 text-gray-900 bg-pink-50/30'
                      }`}
                    autoComplete="off"
                    autoFocus
                  />
                </div>

                <div className="w-full pt-3">
                  <button
                    type="submit"
                    className="w-full flex cursor-pointer items-center justify-center rounded-xl h-14 px-6 text-white text-lg font-bold tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                    style={{ 
                      backgroundColor: '#8B1538',
                      boxShadow: '0 8px 20px 0 rgba(139, 21, 56, 0.3)'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#a01842'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#8B1538'}
                  >
                    <span className="truncate">Reveal My Surprise</span>
                  </button>
                </div>

                {error && (
                  <p className="text-red-500 text-sm font-medium mt-3 text-center">
                    Oops! That's not quite right. Try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-20 py-10 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4526e' }}></div>
          <span 
            className="font-script text-lg tracking-wide"
            style={{ color: '#8B1538' }}
          >
            Made with Love
          </span>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#d4526e' }}></div>
        </div>
      </footer>

      {showBurst && <HeartBurst onComplete={handleBurstComplete} />}
    </div>
  );
}

export default KeywordGate;
