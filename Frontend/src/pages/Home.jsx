import React, { useRef, useState, useEffect } from 'react';
import { useHomeData } from '../hooks/useHomeData';
import { useStudentData } from '../hooks/useStudentData';
import { useHomeAnimations } from '../hooks/useHomeAnimations';

import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { HomeAbout } from '../components/home/HomeAbout';
import { HomeAchievements } from '../components/home/HomeAchievements';
import { HomeInstitutions } from '../components/home/HomeInstitutions';
import { HomeInterests } from '../components/home/HomeInterests';
import { HomeScholars } from '../components/home/HomeScholars';
import { HomeHighlights } from '../components/home/HomeHighlights';
import { HomeCulture } from '../components/home/HomeCulture';
import { HomeCareers } from '../components/home/HomeCareers';
import { HomePartners } from '../components/home/HomePartners';
import { HomeAlumni } from '../components/home/HomeAlumni';
import { HomeCTA } from '../components/home/HomeCTA';

export function Home() {
  const container = useRef(null);

  // Data fetching (Hooks mapping)
  const { alumniReviews, institutionCategories, highlights } = useHomeData();
  const { topStudents, careerSuccessData, cultureSections } = useStudentData();

  // State
  const [activeCard, setActiveCard] = useState(null);
  const hoverTimer = useRef(null);
  const [instView, setInstView] = useState('categories'); // 'categories' | 'all' | category title
  const [instSearch, setInstSearch] = useState('');

  // Mobile Carousel States
  const [activeAlumni, setActiveAlumni] = useState(0);
  const [activeScholar, setActiveScholar] = useState(0);
  const [activeCareer, setActiveCareer] = useState(0);

  // Auto-slide effect for mobile carousels
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAlumni((prev) => (prev + 1) % alumniReviews.length);
      setActiveScholar((prev) => (prev + 1) % topStudents.length);
      setActiveCareer((prev) => (prev + 1) % careerSuccessData.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [alumniReviews.length, topStudents.length, careerSuccessData.length]);

  // GSAP Animations
  useHomeAnimations(container);

  return (
    <main ref={container} className="bg-surface">
      <Hero />
      <Marquee />
      
      <HomeAbout />
      <HomeAchievements />
      
      <HomeInstitutions 
        institutionCategories={institutionCategories}
        instView={instView} 
        setInstView={setInstView}
        instSearch={instSearch}
        setInstSearch={setInstSearch}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        hoverTimer={hoverTimer}
      />
      
      <HomeInterests />
      
      <HomeScholars 
        topStudents={topStudents}
        activeScholar={activeScholar}
        setActiveScholar={setActiveScholar}
      />
      
      <HomeHighlights highlights={highlights} />
      <HomeCulture cultureSections={cultureSections} />
      
      <HomeCareers 
        careerSuccessData={careerSuccessData}
        activeCareer={activeCareer}
        setActiveCareer={setActiveCareer}
      />
      
      <HomePartners />
      
      <HomeAlumni 
        alumniReviews={alumniReviews}
        activeAlumni={activeAlumni}
        setActiveAlumni={setActiveAlumni}
      />
      
      <HomeCTA />
    </main>
  );
}
