
import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

const AnimatedText = ({ texts, className = '' }: AnimatedTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const targetText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Aggiungere lettere
        if (charIndex < targetText.length) {
          setCurrentText(targetText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pausa prima di iniziare a cancellare
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Rimuovere lettere
        if (charIndex > 0) {
          setCurrentText(targetText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Passare al testo successivo
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100); // Velocità di cancellazione e scrittura

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default AnimatedText;
