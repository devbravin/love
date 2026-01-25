import { useReveal } from '../hooks/useReveal';

function Section({ 
  id, 
  children, 
  className = '', 
  containerClass = '',
  withReveal = true,
  background = 'white'
}) {
  const [ref, isRevealed] = useReveal();

  const bgClasses = {
    white: 'bg-white',
    gradient: 'bg-gradient-to-b from-pink-50 to-violet-50',
    pink: 'bg-pink-50',
    violet: 'bg-violet-50',
  };

  return (
    <section
      id={id}
      ref={withReveal ? ref : null}
      className={`section-padding ${bgClasses[background] || bgClasses.white} ${className}`}
    >
      <div className={`container-main ${containerClass} ${withReveal ? 'reveal' : ''} ${isRevealed ? 'revealed' : ''}`}>
        {children}
      </div>
    </section>
  );
}

export default Section;
