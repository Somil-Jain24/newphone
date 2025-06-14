import React, { useState, useEffect } from 'react';
import { Laugh, Smartphone, Heart } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';

const Jokes: React.FC = () => {
  const [visibleJokes, setVisibleJokes] = useState(0);

  const jokes = [
    {
      emoji: "📱",
      text: "Tumhara phone fingerprint se khulta hai, par mera dil sirf tumse khulta hai! 🔓❤️"
    },
    {
      emoji: "🔋",
      text: "Tumhare phone ki battery 100% hai, par mera love tumhare liye 1000% hai! 💯💕"
    },
    {
      emoji: "📶",
      text: "5G ki speed fast hai, par mera phone tumhare liye ring karne ki speed zyada fast hai! 📞⚡"
    },
    {
      emoji: "📸",
      text: "Tumhara phone 50MP camera hai, par meri aankhein tumhe infinite resolution mein dekhti hain! 👀✨"
    },
    {
      emoji: "🎵",
      text: "Ringtone change kar sakti ho, par meri heartbeat ka ringtone hamesha tumhara naam hai! 💓🎶"
    },
    {
      emoji: "💾",
      text: "Phone mein storage kam ho jaaye, par meri memory mein tumhare liye unlimited space hai! 🧠💖"
    },
    {
      emoji: "🌐",
      text: "Internet slow ho jaye toh problem hai, par tumhara pyaar meri life mein hamesha high speed hai! 🚀💕"
    },
    {
      emoji: "🔒",
      text: "Phone lock karne ke liye password chahiye, par tumse pyaar karne ke liye koi permission nahi chahiye! 🗝️❤️"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleJokes(prev => {
        if (prev < jokes.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [jokes.length]);

  return (
    <div className="animated-bg min-h-screen py-12 px-4">
      <FloatingElements type="hearts" count={15} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Laugh className="text-yellow-300 mr-4" size={50} />
            <Smartphone className="text-white" size={50} />
            <Heart className="text-pink-300 ml-4" size={50} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 romantic-font bounce-in">
            Phone Wale Jokes! 😂📱
          </h1>
          <p className="text-xl text-white opacity-90 fade-in-delay">
            Somil ke special one-liners tumhare naye phone ke liye! 💕
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {jokes.slice(0, visibleJokes).map((joke, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white bounce-in shake glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl floating">
                  {joke.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed romantic-font">
                    {joke.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleJokes === jokes.length && (
          <div className="text-center space-y-6 fade-in">
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 glow">
              <h3 className="text-2xl font-bold text-white mb-4 romantic-font sparkle">
                Bonus Joke! 🎁
              </h3>
              <p className="text-white text-lg heartbeat">
                Tumhara phone latest model hai, par tum mere liye vintage beauty ho - 
                timeless aur priceless! 👸💎
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton to="/wishlist" variant="primary">
                Check Wishlist 📝
              </AnimatedButton>
              <AnimatedButton to="/gallery" variant="secondary">
                Selfie Gallery 📸
              </AnimatedButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jokes;