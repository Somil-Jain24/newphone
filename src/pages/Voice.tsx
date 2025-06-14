import React, { useState, useEffect } from 'react';
import { Play, Pause, Mic, Heart, Volume2 } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';

const Voice: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const voiceMessages = [
    {
      title: "Congratulations Message 🎉",
      text: "Congrats Aditi! Tumhara phone naya ho gaya... par mere liye tum puri duniya ho. ❤️",
      duration: 8000
    },
    {
      title: "Phone Setup Tips 📱",
      text: "Phone setup karte waqt yaad rakhna - sabse important contact mera hi hai! 😄",
      duration: 6000
    },
    {
      title: "Love Declaration 💕",
      text: "Tumhara ringtone kuch bhi ho, par meri heartbeat hamesha tumhara naam sunati hai. 💓",
      duration: 7000
    },
    {
      title: "Future Plans 🌟",
      text: "Is phone se hum kitni cute memories banayenge... already excited hun! ✨",
      duration: 5000
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + (100 / (voiceMessages[currentMessage].duration / 100));
        });
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentMessage, voiceMessages]);

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const selectMessage = (index: number) => {
    setCurrentMessage(index);
    setIsPlaying(false);
    setProgress(0);
  };

  const SoundWave = ({ active }: { active: boolean }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`
            bg-gradient-to-t from-pink-400 to-purple-400 rounded-full
            ${active ? 'animate-pulse' : ''}
          `}
          style={{
            width: '4px',
            height: active ? `${Math.random() * 20 + 10}px` : '8px',
            animationDelay: `${i * 0.1}s`,
            animationDuration: `${Math.random() * 0.5 + 0.5}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="animated-bg min-h-screen py-12 px-4">
      <FloatingElements type="hearts" count={12} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Mic className="text-pink-300 mr-4" size={50} />
            <Heart className="text-red-300 heartbeat" size={50} />
            <Volume2 className="text-blue-300 ml-4" size={50} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 romantic-font bounce-in">
            Voice Note from Somil 🎤💕
          </h1>
          <p className="text-xl text-white opacity-90 fade-in-delay">
            Tumhare liye special audio messages! 🎵
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 glow">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 romantic-font">
              {voiceMessages[currentMessage].title}
            </h3>
            
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
                <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center">
                  <button
                    onClick={togglePlayPause}
                    className="text-white hover:scale-110 transition-transform duration-300 pulse"
                  >
                    {isPlaying ? <Pause size={40} /> : <Play size={40} />}
                  </button>
                </div>
              </div>
              
              {isPlaying && (
                <div className="absolute -inset-4 rounded-full border-4 border-white/30 animate-ping" />
              )}
            </div>

            <div className="flex justify-center mb-6">
              <SoundWave active={isPlaying} />
            </div>
            
            <div className="w-full bg-white/20 rounded-full h-2 mb-4">
              <div
                className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <p className="text-white text-lg leading-relaxed romantic-font opacity-90">
              "{voiceMessages[currentMessage].text}"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {voiceMessages.map((message, index) => (
            <button
              key={index}
              onClick={() => selectMessage(index)}
              className={`
                bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-left transition-all duration-300
                hover:bg-white/20 zoom-hover
                ${currentMessage === index ? 'ring-2 ring-white/50 glow' : ''}
              `}
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl floating">
                  🎵
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {message.title}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {message.duration / 1000}s duration
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 glow">
            <h3 className="text-xl font-bold text-white mb-3 romantic-font sparkle">
              Voice Message Tips! 💡
            </h3>
            <p className="text-white opacity-90">
              Headphones laga kar suno for better experience! 🎧
              Aur haan... volume full kar lena! 😄
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton to="/hug-memory" variant="primary">
              Special Memory 🤗
            </AnimatedButton>
            <AnimatedButton to="/quiz" variant="secondary">
              Fun Quiz 🎮
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voice;