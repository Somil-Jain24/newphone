import React, { useState } from 'react';
import { Camera, Heart, Star, Crown } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';

const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - using beautiful stock photos from Pexels
  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Future selfie with new phone! 📱✨",
      sticker: "👑"
    },
    {
      url: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Aditi's smile > any camera quality 😍",
      sticker: "💖"
    },
    {
      url: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Phone photography expert in the making! 📸",
      sticker: "🔥"
    },
    {
      url: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Selfie Queen ka naya kingdom! 👸",
      sticker: "⭐"
    },
    {
      url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      caption: "Every pic tells our love story 💕",
      sticker: "❤️"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="animated-bg min-h-screen py-12 px-4">
      <FloatingElements type="hearts" count={10} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Camera className="text-pink-300 mr-4" size={50} />
            <Crown className="text-yellow-300" size={50} />
            <Star className="text-blue-300 ml-4" size={50} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 romantic-font bounce-in">
            Selfie Queen Gallery! 📸👑
          </h1>
          <p className="text-xl text-white opacity-90 fade-in-delay">
            Future memories with your amazing new phone! ✨
          </p>
        </div>

        <div className="relative mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 glow">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={galleryImages[currentSlide].url}
                alt={galleryImages[currentSlide].caption}
                className="w-full h-96 object-cover zoom-hover"
              />
              
              <div className="absolute top-4 right-4 text-4xl floating sparkle">
                {galleryImages[currentSlide].sticker}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium romantic-font">
                  {galleryImages[currentSlide].caption}
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 pulse"
              >
                <span className="text-white text-xl">⬅️</span>
              </button>
              
              <div className="flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 pulse"
              >
                <span className="text-white text-xl">➡️</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`
                relative cursor-pointer transition-all duration-300 zoom-hover
                ${index === currentSlide ? 'ring-4 ring-white/50' : ''}
              `}
              onClick={() => setCurrentSlide(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-24 object-cover rounded-lg"
              />
              <div className="absolute top-1 right-1 text-lg floating">
                {image.sticker}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 glow">
            <Heart className="text-red-300 mx-auto mb-4 heartbeat" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4 romantic-font">
              Photography Tips from Somil! 📷💕
            </h3>
            <div className="space-y-2 text-white opacity-90">
              <p>✨ Golden hour selfies = golden memories</p>
              <p>💖 Smile natural rakhna, artificial filters ki zarurat nahi</p>
              <p>📱 Phone ka portrait mode use karna, background blur achha lagta hai</p>
              <p>🌟 Har photo mein tumhara happiness capture karna</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton to="/voice" variant="primary">
              Voice Message 🎤
            </AnimatedButton>
            <AnimatedButton to="/hug-memory" variant="secondary">
              Special Memory 🤗
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;