import { useEffect, useState } from "react";

export function useTextCycle(
    words: string[],
    typingSpeed: number = 100,
    delay: number = 2000
  ): string {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const currentWord = words[wordIndex];
  
      if (!isDeleting && charIndex < currentWord.length) {
        // efeito de digitação
        setTimeout(() => {
          setText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
        // Efeito de apagar
        setTimeout(() => {
          setText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, typingSpeed / 2);
      } else {
        // pausa entre apagar e digitar a próxima palavra
        setTimeout(() => {
          if (!isDeleting) {
            setIsDeleting(true);
          } else {
            setIsDeleting(false);
            setCharIndex(0);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }, delay);
      }
    }, [charIndex, isDeleting, wordIndex, words, typingSpeed, delay]);
  
    return text;
  }