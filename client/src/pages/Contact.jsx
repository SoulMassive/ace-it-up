import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import axios from 'axios';
import { contactSchema } from '../utils/validators';
import { sanitizeObject } from '../utils/sanitize';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const sanitizedData = sanitizeObject(data);
      const response = await axios.post('/api/contact', sanitizedData);

      if (response.data.success) {
        setSuccessMessage(response.data.message || 'Form submitted successfully!');
        reset();
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      const errorMsg =
        err.response?.data?.error ||
        err.response?.data?.errors?.[0]?.msg ||
        'An error occurred. Please try again later.';
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            GET IN TOUCH
          </span>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent w-12" />
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight font-serif mt-4">
            Connect With <span className="font-serif italic text-gold-light font-medium">Our Mentors</span>
          </h1>
          <p className="text-base sm:text-lg text-dark-50 font-light leading-relaxed">
            Whether you are a student looking to get placed or a college looking to improve your batch outcomes — we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#24211E] border border-white/5 p-8 rounded-xl space-y-6">
              <h2 className="text-2xl font-serif font-semibold text-white">Let's Talk</h2>
              
              <div className="space-y-6 text-dark-50">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-gold flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Bengaluru, Karnataka</p>
                    <p className="text-sm font-light mt-1">Serving colleges across South India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-gold flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-sm font-light mt-1">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center text-gold flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-sm font-light mt-1">aceitup@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#24211E] border border-white/5 p-8 rounded-xl space-y-4">
              <h3 className="text-base font-semibold text-white">Available Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-dark-50 font-light">
                <div>Monday – Saturday</div>
                <div className="text-right">9:00 AM – 7:00 PM</div>
                <div>Sunday</div>
                <div className="text-right text-gold font-medium">Closed</div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#24211E] border border-white/5 p-8 rounded-xl space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-white">Send Us a Message</h2>
                <p className="text-xs text-dark-50 mt-1">
                  Fill out the secure form below. All inputs are sanitized.
                </p>
              </div>

              {successMessage && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-sm">
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-dark-50 uppercase tracking-wider mb-2">
                    Full Name <span className="text-[#df5846]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    placeholder="John Doe"
                    className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors ${
                      errors.name ? 'border-[#df5846]' : 'border-white/5'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[#df5846] text-xs mt-1.5">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-dark-50 uppercase tracking-wider mb-2">
                    Email Address <span className="text-[#df5846]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    placeholder="john@example.com"
                    className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors ${
                      errors.email ? 'border-[#df5846]' : 'border-white/5'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[#df5846] text-xs mt-1.5">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-dark-50 uppercase tracking-wider mb-2">
                    Phone Number <span className="text-xs text-dark-100">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors ${
                      errors.phone ? 'border-[#df5846]' : 'border-white/5'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[#df5846] text-xs mt-1.5">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-dark-50 uppercase tracking-wider mb-2">
                    Message <span className="text-[#df5846]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    placeholder="How can we help you?"
                    className={`w-full bg-white/[0.03] border rounded-lg p-3.5 text-white text-sm focus:border-gold focus:ring-1 focus:ring-gold transition-colors ${
                      errors.message ? 'border-[#df5846]' : 'border-white/5'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[#df5846] text-xs mt-1.5">{errors.message.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gold text-[#1A1816] font-bold text-xs tracking-wider rounded-lg uppercase transition-all duration-300 hover:bg-gold-dark hover:shadow-[0_4px_15px_rgba(218,181,127,0.25)] flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[#1A1816]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Submit Request</span>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-center text-dark-100 font-light">
                  Anti-abuse active. Up to 5 submissions per hour allowed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
