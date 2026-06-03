import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0c0a] border-t border-white/5 text-dark-50 pt-16 pb-8 relative">
      {/* Gold gradient accent line on top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight font-serif block">
              ACE <span className="text-gold italic font-medium">IT</span> UP
            </Link>
            <span className="text-xs font-semibold tracking-wider text-gold-light uppercase block">
              Placement Readiness & Employability Training
            </span>
            <p className="text-sm font-light leading-relaxed">
              Transforming students into confident, industry-ready professionals.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-gold hover:border-gold/25 hover:bg-gold hover:text-[#1A1816] transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-gold hover:border-gold/25 hover:bg-gold hover:text-[#1A1816] transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-gold hover:border-gold/25 hover:bg-gold hover:text-[#1A1816] transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-6">Programs</h3>
            <ul className="space-y-3.5 text-sm font-light">
              <li><Link to="/services" className="hover:text-gold hover:pl-1 transition-all">Aptitude Training</Link></li>
              <li><Link to="/services" className="hover:text-gold hover:pl-1 transition-all">Resume Building</Link></li>
              <li><Link to="/services" className="hover:text-gold hover:pl-1 transition-all">Soft Skills & Communication</Link></li>
              <li><Link to="/services" className="hover:text-gold hover:pl-1 transition-all">Interview Preparation</Link></li>
              <li><Link to="/services" className="hover:text-gold hover:pl-1 transition-all">Mock Interview (Premium)</Link></li>
              <li><Link to="/services" className="hover:text-gold hover:pl-1 transition-all">Free Workshop Demo</Link></li>
            </ul>
          </div>

          {/* Column 3: For Colleges */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-6">For Colleges</h3>
            <ul className="space-y-3.5 text-sm font-light">
              <li><a href="#partner" className="hover:text-gold hover:pl-1 transition-all">College Partnerships</a></li>
              <li><a href="#partner" className="hover:text-gold hover:pl-1 transition-all">Campus Workshops</a></li>
              <li><a href="#partner" className="hover:text-gold hover:pl-1 transition-all">Semester Programs</a></li>
              <li><a href="#partner" className="hover:text-gold hover:pl-1 transition-all">Placement Bootcamps</a></li>
              <li><a href="#partner" className="hover:text-gold hover:pl-1 transition-all">Request a Demo</a></li>
              <li><a href="#partner" className="hover:text-gold hover:pl-1 transition-all">MoU Information</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3.5 text-sm font-light">
              <li><a href="#reality-section" className="hover:text-gold hover:pl-1 transition-all">About Ace It Up</a></li>
              <li><a href="#journey-section" className="hover:text-gold hover:pl-1 transition-all">How It Works</a></li>
              <li><a href="#outcomes-section" className="hover:text-gold hover:pl-1 transition-all">Testimonials</a></li>
              <li><a href="#pricing-section" className="hover:text-gold hover:pl-1 transition-all">Pricing</a></li>
              <li><Link to="/contact" className="hover:text-gold hover:pl-1 transition-all">Contact Us</Link></li>
              <li><a href="#enroll" className="hover:text-gold hover:pl-1 transition-all">Enrol Now</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-dark-100 gap-4">
          <p>&copy; {currentYear} Ace It Up. All rights reserved.</p>
          <p>Made with purpose in Bengaluru, India.</p>
          <div className="flex space-x-6 font-light">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
