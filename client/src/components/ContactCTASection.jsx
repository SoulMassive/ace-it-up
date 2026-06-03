import React, { useEffect, useRef, useState } from 'react';

const ContactCTASection = () => {
  const [headingActive, setHeadingActive] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    interest: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  const heroRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHeadingActive(true);
        }
      },
      { threshold: 0.15 }
    );

    const contactObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setInfoVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (contactRef.current) contactObserver.observe(contactRef.current);

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      if (heroRef.current) heroObserver.disconnect();
      if (contactRef.current) contactObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const field = id.replace('form-', '');
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Thank you for your message! Our mentors will reach out to you within 24 hours.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      interest: '',
      message: ''
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const headingWords = [
    { text: "Your", delay: 0 },
    { text: "Placement", delay: 80 },
    { text: "Journey", delay: 160, em: true },
    { text: "Starts", delay: 240 },
    { text: "Here.", delay: 320, em: true }
  ];

  return (
    <>
      {/* PART A: FINAL CTA HERO */}
      <section 
        ref={heroRef} 
        className="relative bg-[#0e0c0a] py-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center border-b border-white/5"
      >
        {/* Ambient Pulsing Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none animate-[slowGlowPulse_8s_ease-in-out_infinite_alternate]" />
        
        {/* Faint Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto space-y-8 z-10">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            READY TO BEGIN
          </span>

          <h2 className="font-serif text-5xl md:text-7xl font-normal leading-tight text-white">
            {headingWords.slice(0, 3).map((w, idx) => (
              <span
                key={idx}
                className={`inline-block mr-4 transition-all duration-700 ${
                  headingActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${w.delay}ms` }}
              >
                {w.em ? <em className="font-serif italic text-gold-light font-medium">{w.text}</em> : w.text}
              </span>
            ))}
            <br />
            {headingWords.slice(3).map((w, idx) => (
              <span
                key={idx}
                className={`inline-block mr-4 transition-all duration-700 ${
                  headingActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${w.delay}ms` }}
              >
                {w.em ? <em className="font-serif italic text-gold-light font-medium">{w.text}</em> : w.text}
              </span>
            ))}
          </h2>

          <p className="text-dark-50 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto font-sans">
            Join hundreds of students who walked into placements prepared, confident, and ready — not hoping to get lucky.
          </p>

          <div className="flex flex-wrap justify-center gap-5 pt-4">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-[#1A1816] font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_8px_30px_rgba(218,181,127,0.35)] hover:-translate-y-0.5"
            >
              Enrol as a Student
            </a>
            <a
              href="#partner"
              className="inline-flex items-center justify-center px-10 py-4 border border-gold text-gold font-semibold text-sm tracking-wider rounded-lg transition-all duration-300 hover:bg-gold/5 hover:-translate-y-0.5"
            >
              Partner as a College
            </a>
          </div>

          <p className="text-dark-100 text-xs font-light">
            Free demo workshops available for colleges. No commitment required.
          </p>
        </div>
      </section>

      {/* PART B: CONTACT SECTION */}
      <section 
        ref={contactRef} 
        id="contact" 
        className="bg-[#1A1816] py-24 px-6 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Details */}
          <div className={`transition-all duration-1000 ${
            infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">
              Let's Talk
            </h2>
            <p className="text-dark-50 text-base md:text-lg font-light leading-relaxed mb-12">
              Whether you're a student looking to get placed or a college looking to 
              improve your batch outcomes — we'd love to hear from you.
            </p>

            <div className="space-y-8 mb-12">
              {[
                {
                  label: "Email",
                  value: "aceitup@gmail.com",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  )
                },
                {
                  label: "Phone",
                  value: "+91 98765 43210",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  )
                },
                {
                  label: "Location",
                  value: "Bengaluru, Karnataka",
                  subvalue: "Serving colleges across South India",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-gold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-dark-100 uppercase tracking-wider block mb-1">
                      {item.label}
                    </span>
                    <span className="text-white text-base font-normal">{item.value}</span>
                    {item.subvalue && <span className="text-dark-50 text-xs block mt-1">{item.subvalue}</span>}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-gold-light text-sm font-medium mb-8">
              Available Monday–Saturday, 9 AM – 7 PM
            </p>

            <div className="flex gap-4">
              {['linkedin', 'instagram', 'whatsapp'].map((s, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-gold hover:border-gold/25 hover:bg-gold hover:text-[#1A1816] transition-all duration-300 hover:-translate-y-0.5"
                >
                  {s === 'linkedin' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                  {s === 'instagram' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>}
                  {s === 'whatsapp' && <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={`bg-[#24211E] border border-white/5 rounded-2xl p-8 md:p-12 transition-all duration-1000 ${
            infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="font-serif text-2xl font-semibold text-white mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div>
                <label className="text-[10px] font-semibold text-dark-50 uppercase tracking-wider block mb-2">Name</label>
                <input
                  id="form-name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors ${
                    errors.name ? 'border-[#df5846]' : 'border-white/5'
                  }`}
                />
              </div>

              <div>
                <label className="text-[10px] font-semibold text-dark-50 uppercase tracking-wider block mb-2">Email</label>
                <input
                  id="form-email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors ${
                    errors.email ? 'border-[#df5846]' : 'border-white/5'
                  }`}
                />
              </div>

              <div>
                <label className="text-[10px] font-semibold text-dark-50 uppercase tracking-wider block mb-2">Phone</label>
                <input
                  id="form-phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors ${
                    errors.phone ? 'border-[#df5846]' : 'border-white/5'
                  }`}
                />
              </div>

              <div>
                <label className="text-[10px] font-semibold text-dark-50 uppercase tracking-wider block mb-2">I am a...</label>
                <select
                  id="form-role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none ${
                    errors.role ? 'border-[#df5846]' : 'border-white/5'
                  }`}
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg fill='%23DAB57F' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: "40px"
                  }}
                >
                  <option value="" disabled>Select your profile</option>
                  <option value="Student">Student</option>
                  <option value="College TPO">College TPO</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-dark-50 uppercase tracking-wider block mb-2">Interested in...</label>
                <select
                  id="form-interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none ${
                    errors.interest ? 'border-[#df5846]' : 'border-white/5'
                  }`}
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg fill='%23DAB57F' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    paddingRight: "40px"
                  }}
                >
                  <option value="" disabled>What are you looking for?</option>
                  <option value="Core Program">Core Program</option>
                  <option value="Premium Program">Premium Program</option>
                  <option value="College Partnership">College Partnership</option>
                  <option value="Free Workshop Demo">Free Workshop Demo</option>
                  <option value="Just Exploring">Just Exploring</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-dark-50 uppercase tracking-wider block mb-2">Message</label>
                <textarea
                  id="form-message"
                  rows="4"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors ${
                    errors.message ? 'border-[#df5846]' : 'border-white/5'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold text-[#1A1816] font-bold text-xs tracking-wider rounded-lg uppercase transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_4px_15px_rgba(218,181,127,0.25)] relative overflow-hidden"
              >
                Send Message
              </button>

              <p className="text-center text-dark-100 text-[10px] font-light mt-4">
                We don't spam. Ever.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* SCROLL TO TOP FLOATER */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-11 h-11 rounded-full bg-[#2E2A26] border border-gold/25 text-gold flex items-center justify-center cursor-pointer z-50 transition-all duration-400 hover:bg-gold hover:text-[#1a1816] hover:border-gold hover:-translate-y-1 shadow-lg ${
          showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
};

export default ContactCTASection;
