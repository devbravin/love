import { useEffect, useCallback } from 'react';

function Lightbox({ isOpen, onClose, memory }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!memory) return null;

  return (
    <div
      className={`lightbox-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${memory.title} - ${memory.caption}`}
    >
      <div 
        className="lightbox-content max-w-lg w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div 
            className="w-full aspect-[4/3] rounded-md bg-gradient-to-br from-rose-100 to-rose-50 mb-5 flex items-center justify-center"
          >
            <span className="text-6xl opacity-40">📷</span>
          </div>
          
          <h3 className="font-script text-xl font-medium mb-2" style={{ color: '#8B1538' }}>
            {memory.title}
          </h3>
          <p className="text-gray-500 text-sm italic mb-5">
            {memory.caption}
          </p>
          
          <button
            onClick={onClose}
            className="btn-secondary w-full text-sm"
            aria-label="Close lightbox"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
