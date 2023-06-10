import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/system';

const SpeechBubble = styled('div')(({ theme }) => ({
  fontFamily: 'Arial, sans-serif',
  borderRadius: '8px',
  padding: '8px 12px',
  marginBottom: '8px',
  animation: `${blinkCursor} 1s infinite`,
}));

const blinkCursor = (theme) => ({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

const RenderTypewriterText = ({ text }) => {
  const speechBubbleRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      speechBubbleRef.current.textContent += text.slice(i - 1, i);
      if (text.length === i) {
        clearInterval(interval);
        speechBubbleRef.current.style.animation = 'none';
      }
      i++;
      speechBubbleRef.current.parentNode.scrollTop = speechBubbleRef.current.parentNode.scrollHeight;
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return <SpeechBubble ref={speechBubbleRef}></SpeechBubble>;
};

export default RenderTypewriterText;