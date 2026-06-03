import React, { useEffect, useRef, useState } from 'react';

const JourneySection = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [ruleWidth, setRuleWidth] = useState('w-0');
  
  // Student steps visibility state
  const [studentVisibleSteps, setStudentVisibleSteps] = useState([false, false, false, false, false, false]);
  // College steps visibility state
  const [collegeVisibleSteps, setCollegeVisibleSteps] = useState([false, false, false, false, false, false]);
  
  const [studentsLineAnimated, setStudentsLineAnimated] = useState(false);
  const [collegesLineAnimated, setCollegesLineAnimated] = useState(false);

  const headerRef = useRef(null);
  const studentsGridRef = useRef(null);
  const collegesGridRef = useRef(null);

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

    const studentsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStudentsLineAnimated(true);
          [0, 1, 2, 3, 4, 5].forEach((index) => {
            setTimeout(() => {
              setStudentVisibleSteps((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 120);
          });
        }
      },
      { threshold: 0.1 }
    );

    const collegesObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setCollegesLineAnimated(true);
          [0, 1, 2, 3, 4, 5].forEach((index) => {
            setTimeout(() => {
              setCollegeVisibleSteps((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 120);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (studentsGridRef.current) studentsObserver.observe(studentsGridRef.current);
    if (collegesGridRef.current) collegesObserver.observe(collegesGridRef.current);

    return () => {
      if (headerRef.current) headerObserver.disconnect();
      if (studentsGridRef.current) studentsObserver.disconnect();
      if (collegesGridRef.current) collegesObserver.disconnect();
    };
  }, []);

  // Force animate lines if tab is switched
  useEffect(() => {
    if (activeTab === 'students' && !studentsLineAnimated) {
      setStudentsLineAnimated(true);
      [0, 1, 2, 3, 4, 5].forEach((index) => {
        setTimeout(() => {
          setStudentVisibleSteps((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        }, index * 120);
      });
    } else if (activeTab === 'colleges' && !collegesLineAnimated) {
      setCollegesLineAnimated(true);
      [0, 1, 2, 3, 4, 5].forEach((index) => {
        setTimeout(() => {
          setCollegeVisibleSteps((prev) => {
            const next = [...prev];
            next[index] = true;
            return next;
          });
        }, index * 120);
      });
    }
  }, [activeTab]);

  const studentSteps = [
    {
      num: "01",
      title: "Enrollment & Needs Assessment",
      body: "Students or colleges register for an Ace It Up program. A brief orientation session helps us understand the batch profile, target companies, and skill gaps before training begins.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      )
    },
    {
      num: "02",
      title: "Core Module Training Begins",
      body: "Training kicks off with Aptitude & Logical Reasoning — building the analytical base. Simultaneously, Resume Building sessions help students create or refine their placement documents.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 013-3h7z"/></svg>
      )
    },
    {
      num: "03",
      title: "Communication & Presence",
      body: "Verbal, non-verbal, and written communication training. Group Discussion simulations, JAM activities, self-introduction practice, and professional writing workshops.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      )
    },
    {
      num: "04",
      title: "Interview Readiness",
      body: "Dedicated sessions on HR questions, STAR method, behavioral + technical interview techniques, and body language coaching. Students build 3–4 polished stories to deploy in any interview.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M17 11l2 2 4-4"/></svg>
      )
    },
    {
      num: "05",
      title: "Mock Interview Simulation",
      body: "Full placement simulation. Students rotate through interviewer and candidate roles, receive structured written feedback, and refine their performance in a safe, high-pressure environment.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
      ),
      premium: true
    },
    {
      num: "06",
      title: "Final Assessment",
      body: "End-of-program evaluation covering all modules. Students receive personalised feedback reports and a Placement Readiness Certificate from Ace It Up.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>
      )
    }
  ];

  const collegeSteps = [
    {
      num: "01",
      title: "Initial BDE Meeting",
      body: "TPO introduction, problem statement presentation, and understanding the college's specific placement challenges and student demographics.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
    {
      num: "02",
      title: "Proposal & MoU Signing",
      body: "Customised training proposal, milestone definition, flexible pricing discussion, and signing the partnership agreement.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
      )
    },
    {
      num: "03",
      title: "Free Demo Workshop",
      body: "One complimentary workshop (Resume Building, Communication, or Interview Skills) to demonstrate training quality and engagement directly to students.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22h20M12 2v20M2 12h20"/></svg>
      )
    },
    {
      num: "04",
      title: "Batch Scheduling",
      body: "Co-ordinate with TPO on session calendars, training modes (offline, online, or hybrid), batch sizes, and module priorities.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      )
    },
    {
      num: "05",
      title: "Training Delivery",
      body: "Full deployment of Ace It Up training delivered to student batches across all agreed curriculum milestones by expert mentors.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      )
    },
    {
      num: "06",
      title: "Outcome Reporting",
      body: "Post-program placement tracking feedback compilation, batch performance analytics report, and renewal/next steps discussion.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z"/></svg>
      )
    }
  ];

  return (
    <section id="journey-section" className="bg-[#24211E] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.15em] text-gold uppercase mb-3">
            THE JOURNEY
          </span>
          <div className={`h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-1000 ${ruleWidth}`} />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mt-8 mb-6">
            From Enrollment to <span className="font-serif italic text-gold-light font-medium font-normal">Offer Letter</span>
          </h2>
          <p className="text-dark-50 text-base md:text-lg font-light leading-relaxed">
            A structured, step-by-step program designed so that every student who 
            completes Ace It Up arrives at placements genuinely ready.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-20">
          <div className="relative bg-[#1A1816] border border-white/5 rounded-full p-1.5 flex w-fit">
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

        {/* Timeline Content */}
        <div className="relative mb-20 min-h-[400px]">
          
          {/* For Students Flow */}
          <div
            className={`transition-all duration-500 ${
              activeTab === 'students' ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'
            }`}
          >
            <div ref={studentsGridRef} className="relative w-full">
              {/* Horizontal Line (Desktop) */}
              <div 
                className="absolute top-[25px] left-[8.33%] h-[2px] bg-gradient-to-r from-gold/50 to-transparent z-0 hidden lg:block transition-all duration-1000 ease-out"
                style={{ 
                  width: studentsLineAnimated ? '83.34%' : '0%', 
                  backgroundImage: 'linear-gradient(to right, #DAB57F 50%, transparent 50%)',
                  backgroundSize: '16px 1px',
                  backgroundRepeat: 'repeat-x'
                }}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                {studentSteps.map((step, i) => {
                  const isPremium = step.premium;
                  const isVisible = studentVisibleSteps[i];
                  return (
                    <div
                      key={i}
                      className={`flex flex-col items-center text-center lg:px-2 group transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                      }`}
                    >
                      {/* Node container */}
                      <div className="flex flex-col items-center mb-6 z-10">
                        <div
                          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-serif text-lg font-bold transition-all duration-500 ${
                            isPremium 
                              ? 'bg-gold border-gold text-[#1A1816] shadow-lg shadow-gold/20' 
                              : 'bg-[#24211E] border-gold/25 text-gold group-hover:bg-gold group-hover:border-gold group-hover:text-[#1A1816] group-hover:shadow-lg group-hover:shadow-gold/20'
                          }`}
                        >
                          {step.num}
                        </div>
                        {/* Mobile line connection */}
                        <div className="w-[2px] h-12 bg-white/5 group-last:hidden lg:hidden mt-2" />
                      </div>

                      {/* Card */}
                      <div
                        className={`relative bg-[#2E2A26] border rounded-2xl p-6 w-full text-left transition-all duration-500 hover:bg-[#3A3530] hover:border-gold/25 hover:-translate-y-1.5 flex flex-col ${
                          isPremium ? 'border-gold/35 bg-gold/5' : 'border-white/5'
                        }`}
                        style={{ minHeight: '260px' }}
                      >
                        {isPremium && (
                          <span className="absolute top-4 right-4 bg-gold text-[#1a1816] text-[8px] font-bold px-2 py-0.5 rounded-sm">
                            PREMIUM
                          </span>
                        )}
                        <div className="w-10 h-10 rounded-lg bg-white/[0.04] text-gold flex items-center justify-center mb-5 transition-colors group-hover:bg-gold/15 group-hover:text-gold-light">
                          {step.icon}
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-white mb-2 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-dark-50 text-xs md:text-sm font-light leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* For Colleges Flow */}
          <div
            className={`transition-all duration-500 ${
              activeTab === 'colleges' ? 'opacity-100 translate-y-0 block' : 'opacity-0 translate-y-4 hidden'
            }`}
          >
            <div ref={collegesGridRef} className="relative w-full">
              {/* Horizontal Line (Desktop) */}
              <div 
                className="absolute top-[25px] left-[8.33%] h-[2px] bg-gradient-to-r from-gold/50 to-transparent z-0 hidden lg:block transition-all duration-1000 ease-out"
                style={{ 
                  width: collegesLineAnimated ? '83.34%' : '0%', 
                  backgroundImage: 'linear-gradient(to right, #DAB57F 50%, transparent 50%)',
                  backgroundSize: '16px 1px',
                  backgroundRepeat: 'repeat-x'
                }}
              />
              
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                {collegeSteps.map((step, i) => {
                  const isVisible = collegeVisibleSteps[i];
                  return (
                    <div
                      key={i}
                      className={`flex flex-col items-center text-center lg:px-2 group transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                      }`}
                    >
                      {/* Node container */}
                      <div className="flex flex-col items-center mb-6 z-10">
                        <div
                          className="w-12 h-12 rounded-full border-2 bg-[#24211E] border-gold/25 text-gold flex items-center justify-center font-serif text-lg font-bold transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:text-[#1A1816] group-hover:shadow-lg group-hover:shadow-gold/20"
                        >
                          {step.num}
                        </div>
                        {/* Mobile line connection */}
                        <div className="w-[2px] h-12 bg-white/5 group-last:hidden lg:hidden mt-2" />
                      </div>

                      {/* Card */}
                      <div
                        className="bg-[#2E2A26] border border-white/5 rounded-2xl p-6 w-full text-left transition-all duration-500 hover:bg-[#3A3530] hover:border-gold/25 hover:-translate-y-1.5 flex flex-col"
                        style={{ minHeight: '260px' }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/[0.04] text-gold flex items-center justify-center mb-5 transition-colors group-hover:bg-gold/15 group-hover:text-gold-light">
                          {step.icon}
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-white mb-2 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-dark-50 text-xs md:text-sm font-light leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="border-t border-white/5 pt-16 text-center flex flex-col items-center">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-8">
            Ready to begin your placement journey?
          </h3>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-[#1A1816] font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_8px_30px_rgba(218,181,127,0.3)] hover:-translate-y-0.5"
            >
              Enroll as a Student
            </a>
            <a
              href="#partner"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 hover:bg-gold/5 hover:-translate-y-0.5"
            >
              Partner as a College
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JourneySection;
