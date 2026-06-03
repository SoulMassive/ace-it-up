import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'About', id: 'reality-section' },
    { name: 'Modules', id: 'modules-grid-container' },
    { name: 'How It Works', id: 'journey-section' },
    { name: 'Pricing', id: 'pricing-section' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate scroll percentage
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(percent);

      // 2. Sticky height & shadow transition after 80px
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 3. Simple scroll Spy to detect active section
      let current = '';
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = link.id;
          }
        }
      });
      if (current) {
        const matchingLink = navLinks.find((l) => l.id === current);
        if (matchingLink) {
          setActiveSection(matchingLink.name.toLowerCase());
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, targetId, name) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = 'auto';

    if (location.pathname !== '/') {
      navigate('/');
      // Delay slightly to let navigation complete before scrolling
      setTimeout(() => {
        scrollToElement(targetId);
      }, 300);
    } else {
      scrollToElement(targetId);
    }
    setActiveSection(name.toLowerCase());
  };

  const scrollToElement = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 85;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* 2px Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[100] pointer-events-none">
        <div 
          className="h-full bg-gold transition-all duration-75 ease-out shadow-[0_0_8px_rgba(218,181,127,0.6)]" 
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Sticky Navigation Bar */}
      <nav 
        className={`fixed top-[2px] left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'h-[70px] bg-[#1A1816]/92 border-b border-gold/15 shadow-[0_2px_40px_rgba(0,0,0,0.6)]' 
            : 'h-[80px] bg-[#1a1816]/80 border-b border-white/5'
        } backdrop-blur-md flex items-center`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 text-2xl font-bold tracking-[3px] text-white font-serif uppercase"
            >
              ACE IT <span className="text-gold italic font-medium">UP</span>
            </Link>
          </div>

          {/* Desktop Links (Center) */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavLinkClick(e, link.id, link.name)}
                  className={`text-sm font-medium tracking-[0.5px] font-sans transition-colors duration-300 relative py-2 ${
                    isActive ? 'text-gold' : 'text-dark-50 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Underline indicator */}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-gold shadow-[0_0_8px_rgba(218,181,127,0.4)] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTAs (Right) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="#partner" 
              onClick={(e) => handleNavLinkClick(e, 'contact', 'contact')}
              className="text-sm font-medium text-gold hover:text-gold-light transition-colors"
            >
              For Colleges
            </a>
            <a
              href="#enroll"
              onClick={(e) => handleNavLinkClick(e, 'contact', 'contact')}
              className="inline-flex items-center px-6 py-2.5 border border-gold text-sm font-semibold rounded-md text-gold hover:bg-gold hover:text-[#1A1816] transition-all duration-300 hover:shadow-[0_4px_15px_rgba(218,181,127,0.25)]"
            >
              Enrol Now
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => {
                const nextState = !isOpen;
                setIsOpen(nextState);
                document.body.style.overflow = nextState ? 'hidden' : 'auto';
              }}
              type="button"
              className="inline-flex flex-col gap-1.5 justify-center p-2 rounded-md text-gold hover:text-white transition-colors z-[101]"
              aria-label="Toggle Menu"
            >
              <span className={`block w-6 h-[2px] bg-gold transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`block w-6 h-[2px] bg-gold transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-[2px] bg-gold transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0e0c0a]/98 z-[99] lg:hidden flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8 mb-12">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <li key={link.name}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavLinkClick(e, link.id, link.name)}
                      className={`text-2xl font-medium tracking-[0.5px] transition-colors duration-300 ${
                        isActive ? 'text-gold' : 'text-dark-50 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col items-center gap-6 w-full max-w-[280px]">
              <a 
                href="#partner"
                onClick={(e) => handleNavLinkClick(e, 'contact', 'contact')}
                className="text-base font-medium text-gold hover:text-gold-light transition-colors"
              >
                For Colleges
              </a>
              <a
                href="#enroll"
                onClick={(e) => handleNavLinkClick(e, 'contact', 'contact')}
                className="w-full text-center py-3.5 border border-gold text-base font-semibold rounded-md text-gold hover:bg-gold hover:text-[#1A1816] transition-all duration-300"
              >
                Enrol Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
