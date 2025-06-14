import React, { useState, useEffect } from 'react';
import { Heart, Star, CheckCircle } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';

const Wishlist: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(0);

  const wishlistItems = [
    {
      icon: "💕",
      title: "Romantic Ringtone",
      description: "Har call ringtone = 'I love you Somil' 💞",
      priority: "high"
    },
    {
      icon: "📸",
      title: "Photo Gallery Goal",
      description: "Tumhari gallery mein 99% pics Somil ki honi chahiye 😎",
      priority: "high"
    },
    {
      icon: "🎵",
      title: "Music Playlist",
      description: "Phone mein sirf romantic songs jo humein remind karain 🎶",
      priority: "medium"
    },
    {
      icon: "💬",
      title: "WhatsApp Status",
      description: "Hamesha cute couple status lagani hai 💑",
      priority: "medium"
    },
    {
      icon: "📱",
      title: "Phone Case",
      description: "Cute phone case jo tumhare personality match kare 🌸",
      priority: "low"
    },
    {
      icon: "🔔",
      title: "Notification Sound",
      description: "Mera message aaye toh special notification sound ho 💓",
      priority: "high"
    },
    {
      icon: "🌙",
      title: "Good Night Mode",
      description: "Raat ko phone silent, except Somil's calls 😴",
      priority: "medium"
    },
    {
      icon: "💖",
      title: "Love Widget",
      description: "Home screen pe countdown: 'Days since Somil made me smile' ✨",
      priority: "high"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev < wishlistItems.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [wishlistItems.length]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'from-red-400 to-pink-400';
      case 'medium': return 'from-yellow-400 to-orange-400';
      case 'low': return 'from-green-400 to-blue-400';
      default: return 'from-purple-400 to-pink-400';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <Heart className="text-red-300" size={20} />;
      case 'medium': return <Star className="text-yellow-300" size={20} />;
      case 'low': return <CheckCircle className="text-green-300" size={20} />;
      default: return <Heart className="text-pink-300" size={20} />;
    }
  };

  return (
    <div className="animated-bg min-h-screen py-12 px-4">
      <FloatingElements type="stars" count={12} />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 romantic-font bounce-in">
            Aditi's Phone Wishlist 📝✨
          </h1>
          <p className="text-xl text-white opacity-90 fade-in-delay">
            Somil ki taraf se phone setup ke liye special requests! 💕
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {wishlistItems.slice(0, visibleItems).map((item, index) => (
            <div
              key={index}
              className={`
                bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white
                slide-up zoom-hover glow relative overflow-hidden
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${getPriorityColor(item.priority)} opacity-10`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl floating">
                    {item.icon}
                  </div>
                  <div className="flex items-center space-x-1">
                    {getPriorityIcon(item.priority)}
                    <span className="text-xs opacity-75 uppercase tracking-wide">
                      {item.priority}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                
                <p className="opacity-90 leading-relaxed romantic-font">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visibleItems === wishlistItems.length && (
          <div className="text-center space-y-6 fade-in">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 glow">
              <h3 className="text-2xl font-bold text-white mb-4 romantic-font sparkle heartbeat">
                Special Bonus Wish! 🎁
              </h3>
              <p className="text-white text-lg mb-4">
                Sabse important wish: Phone kitna bhi smart ho, 
                par tumhara smile sabse intelligent feature hai! 😊✨
              </p>
              <div className="text-6xl floating">
                💖
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton to="/gallery" variant="primary">
                Selfie Gallery 📸
              </AnimatedButton>
              <AnimatedButton to="/voice" variant="secondary">
                Voice Message 🎤
              </AnimatedButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;