import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Platform from './pages/Platform';
import Solutions from './pages/Solutions';
import Footer from './components/Footer/Footer';

import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
         <ScrollToTop />
      { <Navbar /> }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Solutions />} />
       

      </Routes>
      {<Footer />}
    </Router>
  );
}

export default App;