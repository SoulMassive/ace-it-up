import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import ModulesSection from '../components/ModulesSection';
import JourneySection from '../components/JourneySection';
import PricingSection from '../components/PricingSection';
import ContactCTASection from '../components/ContactCTASection';

const Home = () => {
  return (
    <div className="bg-[#0e0c0a] text-white overflow-hidden font-sans">
      
      {/* Premium Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center bg-[#1A1816] px-6 py-20 border-b border-white/5">
        {/* Ambient Gold Glow Backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto text-center space-y-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Placement Readiness & Employability
            </span>
            <span className="h-[1px] w-8 bg-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl font-normal tracking-tight leading-[1.1] font-serif"
          >
            Ace Your Career with <br />
            <span className="font-serif italic font-medium text-gold drop-shadow-[0_2px_10px_rgba(218,181,127,0.2)]">ACE IT UP</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl text-dark-50 max-w-3xl mx-auto font-light leading-relaxed font-sans"
          >
            Industry-leading placement readiness training programs designed to accelerate your growth, build real interview confidence, and secure your career goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-5 pt-4"
          >
            <Link
              to="/services"
              className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-gold text-[#1A1816] font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(218,181,127,0.3)] hover:-translate-y-0.5 group"
            >
              <span className="relative z-10">Explore Curriculum</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/10 hover:border-gold/30 bg-white/[0.03] hover:bg-white/[0.06] text-white font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      {/* About & Reality Sections (Prompt 2) */}
      <AboutSection />

      {/* Modules Grid Section (Prompt 3) */}
      <ModulesSection />

      {/* Journey Step Flow Section (Prompt 4) */}
      <JourneySection />

      {/* Programs & Pricing Section (Prompt 6) */}
      <PricingSection />

      {/* Contact + Closing CTA Hero Section (Prompt 7) */}
      <ContactCTASection />

    </div>
  );
};

export default Home;
