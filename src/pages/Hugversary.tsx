import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Sparkles, Home, Clock } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';
import Confetti from '../components/Confetti';
import TypewriterText from '../components/TypewriterText';

const Hugversary: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSecretNote, setShowSecretNote] = useState(false);
  const [longPressTimer, setLongPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [digitCount, setDigitCount] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowCalendar(true);
      setShowConfetti(true);
    }, 2000);

    const timer2 = setTimeout(() => {
      setShowMessage(true);
    }, 4000);

    const timer3 = setTimeout(() => {
      // Animate 365 digits appearing one by one
      let count = 0;
      const digitTimer = setInterval(() => {
        if (count <= 365) {
          setDigitCount(count);
          count += 5;
        } else {
          clearInterval(digitTimer);
        }
      }, 50);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleLongPressStart = () => {
    const timer = setTimeout(() => {
      setShowSecretNote(true);
    }, 2000);
    setLongPressTimer(timer);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };

  const hugMessage = `
    Aditi...

    Aaj se poora 1 saal ho gaya uss pal ko —
    jab maine tumhe pehli baar apne dil ke itne kareeb mehsoos kiya tha.

    Ek aisa hug…
    jisme waqt ruk gaya tha,
    sansen halki si theher gayi thi,
    aur tumhari khamoshi bhi sab kuch keh gayi thi.

    Tab mujhe laga…
    "Yahi toh hai mera ghar — tumhari baahon mein." 🏡❤️

    Us ek hug ne mujhe woh diya
    jo duniya ke hazaar lafzon mein kabhi nahi milta...
    sukoon, pyaar, aur sachcha apnapan.

    Aaj bhi jab yaad aata hai woh moment,
    toh chehra muskurata hai,
    aur dil phir se tumhare pass aa jaata hai…

    Happy Hugversary, My Love 🫂💘

    I Love You, Aditi.
    Forever & Always,
    Somil 💖
  `;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 182, 193, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(221, 160, 221, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 192, 203, 0.3) 0%, transparent 50%)
          `
        }}
      />
      
      <FloatingElements type="hearts" count={30} />
      <Confetti active={showConfetti} duration={8000} />
      
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-300 text-2xl floating sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8 romantic-font">
              <TypewriterText 
                text="1 Saal ho gaya... tumhare pehle hug ko 💞"
                speed={100}
              />
            </h1>
            
            {showCalendar && (
              <div className="bounce-in mb-8">
                <div className="relative mx-auto w-64 h-64">
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform rotate-3 glow" />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center">
                    <Calendar className="text-purple-500 mb-4 floating" size={60} />
                    <div className="text-center">
                      <div className="text-6xl font-bold text-gray-800 mb-2 heartbeat">
                        {digitCount > 365 ? '365' : digitCount}
                      </div>
                      <p className="text-gray-700 font-semibold romantic-font">
                        Days of Warmth
                      </p>
                      <div className="text-4xl mt-2 floating">
                        🫂
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                    <Heart className="text-white heartbeat" size={24} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {showMessage && (
            <div className="space-y-8 fade-in">
              <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-12 glow">
                <div className="flex items-center justify-center mb-8">
                  <Home className="text-pink-500 mr-4 floating" size={50} />
                  <Heart className="text-red-500 heartbeat" size={50} />
                  <Sparkles className="text-purple-500 ml-4 floating" size={50} />
                </div>
                
                <div className="text-xl md:text-2xl text-gray-800 leading-relaxed romantic-font whitespace-pre-line">
                  {hugMessage}
                </div>
                
                <div className="mt-8 text-8xl floating heartbeat">
                  🫂
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-2xl p-8 glow">
                <Clock className="text-blue-500 mx-auto mb-4 floating" size={40} />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 sparkle">
                  🎉 Hugversary Celebration! 🎉
                </h3>
                <div className="bg-white/50 rounded-lg p-4 mb-4">
                  <p className="text-gray-800 font-mono text-sm">
                    📅 Anniversary Type: First Hug<br/>
                    ⏰ Duration: 365 Days Complete<br/>
                    💖 Love Level: Infinite & Growing<br/>
                    🏠 Home Found: In Your Arms<br/>
                    ✅ Status: Forever Grateful
                  </p>
                </div>
              </div>
              
              <div 
                className="bg-white/40 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/50"
                onMouseDown={handleLongPressStart}
                onMouseUp={handleLongPressEnd}
                onMouseLeave={handleLongPressEnd}
                onTouchStart={handleLongPressStart}
                onTouchEnd={handleLongPressEnd}
              >
                <div className="text-4xl mb-4 floating">💌</div>
                <p className="text-gray-800 font-semibold">
                  Long press to unlock my first emotion after that hug...
                </p>
                <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
                  <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full w-0 transition-all duration-2000" 
                       style={{ width: longPressTimer ? '100%' : '0%' }} />
                </div>
              </div>
              
              {showSecretNote && (
                <div className="bg-gradient-to-r from-red-400/30 to-pink-400/30 rounded-2xl p-8 glow fade-in border-4 border-red-200">
                  <div className="text-6xl mb-4 floating heartbeat">💝</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 romantic-font sparkle">
                    Secret Unlocked! 🔓
                  </h3>
                  <div className="bg-white/70 rounded-lg p-6 handwriting-style">
                    <p className="text-gray-800 text-xl italic romantic-font leading-relaxed">
                      "That was the moment I fell completely, madly, deeply in love with you.
                      
                      Not just the hug... but the way you trusted me with your heart,
                      the way you let me hold your world for those few seconds,
                      and the way you made me realize that home isn't a place...
                      
                      It's you. It's always been you. 💖"
                    </p>
                    <p className="text-gray-700 mt-4 font-semibold text-right">
                      - Your Somil, forever 💕
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton to="/gallery" variant="primary">
                  See Hug Memories 📸
                </AnimatedButton>
                <AnimatedButton to="/love" variant="secondary">
                  Final Love Letter 💌
                </AnimatedButton>
              </div>
              
              <div className="bg-white/20 rounded-2xl p-6 mt-8">
                <div className="text-6xl mb-4 floating">🎵</div>
                <p className="text-gray-800 text-lg romantic-font italic">
                  "365 days ago, you gave me the most beautiful gift...
                  not just a hug, but a home in your heart.
                  Here's to thousands more days of warmth, love, and endless hugs." 🫂💖
                </p>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Hugversary;