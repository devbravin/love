import { HER_NAME } from '../data/content';

function Header({ onReset }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'memories', label: 'MEMORIES' },
    { id: 'timeline', label: 'JOURNEY' },
    { id: 'quotes', label: 'QUOTES' },
    { id: 'reasons', label: 'CUTE MOMENTS' },
    { id: 'final', label: 'MESSAGE' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/90 backdrop-blur-sm">
      <div className="container-main">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => scrollTo('hero')}
            className="font-script text-xl hover:opacity-80 transition-opacity"
            style={{ color: '#8B1538' }}
          >
            For {HER_NAME}
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-xs font-medium tracking-widest text-gray-500
                         hover:text-gray-800
                         transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={onReset}
            className="text-xs tracking-wide text-gray-400 hover:text-gray-600
                     transition-colors duration-200"
            title="Reset and return to gate"
          >
            Reset
          </button>
        </div>
      </div>

      <nav className="md:hidden border-t border-rose-100/50 bg-cream/95 backdrop-blur-sm">
        <div className="flex items-center justify-around py-2 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-2 py-1 text-[10px] font-medium tracking-wider text-gray-500
                       hover:text-gray-800
                       transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
