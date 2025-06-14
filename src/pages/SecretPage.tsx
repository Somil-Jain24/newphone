import React, { useState } from 'react';
import { Lock, Unlock, Heart, Star, Crown } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';
import Confetti from '../components/Confetti';

const SecretPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const correctPassword = 'adu'; // or any nickname you prefer
  const alternativePasswords = ['laddoo', 'princess', 'queen', 'jaan'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputPassword = password.toLowerCase().trim();
    
    if (inputPassword === correctPassword || alternativePasswords.includes(inputPassword)) {
      setIsUnlocked(true);
      setShowConfetti(true);
    } else {
      setAttempts(attempts + 1);
      setPassword('');
    }
  };

  const getHint = () => {
    if (attempts === 0) return "💡 Hint: It's a cute nickname I call you! 💕";
    if (attempts === 1) return "💡 Hint: 3 letters, starts with 'A' 😊";
    if (attempts >= 2) return "💡 Hint: Adu, Laddoo, Princess, Queen, or Jaan 👸";
    return "";
  };

  const secretContent = [
    {
      title: "Hidden Memory #1 📸",
      content: "First time we talked on call - my heart was beating so fast! 💓",
      emoji: "📞"
    },
    {
      title: "Secret Confession 💕",
      content: "I save all your voice messages and listen to them when I miss you 🥺",
      emoji: "🎵"
    },
    {
      title: "Future Dream 🌟",
      content: "Can't wait to celebrate many more phone upgrades together! 📱💕",
      emoji: "🌈"
    },
    {
      title: "Love Calculator Result 💖",
      content: "Aditi + Somil = 100% Perfect Match (scientifically proven!) 🧪",
      emoji: "🔬"
    }
  ];

  if (isUnlocked) {
    return (
      <div className="animated-bg min-h-screen py-12 px-4">
        <FloatingElements type="hearts" count={20} />
        <Confetti active={showConfetti} />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Unlock className="text-green-400 mr-4" size={50} />
              <Crown className="text-yellow-300 floating" size={50} />
              <Star className="text-blue-300 ml-4 sparkle" size={50} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 romantic-font bounce-in">
              Secret Unlocked! 🔓✨
            </h1>
            <p className="text-xl text-white opacity-90">
              Welcome to the hidden gallery of love! 💕
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {secretContent.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white glow slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 floating">
                    {item.emoji}
                  </div>
                  <h3 className="text-xl font-bold mb-3 romantic-font">
                    {item.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 glow">
              <Heart className="text-red-300 mx-auto mb-4 heartbeat" size={40} />
              <h3 className="text-2xl font-bold text-white mb-4 romantic-font sparkle">
                Ultra Secret Message! 🤫
              </h3>
              <p className="text-white text-lg leading-relaxed">
                "Tumhe lagta hai yeh sirf phone congratulations website hai? 
                Nahi... yeh actually mera digital love letter hai tumhare liye! 
                Har page, har animation, har joke - sab kuch tumhare smile ke liye banaya hai. 
                I love you more than words can express! 💖∞"
              </p>
              <div className="text-6xl mt-6 floating heartbeat">
                💝
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton to="/" variant="primary">
                Back to Home 🏠
              </AnimatedButton>
              <AnimatedButton to="/love" variant="secondary">
                Love Page 💌
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animated-bg min-h-screen flex items-center justify-center px-4">
      <FloatingElements type="stars" count={15} />
      
      <div className="max-w-md mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center glow">
          <Lock className="text-yellow-300 mx-auto mb-6 pulse" size={60} />
          
          <h1 className="text-3xl font-bold text-white mb-4 romantic-font">
            Secret Page 🔒
          </h1>
          
          <p className="text-white opacity-90 mb-6">
            Enter the secret password to unlock hidden content! 💕
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border-2 border-white/30 focus:border-white/60 focus:outline-none"
            />
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 pulse"
            >
              Unlock Secret 🗝️
            </button>
          </form>
          
          {attempts > 0 && (
            <div className="mt-4 p-3 bg-red-500/20 rounded-lg">
              <p className="text-white text-sm">
                Wrong password! Try again 😊
              </p>
            </div>
          )}
          
          <div className="mt-6 p-3 bg-white/10 rounded-lg">
            <p className="text-white text-sm">
              {getHint()}
            </p>
          </div>
          
          <div className="mt-6">
            <AnimatedButton to="/" variant="secondary">
              Back to Home 🏠
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretPage;