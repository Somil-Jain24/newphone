import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Features from './pages/Features';
import Jokes from './pages/Jokes';
import Wishlist from './pages/Wishlist';
import Gallery from './pages/Gallery';
import Voice from './pages/Voice';
import Love from './pages/Love';
import HugMemory from './pages/HugMemory';
import Hugversary from './pages/Hugversary';
import Quiz from './pages/Quiz';
import SecretPage from './pages/SecretPage';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/features" element={<Features />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/hug-memory" element={<HugMemory />} />
          <Route path="/hugversary" element={<Hugversary />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/love" element={<Love />} />
          <Route path="/secret" element={<SecretPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;