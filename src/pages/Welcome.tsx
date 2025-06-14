import React, { useState, useEffect } from 'react';
import { Smartphone, Crown, Sparkles } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';
import TypewriterText from '../components/TypewriterText';
import Confetti from '../components/Confetti';

const Welcome: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animated-bg flex flex-col items-center justify-center min-h-screen text-white relative">
      <FloatingElements type="hearts" count={20} />
      <FloatingElements type="stars" count={15} />
      <Confetti active={showConfetti} />
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8 bounce-in">
          <div className="flex items-center justify-center mb-6">
            <Crown className="text-yellow-300 mr-4" size={60} />
            <Smartphone className="text-white" size={60} />
            <Sparkles className="text-pink-300 ml-4" size={60} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 romantic-font">
            <TypewriterText 
              text="Welcome Queen Aditi! 👑"
              speed={150}
              onComplete={() => setShowButton(true)}
            />
          </h1>
        </div>

        <div className={`fade-in-delay ${showButton ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-2xl md:text-4xl mb-6 slide-up">
            Aditi Got a New Phone! 📱🎉
          </h2>
          
          <p className="text-lg md:text-xl mb-8 slide-up opacity-90">
            Get ready for the most romantic + funny celebration ever! 💕
          </p>
          
          <div className="space-y-4">
            <AnimatedButton to="/features" className="block mx-auto">
              Start the Surprise 🎁
            </AnimatedButton>
            
            <p className="text-sm opacity-75 romantic-font">
              Made with infinite love by Somil 💖
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="floating">
          <Sparkles className="text-yellow-300" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;