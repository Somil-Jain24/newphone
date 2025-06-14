import React, { useState } from 'react';
import { CheckCircle, Heart, Star, Zap, Trophy } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import FloatingElements from '../components/FloatingElements';
import Confetti from '../components/Confetti';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const quizQuestions = [
    {
      question: "Tumhara pyaar kis phone feature jaisa hai?",
      options: [
        { text: "Battery 🔋 - Never ending energy", emoji: "🔋" },
        { text: "Camera 📷 - Captures every moment", emoji: "📷" },
        { text: "Processor ⚡ - Fast and efficient", emoji: "⚡" },
        { text: "Display ✨ - Beautiful and bright", emoji: "✨" }
      ],
      correctAnswer: 0
    },
    {
      question: "Agar tum phone hoti toh kaunsa model hoti?",
      options: [
        { text: "iPhone 📱 - Premium and elegant", emoji: "📱" },
        { text: "Samsung Galaxy 🌟 - Versatile and smart", emoji: "🌟" },
        { text: "One Plus 🚀 - Fast and reliable", emoji: "🚀" },
        { text: "Limited Edition 💎 - Unique and priceless", emoji: "💎" }
      ],
      correctAnswer: 3
    },
    {
      question: "Tumhare naye phone ka best feature kya hoga?",
      options: [
        { text: "Somil ke calls receive karna 📞", emoji: "📞" },
        { text: "Cute selfies lena 🤳", emoji: "🤳" },
        { text: "Love messages bhejana 💌", emoji: "💌" },
        { text: "Sab kuch! 💖", emoji: "💖" }
      ],
      correctAnswer: 3
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex.toString();
    setSelectedAnswers(newAnswers);
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
        setShowConfetti(true);
      }
    }, 1000);
  };

  const getResultMessage = () => {
    return "Perfect Score! 🎉 Tumhare sab answers bilkul perfect hain, just like you! 💖";
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowConfetti(false);
  };

  if (showResults) {
    return (
      <div className="animated-bg min-h-screen flex items-center justify-center px-4">
        <FloatingElements type="stars" count={20} />
        <Confetti active={showConfetti} />
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 glow">
            <Trophy className="text-yellow-300 mx-auto mb-6 bounce-in" size={80} />
            
            <h1 className="text-4xl font-bold text-white mb-6 romantic-font">
              Quiz Complete! 🎊
            </h1>
            
            <div className="text-6xl mb-6 floating heartbeat">
              💖
            </div>
            
            <p className="text-xl text-white mb-8 leading-relaxed">
              {getResultMessage()}
            </p>
            
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 sparkle">
                Final Result: 100% Perfect! ✨
              </h3>
              <p className="text-white opacity-90">
                Just like in real life, tumhare sab answers perfect hain! 
                Somil loves you infinity! 💕∞
              </p>
            </div>
            
            <div className="space-y-4">
              <AnimatedButton onClick={resetQuiz} variant="secondary">
                Retake Quiz 🔄
              </AnimatedButton>
              <AnimatedButton to="/love" variant="primary">
                Final Surprise 💌
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animated-bg min-h-screen py-12 px-4">
      <FloatingElements type="hearts" count={15} />
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 romantic-font bounce-in">
            Fun Quiz Time! 🎮💕
          </h1>
          <p className="text-xl text-white opacity-90">
            "Which Feature of Aditi's Phone Matches Her Personality?"
          </p>
          
          <div className="flex justify-center mt-6">
            <div className="bg-white/20 rounded-full px-6 py-2">
              <span className="text-white font-semibold">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 glow">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center romantic-font">
              {quizQuestions[currentQuestion].question}
            </h2>
            
            <div className="w-full bg-white/20 rounded-full h-2 mb-6">
              <div
                className="bg-gradient-to-r from-pink-400 to-purple-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className="
                  bg-white/10 hover:bg-white/20 rounded-2xl p-6 text-left
                  transition-all duration-300 zoom-hover glow
                  border-2 border-transparent hover:border-white/30
                "
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl floating">
                    {option.emoji}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      {option.text}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 glow">
            <Heart className="text-red-300 mx-auto mb-3 heartbeat" size={30} />
            <p className="text-white opacity-90 italic">
              "Koi bhi option choose karo, tumhara har answer mere liye perfect hai!" - Somil 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;