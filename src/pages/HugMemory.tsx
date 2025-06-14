import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Crown } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';
import Confetti from '../components/Confetti';

const HugMemory: React.FC = () => {
  const [showMemory, setShowMemory] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const memoryTexts = [
    "Aaj sirf tera phone naya nahi hua... 📱",
    "...aaj ek nayi feeling bhi shuru hui. 💕",
    "Tera pehla hug... 🤗",
    "Meri duniya ka sabse soft, sabse real, sabse pyaara moment bana. 🥺💖"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMemory(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showMemory && textIndex < memoryTexts.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
        if (textIndex === memoryTexts.length - 1) {
          setShowConfetti(true);
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showMemory, textIndex, memoryTexts.length]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 75%, rgba(255, 192, 203, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(221, 160, 221, 0.3) 0%, transparent 50%)
          `
        }}
      />
      
      <FloatingElements type="hearts" count={25} />
      <Confetti active={showConfetti} duration={5000} />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12 bounce-in">
            <div className="flex items-center justify-center mb-6">
              <Heart className="text-red-400 mr-4 heartbeat" size={60} />
              <Crown className="text-yellow-400" size={60} />
              <Sparkles className="text-purple-400 ml-4 floating" size={60} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 romantic-font">
              Aaj Kuch Toh Bada Hua Hai... 💫
            </h1>
          </div>

          {showMemory && (
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-12 mb-8 glow">
              <div className="space-y-8">
                {memoryTexts.slice(0, textIndex + 1).map((text, index) => (
                  <div
                    key={index}
                    className="fade-in text-2xl md:text-3xl text-gray-800 leading-relaxed romantic-font"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {text}
                  </div>
                ))}
              </div>
              
              {textIndex >= memoryTexts.length - 1 && (
                <div className="mt-12 fade-in-delay-2">
                  <div className="text-8xl mb-6 floating heartbeat">
                    🫂
                  </div>
                  
                  <div className="bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-2xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 sparkle">
                      Memory Saved Successfully! 💾
                    </h3>
                    <p className="text-gray-700 italic">
                      "Somil.exe has stopped working after the hug 😵‍💫"
                    </p>
                  </div>
                  
                  <div className="bg-white/30 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="w-full bg-gray-300 rounded-full h-3">
                        <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-3 rounded-full w-full pulse" />
                      </div>
                    </div>
                    <p className="text-gray-800 font-medium">
                      Love Progress: Crush ➡️ Connection ➡️ Call wali love ➡️ 
                      <span className="text-red-600 font-bold"> Hug Installed 💖🫂</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {textIndex >= memoryTexts.length - 1 && (
            <div className="space-y-6 fade-in-delay-3">
              <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-8 glow">
                <div className="text-6xl mb-4 floating">
                  💝
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 romantic-font">
                  Notification Alert! 📱
                </h3>
                <div className="bg-white/50 rounded-lg p-4 mb-4">
                  <p className="text-gray-800">
                    💬 <strong>Aditi sent you a hug 🤗</strong>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    ✅ Accepted with full bandwidth!
                  </p>
                </div>
                <p className="text-gray-700 italic">
                  New memory stored → Hug.v1 🫂💾
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton to="/quiz" variant="primary">
                  Fun Quiz Time 🎮
                </AnimatedButton>
                <AnimatedButton to="/hugversary" variant="accent">
                  1 Year Hugversary 🫂
                </AnimatedButton>
                <AnimatedButton to="/love" variant="secondary">
                  Final Surprise 💌
                </AnimatedButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HugMemory;