import React from 'react';
import { Camera, Battery, Wifi, Smartphone, Heart, Zap } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Camera className="text-pink-400" size={40} />,
      title: "Camera Quality 📸",
      description: "Camera achha hai, but still… tum best filter ho 😚",
      animation: "slide-left"
    },
    {
      icon: <Battery className="text-green-400" size={40} />,
      title: "Battery Life 🔋",
      description: "Battery strong hai, par tumhara pyaar zyada powerful hai 🔋❤️",
      animation: "slide-right"
    },
    {
      icon: <Wifi className="text-blue-400" size={40} />,
      title: "5G Speed ⚡",
      description: "5G aaya, par tumhare bina toh sab kuch offline lagta hai 📶",
      animation: "slide-left"
    },
    {
      icon: <Smartphone className="text-purple-400" size={40} />,
      title: "Display Quality ✨",
      description: "Screen kitna bhi HD ho, tumhara smile sabse clear dikhta hai 😍",
      animation: "slide-right"
    },
    {
      icon: <Heart className="text-red-400" size={40} />,
      title: "Love Mode 💕",
      description: "Yeh feature sirf tumhare phone mein hai - infinite love storage! 💖",
      animation: "bounce-in"
    },
    {
      icon: <Zap className="text-yellow-400" size={40} />,
      title: "Somil Connectivity 📞",
      description: "Sabse important feature - mujhse call karne ke liye optimized! 😎",
      animation: "pulse"
    }
  ];

  return (
    <div className="animated-bg min-h-screen py-12 px-4">
      <FloatingElements type="phones" count={10} />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 romantic-font bounce-in">
            Phone Pe Pehla Touch! 📱✨
          </h1>
          <p className="text-xl text-white opacity-90 fade-in-delay">
            Tumhare naye phone ke amazing features (with Somil's commentary) 😄
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white
                hover:bg-white/20 transition-all duration-300 zoom-hover
                ${feature.animation} stagger-item glow
              `}
              style={{ transform: 'translateY(30px)' }}
            >
              <div className="flex items-center justify-center mb-4 relative">
                <div className="orbit absolute">
                  💖
                </div>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-center opacity-90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto glow">
            <h3 className="text-2xl font-bold text-white mb-3 romantic-font heartbeat">
              Special Feature Alert! 🚨💕
            </h3>
            <p className="text-white opacity-90 text-lg">
              Tumhara phone fingerprint se khulta hai, par mera dil sirf tumse khulta hai! 🔓❤️
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton to="/jokes" variant="secondary">
              Phone Wale Jokes 😂
            </AnimatedButton>
            <AnimatedButton to="/wishlist" variant="accent">
              Aditi's Wishlist 📝
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;