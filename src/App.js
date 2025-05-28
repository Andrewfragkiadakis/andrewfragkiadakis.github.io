// src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import AboutSkills from './components/AboutSkills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import FidgetSpinner3D from './components/FidgetSpinner3D';
import useIntersectionObserver from './hooks/useIntersectionObserver';
// --- Chatbot imports ---
import ChatbotIcon from './components/ChatbotIcon';
import ChatWindow from './components/ChatWindow';
import { getChatbotKB } from './chatbotData';
import { translations } from './translations';

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    const currentHour = new Date().getHours();
    const nightStartHour = 21; 
    const morningEndHour = 6;  
    if (currentHour >= nightStartHour || currentHour < morningEndHour) return 'dark';
    return 'light'; 
  });

  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');
  const [activeSection, setActiveSection] = useState(''); 
  const [funStuffRef, isFunStuffVisible] = useIntersectionObserver({ threshold: 0.1 });

  // State for mobile navigation controls
  const [showMobileControls, setShowMobileControls] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatbotKnowledgeBase, setChatbotKnowledgeBase] = useState([]);

  const t = translations[language];

  // Effect: Initialize/update chatbot KB when language changes
  useEffect(() => {
    if (t) {
      setChatbotKnowledgeBase(getChatbotKB(translations, language));
    }
  }, [language, t]);

  // Effect: Set initial greeting only once after KB is ready
  useEffect(() => {
    if (chatbotKnowledgeBase.length > 0 && chatMessages.length === 0 && t.chatbot?.greeting) {
      setChatMessages([{ sender: 'bot', text: t.chatbot.greeting }]);
    }
  }, [chatbotKnowledgeBase, t?.chatbot?.greeting]);

  const toggleChat = () => setIsChatOpen(open => !open);

  const processUserMessage = useCallback((message) => {
    const lowerMessage = message.toLowerCase().trim();
    let response = t.chatbot?.fallback || "Sorry, I'm not sure how to answer that.";

    const foundRule = chatbotKnowledgeBase.find(rule =>
      rule.keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()))
    );

    if (foundRule) {
      response = typeof foundRule.answer === 'function' ? foundRule.answer() : foundRule.answer;
    } else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("help") ||
      lowerMessage.includes("support")
    ) {
      response = `${t.chatbot?.fallback} ${t.chatbot?.contactSuggestion || ""}`;
    }
    return response;
  }, [t?.chatbot, chatbotKnowledgeBase]);

  const handleSendMessage = (userInput) => {
    const newUserMessage = { sender: 'user', text: userInput };
    setChatMessages(prevMessages => [...prevMessages, newUserMessage]);

    const botResponseText = processUserMessage(userInput);
    const newBotMessage = { sender: 'bot', text: botResponseText };

    setTimeout(() => {
      setChatMessages(prevMessages => [...prevMessages, newBotMessage]);
    }, 500);
  };

  // Effect for language and theme setup
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (metaThemeColor) {
      setTimeout(() => {
        const bodyBgColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color').trim();
        if (bodyBgColor) {
          metaThemeColor.setAttribute('content', bodyBgColor);
        }
      }, 0);
    }
  }, [theme]);

  // Effect for scroll listener and window resize for mobile controls
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setShowMobileControls(false);
        } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
          setShowMobileControls(true);
        }
        setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
      } else {
        setShowMobileControls(true);
      }
    };

    const updateMobileView = () => {
      const currentIsMobile = window.innerWidth <= 768;
      setIsMobileView(currentIsMobile);
      if (!currentIsMobile) {
        setShowMobileControls(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateMobileView);

    updateMobileView();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMobileView);
    };
  }, [lastScrollY]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'gr' : 'en'));
  };

  const navHeight = 60;
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const targetPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset - (isMobileView ? 0 : navHeight);
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!t) {
    console.error(`Translations not found for language: ${language}`);
    return <div>Error: Translations not loaded. Please check the console.</div>;
  }

  return (
    <>
      <Navigation
        navLinks={t.nav}
        theme={theme}
        language={language}
        toggleTheme={toggleTheme}
        toggleLanguage={toggleLanguage}
        themeStrings={t.themeToggle}
        langToggleString={language === 'en' ? (translations.gr?.langToggle || 'EN/GR') : (translations.en?.langToggle || 'GR/EN')}
        onNavClick={scrollToSection}
        activeSection={activeSection}
        isMobileView={isMobileView}
        showMobileControls={showMobileControls}
      />
      <div
        className="container"
        style={{ paddingTop: isMobileView ? '10px' : undefined }}
      >
        <Header t={t.header} language={language} />
        <AboutSkills t_about={t.aboutMe} t_skills={t.coreSkills} />
        <Education t={t.education} />
        <Experience t={t.experience} language={language} />
        <Projects t={t.projects} language={language} />

        <section
          id="fun-stuff"
          className={`section fade-in-section ${isFunStuffVisible ? 'is-visible' : ''}`}
          ref={funStuffRef}
        >
          <h2>
            <i className="fas fa-dice-d20"></i>
            {t.funStuff?.title || (language === 'en' ? "Fun Stuff!" : "Παιχνίδια!")}
          </h2>
          <FidgetSpinner3D />
        </section>
      </div>
      <Footer t={t.footer} />
      <ScrollToTopButton />

      {/* Chatbot Elements */}
      <ChatbotIcon onClick={toggleChat} isChatOpen={isChatOpen} />
      {t.chatbot && chatbotKnowledgeBase.length > 0 && (
        <ChatWindow
          messages={chatMessages}
          onSendMessage={handleSendMessage}
          isChatOpen={isChatOpen}
          onClose={toggleChat}
          t_chatbot={t.chatbot}
        />
      )}
    </>
  );
}

export default App;