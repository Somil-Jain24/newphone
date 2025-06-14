import React, { useState, useEffect } from 'react';
import { Heart, Mail, Sparkles, Crown } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';
import Confetti from '../components/Confetti';

const Love: React.FC = () => {
  const [letterOpened, setLetterOpened] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFinalSurprise, setShowFinalSurprise] = useState(false);

  const openLetter = () => {
    setLetterOpened(true);
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
    
    setTimeout(() => {
      setShowFinalSurprise(true);
    }, 3000);
  };

  const finalMessage = `
    Har naye phone ke saath duniya badalti hai,
    par tum mere liye hamesha perfect thi – aur rahogi ❤️
    
    Tumhara naya phone sirf technology nahi hai,
    yeh humari nayi memories ka beginning hai! 📱✨
    
    I love you, Aditi! 💕
    - Tumhara Somil
  `;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-red-200"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 182, 193, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(221, 160, 221, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 192, 203, 0.3) 0%, transparent 50%)
          `
        }}
      />
      
      <FloatingElements type="hearts" count={30} />
      <Confetti active={showConfetti} duration={6000} />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12 bounce-in">
            <div className="flex items-center justify-center mb-6">
              <Mail className="text-pink-500 mr-4 floating" size={60} />
              <Heart className="text-red-500 heartbeat" size={60} />
              <Sparkles className="text-purple-500 ml-4 floating" size={60} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 romantic-font">
              Message from the Heart 💌
            </h1>
          </div>

          {!letterOpened ? (
            <div className="fade-in">
              <div className="relative mx-auto w-64 h-64 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg transform rotate-3 shadow-2xl" />
                <div className="absolute inset-0 bg-white rounded-lg shadow-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="text-red-400 mx-auto mb-4 heartbeat" size={60} />
                    <p className="text-gray-800 font-semibold romantic-font">
                      For My Beautiful Aditi 💕
                    </p>
                    <div className="mt-4 text-6xl floating">
                      💌
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={16} />
                </div>
              </div>
              
              <AnimatedButton onClick={openLetter} className="pulse">
                Open the Letter 💝
              </AnimatedButton>
              
              <p className="text-gray-700 mt-4 opacity-75 romantic-font">
                Click to reveal the surprise inside! ✨
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-12 glow fade-in">
                {showMessage && (
                  <div className="space-y-6">
                    <Crown className="text-yellow-500 mx-auto sparkle" size={50} />
                    
                    <div className="text-2xl md:text-3xl text-gray-800 leading-relaxed romantic-font whitespace-pre-line">
                      {finalMessage}
                    </div>
                    
                    <div className="text-8xl floating heartbeat">
                      💖
                    </div>
                  </div>
                )}
              </div>
              
              {showFinalSurprise && (
                <div className="space-y-6 fade-in-delay">
                  <div className="bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-2xl p-8 glow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 sparkle">
                      🎉 Software Update Complete! 🎉
                    </h3>
                    <div className="bg-white/50 rounded-lg p-4 mb-4">
                      <p className="text-gray-800 font-mono text-sm">
                        📱 Installing: Somil's Love v2.0<br/>
                        ⚡ Performance: Improved<br/>
                        🐛 Lag: Removed<br/>
                        💕 Love Level: Infinite<br/>
                        ✅ Installation: Successful!
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/40 rounded-2xl p-6">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="text-4xl floating">⏰</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800">
                          Next Video Call Countdown
                        </h4>
                        <p className="text-gray-700">
                          Time left for your next cutest notification 💖📞
                        </p>
                      </div>
                    </div>
                    <div className="text-2xl font-mono text-gray-800 bg-white/50 rounded-lg p-3">
                      Soon! 💕
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <AnimatedButton to="/" variant="primary">
                      Start Over 🔄
                    </AnimatedButton>
                    <AnimatedButton to="/hugversary" variant="accent">
                      Hugversary Special 🫂
                    </AnimatedButton>
                    <AnimatedButton to="/secret" variant="secondary">
                      Secret Page 🔒
                    </AnimatedButton>
                  </div>
                  
                  <div className="bg-white/20 rounded-2xl p-6 mt-8">
                    <p className="text-gray-800 text-lg romantic-font italic">
                      "This website was made with infinite love, countless smiles, 
                      and the hope that it brings as much joy to you as you bring to my life every day." 💕
                    </p>
                    <p className="text-gray-700 mt-4 font-semibold">
                      - Always yours, Somil 💖
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Love;