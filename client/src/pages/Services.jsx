import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const modules = [
    {
      num: "01",
      title: "Aptitude & Logical Reasoning",
      tag: "FOUNDATION MODULE",
      desc: "Build the analytical base. Cover Coding-Decoding, Blood Relations, Direction Sense, Number Series, Odd One Out, and Seating Arrangements.",
      tags: ['Analytical Skills', 'Problem Solving', 'Round 1 Prep'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Resume Building",
      tag: "CAREER TOOLS",
      desc: "Transform your CV into a precise marketing tool. Structure objectives, skills, project impacts, and achievement bullet structures using action verbs.",
      tags: ['Personal Branding', 'ATS Optimization', 'Formatting'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Soft Skills & Communication",
      tag: "COMMUNICATION MODULE",
      desc: "Master verbal, non-verbal, and written communication. GD mastery, JAM activities, self-introduction, posture, and active listening habits.",
      tags: ['Verbal Skills', 'Presentations', 'Group Discussions'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Interview Preparation",
      tag: "PLACEMENT SPECIAL",
      desc: "Structure answers using the STAR method. Handling HR banks, technical rounds, weaknesses, body language, and final questions.",
      tags: ['HR Rounds', 'Technical Prep', 'STAR Method'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Mock Interview (Premium)",
      tag: "⭐ PREMIUM FEATURE",
      desc: "Simulate campus selection conditions under real pressure. Peer rotations, panel interviews, detailed feedback forms, and self-review.",
      tags: ['Live Simulation', 'Structured Feedback', 'Confidence'],
      isPremium: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold">
          <circle cx="12" cy="8" r="7" />
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#0e0c0a] min-h-screen text-white py-20 px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">
            OUR CURRICULUM
          </span>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent w-12" />
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight font-serif mt-4">
            Placement Readiness <span className="font-serif italic text-gold-light font-medium">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-dark-50 font-light leading-relaxed">
            Delivering robust training standards to prepare you for actual campus recruitment processes at top corporate firms.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`border p-8 rounded-xl flex flex-col justify-between transition-all duration-500 relative group hover:-translate-y-1.5 ${
                mod.isPremium 
                  ? 'bg-gold/5 border-gold/35 animate-gold-border shadow-2xl' 
                  : 'bg-[#24211E] border-white/5 hover:border-gold/25 hover:bg-[#2E2A26]'
              }`}
            >
              {mod.isPremium && (
                <span className="absolute top-4 right-6 bg-gold text-[#1A1816] text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  PREMIUM
                </span>
              )}

              <div className="absolute top-4 right-6 font-serif text-7xl font-bold text-gold opacity-10 select-none group-hover:opacity-20 transition-opacity">
                {mod.num}
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-white/[0.03] border border-white/5 rounded-lg text-gold group-hover:bg-gold group-hover:text-[#1A1816] transition-colors">
                    {mod.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-gold tracking-widest uppercase block mb-1">
                      {mod.tag}
                    </span>
                    <h3 className="text-xl font-serif font-semibold text-white group-hover:text-gold transition-colors">{mod.title}</h3>
                  </div>
                </div>

                <p className="text-dark-50 text-sm font-light leading-relaxed">{mod.desc}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {mod.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="bg-[#2E2A26] border border-white/5 text-dark-50 text-[10px] px-3 py-1 rounded-full group-hover:border-gold/25 group-hover:text-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-gold hover:text-gold-light flex items-center space-x-1 transition-colors"
                  >
                    <span>Learn more & enroll</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
