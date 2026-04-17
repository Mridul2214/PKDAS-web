import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { Facilities } from './pages/Facilities';
import { Contact } from './pages/Contact';
import { InterestPage } from './pages/InterestPage';
import NewsEvents from './pages/NewsEvents';
import International from './pages/International';
import Institutions from './pages/Institutions';
import Placements from './pages/Placements';
import FacultyPage from './pages/FacultyPage';
import College3DView from './pages/College3DView';
import HighlightDetail from './pages/HighlightDetail';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { BackToTop } from './components/layout/BackToTop';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative bg-surface z-0">
        
        <Navbar />

        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/news" element={<NewsEvents />} />
            <Route path="/international" element={<International />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/interest/:slug" element={<InterestPage />} />
            <Route path="/college/:slug" element={<College3DView />} />
            <Route path="/highlights/:slug" element={<HighlightDetail />} />
          </Routes>
        </div>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
