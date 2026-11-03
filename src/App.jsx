import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import DetailPage from './pages/DetailPage';
import ScrollToTop from './components/ScrollToTop';

function MainLayout() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  // Scroll spy only active on homepage
  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const sections = ['home', 'about', 'stack', 'experience', 'project', 'contact'];
      let currentId = 'home';

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 160;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentId = id;
          }
        }
      });

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 30) {
        currentId = 'contact';
      }

      setActiveSection(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isHomepage]);

  return (
    <>
      <ScrollToTop />
      {/* Navbar rendered at parent level, visible on homepage */}
      {isHomepage && <Navbar activeSection={activeSection} />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
