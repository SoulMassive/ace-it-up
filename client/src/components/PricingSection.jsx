import React, { useEffect, useRef, useState } from 'react';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [ruleWidth, setRuleWidth] = useState('w-0');
  
  const [studentVisibleCards, setStudentVisibleCards] = useState([false, false, false]);
  const [collegeVisibleCards, setCollegeVisibleCards] = useState([false, false, false]);

  const headerRef = useRef(null);
  const studentPlansRef = useRef(null);
  const collegePlansRef = useRef(null);

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

    const studentPlansObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          [0, 1, 2].forEach((index) => {
            setTimeout(() => {
              setStudentVisibleCards((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    const collegePlansObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          [0, 1, 2].forEach((index) => {
            setTimeout(() => {
              setCollegeVisibleCards((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (studentPlansRef.current) studentPlansObserver.observe(studentPlansRef.current);
    if (collegePlansRef.current) collegePlansObserver.observe(collegePlansRef.current);

    return () => {
      if (headerRef.current) headerObserver.disconnect();
      if (studentPlansRef.current) studentPlansObserver.disconnect();
      if (collegePlansRef.current) collegePlansObserver.disconnect();
    };
  }, []);

  // Force make visible if tab is toggled
  useEffect(() => {
    if (activeTab === 'students') {
      [0, 1, 2].forEach((index) => {
        setTimeout(() => {
          setStudentVisibleCards((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        }, index * 100);
      });
    } else {
      [0, 1, 2].forEach((index) => {
        setTimeout(() => {
          setCollegeVisibleCards((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        }, index * 100);
      });
    }
  }, [activeTab]);

  return (
    <section id="pricing-section" className="bg-[#1A1816] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.15em] text-gold uppercase mb-3">
            PROGRAMS
          </span>
          <div className={`h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-1000 ${ruleWidth}`} />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mt-8 mb-6">
            Choose Your <span className="font-serif italic text-gold-light font-normal">Path to Placement</span>
          </h2>
          <p className="text-dark-50 text-base md:text-lg font-light leading-relaxed">
            Whether you're a student preparing for campus placements or a college 
            looking to elevate your batch — there's an Ace It Up program built for you.
          </p>
        </div>

        {/* Audience Toggle */}
        <div className="flex justify-center mb-20">
          <div className="relative bg-[#2E2A26] border border-white/5 rounded-full p-1.5 flex w-fit">
            <button
              onClick={() => setActiveTab('students')}
              className={`relative z-10 px-9 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === 'students' ? 'text-[#1A1816]' : 'text-dark-50'
              }`}
            >
              For Students
            </button>
            <button
              onClick={() => setActiveTab('colleges')}
              className={`relative z-10 px-9 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === 'colleges' ? 'text-[#1A1816]' : 'text-dark-50'
              }`}
            >
              For Colleges
            </button>
            <div
              className="absolute top-1.5 bottom-1.5 left-1.5 bg-gold rounded-full transition-all duration-500 ease-out shadow-lg shadow-gold/25"
              style={{
                width: 'calc(50% - 6px)',
                transform: activeTab === 'students' ? 'translateX(0%)' : 'translateX(100%)'
              }}
            />
          </div>
        </div>

        {/* Pricing Grids Wrapper */}
        <div className="relative mb-16">
          
          {/* Students pricing view */}
          <div
            className={`transition-all duration-500 ${
              activeTab === 'students' ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'
            }`}
          >
            <div ref={studentPlansRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Plan 1: Core */}
              <div
                className={`flex transition-all duration-700 ${
                  studentVisibleCards[0] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="bg-[#24211E] border border-white/5 hover:border-gold/25 hover:-translate-y-1.5 rounded-2xl p-8 md:p-10 w-full flex flex-col justify-between transition-all duration-500 relative">
                  <span className="absolute top-6 right-6 bg-white/[0.04] border border-white/10 text-gold text-[9px] font-bold px-3 py-1 rounded-sm tracking-wider uppercase">
                    MOST POPULAR
                  </span>
                  
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2 pt-4">
                      Core Placement Program
                    </h3>
                    <p className="text-dark-50 text-xs font-light mb-6">
                      Everything you need to clear placements
                    </p>
                    
                    <div className="mb-8">
                      <span className="text-2xl font-bold text-gold">₹750</span>
                      <p className="text-dark-100 text-[10px] tracking-wider uppercase mt-1">
                        4-Week Intensive · Offline/Online/Hybrid
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8 border-b border-white/5 pb-8">
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Aptitude & Logical Reasoning (Full Module)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Resume Building (Full Module)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Soft Skills & Communication (Full Module)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Interview Preparation (Full Module)</span>
                      </li>
                      <li className="text-sm font-light text-dark-100 flex items-start">
                        <span className="text-white/20 mr-3 font-semibold">×</span>
                        <span>Mock Interview Sessions (Not Included)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs text-white flex items-center">
                      <span className="text-gold mr-2.5 font-bold">→</span>
                      <span>Activity-based, not lecture-based</span>
                    </p>
                    <p className="text-xs text-white flex items-center">
                      <span className="text-gold mr-2.5 font-bold">→</span>
                      <span>Group Discussion simulations included</span>
                    </p>
                    <p className="text-xs text-white flex items-center">
                      <span className="text-gold mr-2.5 font-bold">→</span>
                      <span>Placement Readiness Certificate</span>
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-4 text-center bg-gold text-[#1A1816] font-semibold text-xs tracking-wider rounded-lg uppercase transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_4px_15px_rgba(218,181,127,0.25)]"
                  >
                    Enrol Now
                  </a>
                </div>
              </div>

              {/* Plan 2: Premium (Featured) */}
              <div
                className={`flex transition-all duration-700 ${
                  studentVisibleCards[1] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="bg-gold/5 border border-gold/35 animate-gold-border hover:-translate-y-1.5 rounded-2xl p-8 md:p-10 w-full flex flex-col justify-between transition-all duration-500 relative shadow-2xl">
                  <span className="absolute top-6 right-6 bg-gold text-[#1A1816] text-[9px] font-bold px-3 py-1 rounded-sm tracking-wider uppercase">
                    RECOMMENDED
                  </span>
                  
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2 pt-4">
                      Premium Placement Program
                    </h3>
                    <p className="text-gold-light text-xs font-light mb-6">
                      Core program + Live Mock Interviews
                    </p>
                    
                    <div className="mb-8">
                      <span className="text-2xl font-bold text-gold">₹999</span>
                      <p className="text-dark-100 text-[10px] tracking-wider uppercase mt-1">
                        5-Week Complete Program · Offline/Online/Hybrid
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8 border-b border-white/5 pb-8">
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Aptitude & Logical Reasoning (Full Module)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Resume Building (Full Module)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Soft Skills & Communication (Full Module)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Interview Preparation (Full Module)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span className="text-white">Mock Interview Sessions (3 Full Rounds)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Personalised Feedback Reports</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Final Placement Readiness Assessment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs text-white flex items-center">
                      <span className="text-gold mr-2.5 font-bold">→</span>
                      <span>Everything in Core, plus live interview practice</span>
                    </p>
                    <p className="text-xs text-white flex items-center">
                      <span className="text-gold mr-2.5 font-bold">→</span>
                      <span>Structured feedback after each mock</span>
                    </p>
                    <p className="text-xs text-white flex items-center">
                      <span className="text-gold mr-2.5 font-bold">→</span>
                      <span>Panel interview simulation</span>
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-4 text-center bg-gold text-[#1A1816] font-bold text-sm tracking-wider rounded-lg uppercase transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_6px_20px_rgba(218,181,127,0.35)]"
                  >
                    Enrol in Premium
                  </a>
                </div>
              </div>

              {/* Plan 3: Single Module */}
              <div
                className={`flex transition-all duration-700 ${
                  studentVisibleCards[2] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="bg-[#24211E] border border-white/5 hover:border-gold/25 hover:-translate-y-1.5 rounded-2xl p-8 md:p-10 w-full flex flex-col justify-between transition-all duration-500 relative">
                  <span className="absolute top-6 right-6 bg-white/[0.04] border border-white/10 text-gold text-[9px] font-bold px-3 py-1 rounded-sm tracking-wider uppercase">
                    FLEXIBLE
                  </span>
                  
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2 pt-4">
                      Individual Module Access
                    </h3>
                    <p className="text-dark-50 text-xs font-light mb-6">
                      Train on what you need most
                    </p>
                    
                    <div className="mb-8">
                      <span className="text-2xl font-bold text-gold">Contact for Pricing</span>
                      <p className="text-dark-100 text-[10px] tracking-wider uppercase mt-1">
                        Module-specific (3–5 sessions each)
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8 border-b border-white/5 pb-8">
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Choose any module: Aptitude / Resume / Communication / Interview Prep</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Same quality content as full programs</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Certificate of Completion per module</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-4 text-center border border-gold text-gold font-semibold text-xs tracking-wider rounded-lg uppercase transition-all duration-300 hover:bg-gold/5"
                  >
                    Choose Modules
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Colleges pricing view */}
          <div
            className={`transition-all duration-500 ${
              activeTab === 'colleges' ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'
            }`}
          >
            <div ref={collegePlansRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* College Plan 1: Workshop */}
              <div
                className={`flex transition-all duration-700 ${
                  collegeVisibleCards[0] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="bg-[#24211E] border border-white/5 hover:border-gold/25 hover:-translate-y-1.5 rounded-2xl p-8 md:p-10 w-full flex flex-col justify-between transition-all duration-500 relative">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2 pt-4">
                      Campus Workshop
                    </h3>
                    <p className="text-dark-50 text-xs font-light mb-6">
                      High-impact, single-session training
                    </p>
                    
                    <div className="mb-8">
                      <span className="text-2xl font-bold text-gold">Contact for Pricing</span>
                      <p className="text-dark-100 text-[10px] tracking-wider uppercase mt-1">
                        1 Day (6–8 hours) · Offline at campus
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8 border-b border-white/5 pb-8">
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Choose 1–2 topics (Resume Building / Interview Skills / Communication)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Interactive workshop format with activities</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Batch size: 30–60 students</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Faculty debrief session included</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs text-white flex items-center">
                      <span className="text-gold mr-2.5 font-bold">→</span>
                      <span className="text-gold-light">Best for colleges wanting to trial before full partnership</span>
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-4 text-center bg-gold text-[#1A1816] font-semibold text-xs tracking-wider rounded-lg uppercase transition-all duration-300 hover:bg-gold-dark"
                  >
                    Book a Workshop
                  </a>
                </div>
              </div>

              {/* College Plan 2: Semester (Featured) */}
              <div
                className={`flex transition-all duration-700 ${
                  collegeVisibleCards[1] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="bg-gold/5 border border-gold/35 animate-gold-border hover:-translate-y-1.5 rounded-2xl p-8 md:p-10 w-full flex flex-col justify-between transition-all duration-500 relative shadow-2xl">
                  <span className="absolute top-6 right-6 bg-gold text-[#1A1816] text-[9px] font-bold px-3 py-1 rounded-sm tracking-wider uppercase">
                    RECOMMENDED
                  </span>
                  
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2 pt-4">
                      Semester-Long Program
                    </h3>
                    <p className="text-gold-light text-xs font-light mb-6">
                      Structured training across an entire semester
                    </p>
                    
                    <div className="mb-8">
                      <span className="text-2xl font-bold text-gold">Contact for Pricing</span>
                      <p className="text-dark-100 text-[10px] tracking-wider uppercase mt-1">
                        12–16 weeks · Offline/Online/Hybrid
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8 border-b border-white/5 pb-8">
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>All 4 Core Modules delivered in sequence</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Progress tracking and batch performance reports</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>TPO coordination and scheduling support</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>GD rounds, mock interviews, aptitude assessments</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Placement Readiness Certificates for all students</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs text-white flex items-center">
                      <span className="text-gold mr-2.5 font-bold">→</span>
                      <span className="text-gold-light">Best for final-year batches preparing for campus placements</span>
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-4 text-center bg-gold text-[#1A1816] font-bold text-sm tracking-wider rounded-lg uppercase transition-all duration-300 hover:bg-gold-dark"
                  >
                    Partner With Us
                  </a>
                </div>
              </div>

              {/* College Plan 3: Bootcamp */}
              <div
                className={`flex transition-all duration-700 ${
                  collegeVisibleCards[2] ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
              >
                <div className="bg-[#24211E] border border-white/5 hover:border-gold/25 hover:-translate-y-1.5 rounded-2xl p-8 md:p-10 w-full flex flex-col justify-between transition-all duration-500 relative">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-white mb-2 pt-4">
                      Placement Bootcamp
                    </h3>
                    <p className="text-dark-50 text-xs font-light mb-6">
                      Intensive 3–5 day pre-placement sprint
                    </p>
                    
                    <div className="mb-8">
                      <span className="text-2xl font-bold text-gold">Contact for Pricing</span>
                      <p className="text-dark-100 text-[10px] tracking-wider uppercase mt-1">
                        3–5 Days Intensive · Offline at campus
                      </p>
                    </div>

                    <ul className="space-y-4 mb-8 border-b border-white/5 pb-8">
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Compressed full curriculum (all modules)</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Daily mock tests and GD rounds</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Final day full placement simulation</span>
                      </li>
                      <li className="text-sm font-light text-dark-50 flex items-start">
                        <span className="text-gold mr-3 font-semibold">✓</span>
                        <span>Individual feedback for each student</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-xs text-white flex items-center">
                      <span className="text-gold mr-2.5 font-bold">→</span>
                      <span className="text-gold-light">Best for colleges 2–4 weeks before campus recruitment starts</span>
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-4 text-center border border-gold text-gold font-semibold text-xs tracking-wider rounded-lg uppercase transition-all duration-300 hover:bg-gold/5"
                  >
                    Book a Bootcamp
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        <p className="text-center font-light text-dark-50 text-sm max-w-2xl mx-auto mb-16">
          "All programs can be customised to your batch size, schedule, and target companies. 
          Contact us to discuss what works best for your institution."
        </p>

        {/* FREE OFFER CALLOUT BOX */}
        <div className="border border-gold/25 hover:border-gold/55 rounded-2xl p-8 md:p-12 bg-gold/5 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg shadow-gold/5 transition-all duration-1000">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center text-gold">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12V8H4v4M2 12h20M12 22V12M12 12H7.5a2.5 2.5 0 110-5H12m0 5h4.5a2.5 2.5 0 100-5H12" />
              </svg>
            </div>
            <div>
              <h4 className="font-serif text-2xl font-semibold text-white mb-2">
                Start With a Free Workshop
              </h4>
              <p className="text-dark-50 text-sm font-light max-w-2xl">
                We offer complimentary demo workshops for colleges — Interview Skills, 
                Resume Building, or Communication Masterclass. Experience Ace It Up 
                quality before any commitment.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-gold text-[#1A1816] font-bold text-xs tracking-wider rounded-lg uppercase whitespace-nowrap transition-all duration-300 hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(218,181,127,0.3)]"
          >
            Request a Free Workshop
          </a>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
