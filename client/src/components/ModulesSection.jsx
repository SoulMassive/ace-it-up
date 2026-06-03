import React, { useEffect, useRef, useState } from 'react';

const ModulesSection = () => {
  const [ruleWidth, setRuleWidth] = useState('w-0');
  const [visibleCards, setVisibleCards] = useState([false, false, false, false, false]);
  const [expandedCards, setExpandedCards] = useState([false, false, false, false, false]);
  
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setRuleWidth('w-12');
        }
      },
      { threshold: 0.15 }
    );

    const gridObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          [0, 1, 2, 3, 4].forEach((index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (gridRef.current) gridObserver.observe(gridRef.current);

    return () => {
      if (headerRef.current) headerObserver.disconnect();
      if (gridRef.current) gridObserver.disconnect();
    };
  }, []);

  const toggleExpand = (index) => {
    setExpandedCards((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const modules = [
    {
      num: "01",
      tag: "FOUNDATION MODULE",
      title: "Aptitude & Logical Reasoning",
      tagline: "Think Clearly. Solve Faster. Score Higher.",
      desc: "Most companies eliminate candidates before HR even meets them — in the aptitude round. This module arms students with the mental frameworks and pattern recognition to consistently clear the first filter.",
      topics: [
        "Coding-Decoding (pattern recognition, letter shifts, reversal rules)",
        "Blood Relations (family tree mapping, gender disambiguation)",
        "Direction Sense (path tracing, Pythagoras for distances)",
        "Number Series (constant difference, Fibonacci, prime patterns, alternating ops)",
        "Odd One Out (category, math property, letter pattern, relationship)",
        "Seating Arrangement (linear and circular, absolute vs relative clues)"
      ],
      pills: ["Aptitude", "Reasoning", "Problem Solving"]
    },
    {
      num: "02",
      tag: "CAREER TOOLS MODULE",
      title: "Resume Building",
      tagline: "Build a Resume That Gets You In the Room",
      desc: "Your resume has 6–8 seconds to make an impression. This module turns a generic document into a precise marketing tool — one that gets noticed, not discarded.",
      topics: [
        "Resume Structure: Header → Objective → Education → Skills → Projects → Achievements",
        "Writing a compelling Career Objective (the formula: Who + Strength + Goal)",
        "Skills Section strategy: Technical vs Soft, what to include vs what to cut",
        "Project descriptions that show impact (format: Name → Tools → Problem → Role → Result)",
        "Achievement bullets using the Action Verb + Context + Result framework",
        "Common mistakes that get resumes rejected (vague claims, unprofessional emails, irrelevant content, formatting chaos)"
      ],
      pills: ["Resume", "Personal Branding", "ATS Optimization"]
    },
    {
      num: "03",
      tag: "COMMUNICATION MODULE",
      title: "Soft Skills & Communication",
      tagline: "Speak With Clarity. Connect With Confidence.",
      desc: "Technical skill gets you considered. Communication gets you hired. This module covers every dimension of professional communication — verbal, non-verbal, written, and listening.",
      topics: [
        "Verbal Communication: clarity, pace, tone variation, strategic pausing",
        "Non-Verbal Communication: posture, eye contact, gestures, expression management",
        "Written Communication: professional emails, structure, brevity, grammar",
        "Active Listening: engagement cues, no interrupting, paraphrasing, clarifying questions",
        "Group Discussion Mastery: initiation, substance, collaboration, avoiding GD traps",
        "Self-Introduction Framework: Greeting → Name → Education → Skills → Interest → Goal",
        "JAM Activity (Just a Minute): filler word elimination, on-topic delivery, fluency",
        "Daily improvement habits: recording yourself, mirror speaking, vocabulary building"
      ],
      pills: ["Verbal", "Non-Verbal", "Written", "GD Skills"]
    },
    {
      num: "04",
      tag: "PLACEMENT MODULE",
      title: "Interview Preparation",
      tagline: "Walk In Prepared. Walk Out Confident.",
      desc: "Interviews aren't won by the most qualified candidate — they're won by the best-prepared one. This module transforms interview anxiety into structured confidence through proven frameworks and repeated practice.",
      topics: [
        '"Tell Me About Yourself" — the story structure that sets the tone',
        "Strengths & Weaknesses: how to be honest without hurting yourself",
        'HR Question Bank: "Where do you see yourself in 5 years?", "Why should we hire you?", handling pressure questions',
        "STAR Method (Situation → Task → Action → Result) for behavioral questions",
        "Technical Interview mindset: think aloud, clarify first, narrate reasoning",
        "Situational Questions: judgment, values, workplace scenarios",
        "Body language mastery: eye contact, posture, hands, voice projection, filler word removal",
        "Questions to ask the interviewer (the final impression)"
      ],
      pills: ["HR Rounds", "Technical", "STAR Method", "Body Language"]
    },
    {
      num: "05",
      tag: "⭐ PREMIUM MODULE",
      title: "Mock Interview",
      tagline: "Real Pressure. Real Feedback. Real Readiness.",
      desc: "The only way to prepare for an interview is to do one. Mock Interview sessions pair students into interviewer + candidate roles, simulate actual campus placement conditions, and deliver structured feedback that creates measurable improvement.",
      topics: [
        "Full mock interview simulation (10-min slots, role rotation)",
        "Structured feedback forms: communication, content, confidence, body language",
        "Panel mock interviews (multiple interviewers)",
        "HR + Technical round combinations",
        "Recording and self-review sessions",
        "Peer feedback and group debrief",
        "Progressive difficulty: first mock → mid-module practice → final placement simulation"
      ],
      pills: ["Live Practice", "Feedback", "Simulation", "Confidence"],
      premium: true
    }
  ];

  return (
    <section id="modules-grid-container" className="bg-[#1A1816] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.15em] text-gold uppercase mb-3">
            WHAT WE TEACH
          </span>
          <div className={`h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-1000 ${ruleWidth}`} />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mt-8 mb-6">
            Five Modules. One <span className="font-serif italic text-gold-light font-medium">Complete Transformation.</span>
          </h2>
          <p className="text-dark-50 text-base md:text-lg font-light leading-relaxed">
            Our curriculum covers every dimension of placement readiness — from the 
            aptitude test to the final handshake.
          </p>
        </div>

        {/* Modules Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {modules.map((mod, i) => {
            const isPremium = mod.premium;
            const isExpanded = expandedCards[i];
            
            return (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === 4 ? 'lg:col-span-2 justify-self-center lg:w-[calc(50%-16px)] w-full' : 'col-span-1'
                }`}
              >
                <div
                  onClick={() => toggleExpand(i)}
                  className={`relative group bg-[#24211E] border rounded-2xl p-8 md:p-10 cursor-pointer transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                    isPremium 
                      ? 'bg-gold/5 border-gold/35 animate-gold-border' 
                      : 'border-white/5 hover:border-gold/45 hover:bg-[#2E2A26] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3),0_0_20px_rgba(218,181,127,0.05)]'
                  } ${
                    visibleCards[i] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                  } ${isExpanded ? 'shadow-2xl' : ''}`}
                  style={{ minHeight: '280px' }}
                >
                  
                  {isPremium && (
                    <span className="absolute top-4 left-8 bg-gold text-[#0e0c0a] text-[10px] md:text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                      INCLUDED IN PREMIUM PLAN
                    </span>
                  )}

                  <div className="absolute top-4 right-8 font-serif text-7xl md:text-8xl font-bold text-gold opacity-10 select-none group-hover:opacity-20 group-hover:-translate-y-1 transition-all duration-500">
                    {mod.num}
                  </div>

                  <div className={isPremium ? 'mt-8' : ''}>
                    <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gold uppercase block mb-3">
                      {mod.tag}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-2 leading-tight">
                      {mod.title}
                    </h3>
                    <p className="text-gold-light text-sm md:text-base font-light mb-6">
                      {mod.tagline}
                    </p>

                    {/* Expandable topics list */}
                    <div 
                      className="transition-all duration-500 ease-in-out overflow-hidden"
                      style={{ 
                        maxHeight: isExpanded ? '800px' : '0px', 
                        opacity: isExpanded ? 1 : 0 
                      }}
                    >
                      <p className="text-dark-55 text-sm md:text-base font-light leading-relaxed mb-6">
                        {mod.desc}
                      </p>
                      <h4 className="text-xs font-semibold tracking-wider text-white uppercase mb-4">
                        Topics Covered:
                      </h4>
                      <ul className="space-y-2 mb-8">
                        {mod.topics.map((topic, idx) => (
                          <li key={idx} className="text-dark-50 text-sm font-light flex items-start">
                            <span className="text-gold mr-3 font-semibold">—</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {mod.pills.map((pill, idx) => (
                      <span
                        key={idx}
                        className="bg-[#2E2A26] border border-white/5 text-dark-50 text-[10px] md:text-xs px-3.5 py-1.5 rounded-full transition-colors duration-300 group-hover:border-gold/25 group-hover:text-white"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Expand button */}
                  <div className="flex items-center justify-center gap-2 mt-6 text-gold text-xs font-medium tracking-wide">
                    <span>{isExpanded ? "Click to Collapse" : "Click to Expand"}</span>
                    <svg
                      className={`w-3.5 h-3.5 stroke-current transition-transform duration-500 ${
                        isExpanded ? 'rotate-180' : 'rotate-0'
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer */}
        <div className="text-center flex flex-col items-center">
          <p className="text-dark-50 text-base md:text-lg font-light mb-6">
            All modules available in Offline · Online · Hybrid formats
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                text: "Offline Classroom"
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9 9 0 0112.138 0M1.93 7.05a14 14 0 0120.14 0" />
                  </svg>
                ),
                text: "Online Interactive"
              },
              {
                icon: (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
                text: "Hybrid Flexibility"
              }
            ].map((f, i) => (
              <div
                key={i}
                className="bg-[#2E2A26] border border-white/5 hover:border-gold/25 hover:bg-[#3A3530] text-white py-2 px-5 rounded-full flex items-center gap-2.5 text-xs md:text-sm font-normal transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-gold">{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>

          <a
            href="#full-curriculum"
            className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3.5 border border-gold text-gold font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 hover:text-[#1A1816] hover:shadow-[0_8px_24px_rgba(218,181,127,0.25)] group"
          >
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10">View Full Curriculum</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ModulesSection;
