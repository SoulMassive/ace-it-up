import React, { useEffect, useRef, useState } from 'react';

const OutcomesSection = () => {
  const [ruleWidth, setRuleWidth] = useState('w-0');
  const [activeSlide, setActiveSlide] = useState(0);
  const [cardsVisible, setCardsVisible] = useState([false, false, false, false, false, false]);
  const [comparisonVisible, setComparisonVisible] = useState(false);

  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const comparisonRef = useRef(null);

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

    const cardsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          [0, 1, 2, 3, 4, 5].forEach((index) => {
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
      { threshold: 0.1 }
    );

    const comparisonObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setComparisonVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);
    if (comparisonRef.current) comparisonObserver.observe(comparisonRef.current);

    return () => {
      if (headerRef.current) headerObserver.disconnect();
      if (cardsRef.current) cardsObserver.disconnect();
      if (comparisonRef.current) comparisonObserver.disconnect();
    };
  }, []);

  const testimonials = [
    {
      quote: "Before Ace It Up, I froze every time someone asked me to 'tell me about yourself.' After the program, I walked into three interviews in one week. Got offers from two. The mock interviews made all the difference.",
      name: "Priya S.",
      role: "Final Year, Computer Science — Placed at TCS",
      stars: 5,
      partner: false
    },
    {
      quote: "My resume was a disaster — I listed everything I'd ever done in no particular order. The Resume Building module helped me cut it down and focus. The aptitude sessions helped me stop guessing and start solving.",
      name: "Rahul M.",
      role: "B.Tech Graduate — Placed at Wipro",
      stars: 5,
      partner: false
    },
    {
      quote: "The GD training alone was worth it. I used to stay quiet in group discussions because I was scared of saying something wrong. Now I know how to initiate, how to respond, and how to conclude. I actually led a GD in my final placement round.",
      name: "Divya K.",
      role: "MBA Student — Placed at HDFC Bank",
      stars: 5,
      partner: false
    },
    {
      quote: "The STAR method changed how I answer every question. I have 4 stories ready for any behavioral question they throw at me. I was rejected three times before Ace It Up. The fourth interview was an offer.",
      name: "Arjun P.",
      role: "B.Com Graduate — Placed at Deloitte",
      stars: 5,
      partner: false
    },
    {
      quote: "We partnered with Ace It Up for our 2024 batch. The difference in student confidence and communication was visible within the first month. Our placement percentage improved and — more importantly — students were prepared, not just hopeful.",
      name: "Prof. R. Sharma",
      role: "Training & Placement Officer — Engineering College, Hyderabad",
      stars: 5,
      partner: true
    },
    {
      quote: "The free demo workshop they conducted convinced us immediately. The session on interview preparation had students who'd never spoken in a group before volunteering to present. That's the kind of impact that's hard to manufacture.",
      name: "Dr. L. Naidu",
      role: "Dean of Placements — Degree College, Bengaluru",
      stars: 5,
      partner: true
    }
  ];

  return (
    <section id="outcomes-section" className="bg-[#2E2A26] py-24 text-white border-t border-white/5">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-semibold tracking-[0.15em] text-gold uppercase mb-3">
            OUTCOMES
          </span>
          <div className={`h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-1000 ${ruleWidth}`} />
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mt-8 mb-6">
            What Happens <span className="font-serif italic text-gold-light font-normal">After</span> Ace It Up
          </h2>
          <p className="text-dark-50 text-base md:text-lg font-light leading-relaxed">
            Numbers tell part of the story. The students tell the rest.
          </p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        
        {/* Carousel container for mobile, standard grids on tablet/desktop */}
        <div ref={cardsRef} className="overflow-hidden relative w-full">
          <div
            className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full overflow-visible md:transform-none transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeSlide * 100}%)`,
              flexWrap: 'nowrap',
              width: '100%'
            }}
          >
            {testimonials.map((test, i) => {
              return (
                <div
                  key={i}
                  className={`w-full md:w-auto flex-shrink-0 md:flex-shrink md:flex-grow transition-all duration-700 ${
                    cardsVisible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="h-full bg-[#24211E] border border-white/5 hover:border-gold/25 hover:-translate-y-1 rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-500 shadow-xl mx-2 md:mx-0 min-h-[300px]">
                    
                    {test.partner && (
                      <span className="absolute top-6 right-6 bg-gold/15 border border-gold/25 text-gold-light text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        COLLEGE PARTNER
                      </span>
                    )}

                    <span className="font-serif text-7xl font-bold text-gold opacity-10 absolute top-3 left-6 select-none">“</span>

                    <p className="font-serif italic text-dark-50 text-sm md:text-base leading-relaxed mb-8 relative z-10 pt-4">
                      {test.quote}
                    </p>

                    <div className="relative z-10 mt-auto">
                      <h4 className="font-sans text-sm md:text-base font-semibold text-white mb-1">
                        {test.name}
                      </h4>
                      <p className="text-gold text-xs font-light mb-3">
                        {test.role}
                      </p>
                      <div className="text-gold text-xs tracking-wider">
                        {"★".repeat(test.stars)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel indicator dots (mobile only) */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === idx ? 'w-6 bg-gold' : 'w-2 bg-[#4A4440]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* BEFORE / AFTER COMPARISON STRIP */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={comparisonRef}
          className="bg-[#24211E] border border-white/5 rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-center mb-12">
            The Transformation Is Real
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative">
            {/* Desktop Vertical divider */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 hidden md:block" />

            {/* Before Column */}
            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-sm tracking-wider uppercase text-[#df5846]">
                Before Ace It Up
              </h4>
              <ul className="space-y-4">
                {[
                  'Freezes during "Tell me about yourself"',
                  'Eliminated in aptitude rounds',
                  'Unfocused, cluttered resume'
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-sm md:text-base text-dark-50 flex items-start transition-all duration-700 ${
                      comparisonVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <span className="text-[#df5846] mr-4 font-bold text-lg leading-none">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Column */}
            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-sm tracking-wider uppercase text-gold">
                After Ace It Up
              </h4>
              <ul className="space-y-4">
                {[
                  'Delivers a confident, compelling 90-second story',
                  'Clears Round 1 with pattern recognition skills',
                  'Clean, specific resume that gets callbacks'
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className={`text-sm md:text-base text-white flex items-start transition-all duration-700 ${
                      comparisonVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <span className="text-[#55c57a] mr-4 font-bold text-lg leading-none">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default OutcomesSection;
