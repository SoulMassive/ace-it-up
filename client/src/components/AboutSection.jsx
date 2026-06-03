import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [ruleWidth, setRuleWidth] = useState('w-0');
  const [cardsVisible, setCardsVisible] = useState([false, false, false, false]);
  const [colsVisible, setColsVisible] = useState([false, false, false]);
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const colsContainerRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setRuleWidth('w-12');
        }
      },
      { threshold: 0.15 }
    );

    const cardsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          [0, 1, 2, 3].forEach((index) => {
            setTimeout(() => {
              setCardsVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 120);
          });
        }
      },
      { threshold: 0.15 }
    );

    const colsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          [0, 1, 2].forEach((index) => {
            setTimeout(() => {
              setColsVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) sectionObserver.observe(sectionRef.current);
    if (cardsContainerRef.current) cardsObserver.observe(cardsContainerRef.current);
    if (colsContainerRef.current) colsObserver.observe(colsContainerRef.current);

    return () => {
      if (sectionRef.current) sectionObserver.disconnect();
      if (cardsContainerRef.current) cardsObserver.disconnect();
      if (colsContainerRef.current) colsObserver.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} id="reality-section" className="w-full bg-[#1A1816] text-white">
      
      {/* PART A: THE REALITY */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Side */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-semibold tracking-[0.15em] text-gold uppercase mb-3">
            THE REALITY
          </span>
          <div className={`h-[2px] bg-gradient-to-r from-gold to-transparent transition-all duration-1000 ${ruleWidth}`} />
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mt-8 mb-8">
            Brilliant Students,<br />
            <span className="font-serif italic text-gold-light font-medium">Missed</span> Opportunities
          </h2>

          <div className="space-y-6 text-dark-50 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            <p>
              Every year, thousands of capable, hardworking students graduate with strong academics 
              and real potential — but miss out on placements not because of what they know, but 
              because of how they present it. Most students have never been taught how to introduce 
              themselves confidently. They've never sat across a hiring manager in a real interview. 
              Nobody showed them how to structure a resume that gets noticed in 6 seconds.
            </p>
            <p className="font-medium text-white">
              The gap isn't talent. It's preparation.
            </p>
            <p className="text-gold-light">
              That's exactly what Ace It Up was built to close.
            </p>
          </div>
        </div>

        {/* Right Side: Challenge Cards */}
        <div ref={cardsContainerRef} className="lg:col-span-5 flex flex-col gap-5">
          {[
            {
              title: "Low Interview Confidence",
              desc: "Students know the answers but freeze under pressure due to lack of real practice"
            },
            {
              title: "Weak Aptitude & Reasoning",
              desc: "Eliminated in Round 1 before even reaching HR, despite strong technical knowledge"
            },
            {
              title: "Poor Communication Skills",
              desc: "Can't articulate thoughts clearly in GDs, presentations, or written communication"
            },
            {
              title: "No Industry Exposure",
              desc: "Never experienced mock placements, real feedback, or corporate environment simulations"
            }
          ].map((card, i) => (
            <div
              key={i}
              className={`gold-shimmer bg-[#2E2A26] border border-white/5 border-l-[3px] border-l-gold/25 p-6 rounded-r-xl rounded-l-sm transition-all duration-500 shadow-xl ${
                cardsVisible[i] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              } hover:border-l-gold hover:translate-x-1 hover:bg-[#3A3530] hover:shadow-[0_8px_30px_rgba(218,181,127,0.06),0_0_15px_rgba(218,181,127,0.05)]`}
            >
              <h3 className="font-serif text-xl font-semibold text-gold-light mb-2 tracking-wide">
                {card.title}
              </h3>
              <p className="text-dark-50 text-sm font-light leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* PART B: OUR SOLUTION */}
      <section className="border-y border-white/5 bg-[#24211E]">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.15em] text-gold uppercase mb-3 block">
              OUR APPROACH
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6">
              End-to-End <span className="font-serif italic text-gold-light font-medium">Placement Readiness</span>
            </h2>
            <p className="text-dark-50 text-lg md:text-xl font-light leading-relaxed">
              We don't just teach — we transform. Every Ace It Up module is built around 
              one goal: making you genuinely ready, not just theoretically prepared.
            </p>
          </div>

          {/* 3-Column Features Grid */}
          <div ref={colsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                ),
                title: "Structured Curriculum",
                desc: "Each module builds on the last — from aptitude foundations to mock interview finals"
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Activity-Based Learning",
                desc: "Roleplays, GD simulations, mock interviews, and peer feedback — not just slides and lectures"
              },
              {
                icon: (
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                ),
                title: "Real Industry Standards",
                desc: "Our sessions mirror actual campus recruitment processes at top companies"
              }
            ].map((col, i) => (
              <div
                key={i}
                className={`gold-shimmer bg-white/[0.04] border border-white/5 rounded-2xl p-10 transition-all duration-700 ${
                  colsVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } hover:bg-white/[0.07] hover:border-gold/25 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(218,181,127,0.05)] group`}
              >
                <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/25 flex items-center justify-center mb-8 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-[#1A1816] group-hover:shadow-[0_0_20px_rgba(218,181,127,0.4)]">
                  {col.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4 text-white">
                  {col.title}
                </h3>
                <p className="text-dark-50 text-sm font-light leading-relaxed">
                  {col.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutSection;
