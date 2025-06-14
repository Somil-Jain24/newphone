import React, { useEffect, useState } from 'react';

interface FloatingElementsProps {
  type: 'hearts' | 'stars' | 'balloons' | 'phones';
  count?: number;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ type, count = 15 }) => {
  const [elements, setElements] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      style: {
        position: 'absolute' as const,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 1.5 + 1}rem`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 2 + 3}s`,
        zIndex: 1,
      }
    }));
    setElements(newElements);
  }, [count]);

  const getEmoji = () => {
    switch (type) {
      case 'hearts': return ['💖', '💕', '💗', '💞', '💝'][Math.floor(Math.random() * 5)];
      case 'stars': return ['⭐', '✨', '🌟', '💫', '⚡'][Math.floor(Math.random() * 5)];
      case 'balloons': return ['🎈', '🎉', '🎊', '🎁', '🎀'][Math.floor(Math.random() * 5)];
      case 'phones': return ['📱', '💻', '📞', '📲', '🔔'][Math.floor(Math.random() * 5)];
      default: return '✨';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="floating"
          style={element.style}
        >
          {getEmoji()}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;