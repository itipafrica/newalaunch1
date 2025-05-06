import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageProvider } from './context/LanguageContext';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PreviewSection from './components/PreviewSection';
import SignupSection from './components/SignupSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set the document title based on the current language
    const updateTitle = () => {
      document.title = i18n.language === 'fr' 
        ? 'NEWA - Le marché marocain réinventé'
        : 'NEWA - The Moroccan Marketplace Reinvented';
    };
    
    updateTitle();
    i18n.on('languageChanged', updateTitle);
    
    return () => {
      i18n.off('languageChanged', updateTitle);
    };
  }, [i18n]);

  return (
    <LanguageProvider>
      <div className="font-['Montserrat'] text-gray-100 overflow-x-hidden min-h-screen bg-[#0a192f]">
        <AnimatedBackground />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <PreviewSection />
          <SignupSection />
          <SocialSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;