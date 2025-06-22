'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const ContactFormSection: React.FC = () => {
  const initial = {
    name: '',
    contact: '',
    email: '',
    purpose: '',
    business: '',
    message: '',
  };
  const [formData, setFormData] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err: Record<string, string> = {};

    if (!/^[a-z\s]+$/i.test(formData.name.trim())) {
      err.name = 'Only letters & spaces allowed';
    }

    if (!/^\d{10}$/.test(formData.contact)) {
      err.contact = 'Phone number must be exactly 10 digits';
    }

    if (!/^[\w.%+-]+@[\w.-]+\.[a-z]{2,}$/i.test(formData.email)) {
      err.email = 'Enter a valid e-mail address';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initial);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase
      = 'bg-[#1b1b1b] border border-[#3b2d2d] rounded-lg ' + 'px-4 py-3 text-white placeholder-gray-500 ' + 'focus:outline-none focus:ring-2 focus:ring-gold-500 ' + 'focus:border-gold-500 transition';

  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16
                     bg-clip-text text-transparent bg-gradient-to-r
                     from-gold-500 via-gold-400 to-gold-300
                     drop-shadow-[0_3px_15px_rgba(255,115,0,0.65)] py-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let’s Ride Together
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8
                     bg-gradient-to-br from-[#0d0d0d] via-[#141414] to-[#2a1f1f]
                     p-10 rounded-3xl shadow-[rgba(255,115,0,0.25)_0px_0px_20px]
                     backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* ---------------------- NAME (required) */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold text-gold-400">
              Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              pattern="^[A-Za-z\s]+$"
              title="Name should contain only letters and spaces"
              placeholder="Your full name"
              required
              className={inputBase}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* ---------------------- PHONE (required) */}
          <div className="flex flex-col">
            <label
              htmlFor="contact"
              className="mb-2 font-semibold text-gold-400"
            >
              Phone&nbsp;Number
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              id="contact"
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              pattern="^\d{10}$"
              title="Enter a 10-digit phone number"
              maxLength={10}
              placeholder="10-digit phone"
              required
              className={inputBase}
            />
            {errors.contact && (
              <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
            )}
          </div>

          {/* ---------------------- EMAIL (required) */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold text-gold-400">
              Email
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              required
              className={inputBase}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* ---------------------- PURPOSE (optional) */}
          <div className="flex flex-col">
            <label
              htmlFor="purpose"
              className="mb-2 font-semibold text-gold-400"
            >
              Query&nbsp;/&nbsp;Purpose
            </label>
            <input
              id="purpose"
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Tell us why you’re here"
              className={inputBase}
            />
          </div>

          {/* ---------------------- BUSINESS (optional) */}
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="business"
              className="mb-2 font-semibold text-gold-400"
            >
              Business&nbsp;Name
            </label>
            <input
              id="business"
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Your business (if any)"
              className={inputBase}
            />
          </div>

          {/* ---------------------- MESSAGE (optional) */}
          <div className="flex flex-col md:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 font-semibold text-gold-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Drop us a line…"
              className={`${inputBase} h-32 resize-none`}
            />
          </div>
          {' '}
          {/* ---------------------- SUBMIT BUTTON */}
          <div className="md:col-span-2 flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="group relative overflow-hidden px-10 py-3 rounded-full
                         font-semibold text-black hover:bg-gold disabled:opacity-50"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r
                           from-gold-500 via-gold-600 to-gold-400
                           transition-transform duration-300
                           group-hover:translate-x-full"
              />
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? 'Sending...' : 'Send'}
                {!isSubmitting && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m22 2-7.3 20-4.2-9.3L2 9l20-7z"
                    />
                  </svg>
                )}
              </span>
            </motion.button>

            {/* Form submission status messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg text-center w-full"
              >
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-lg text-center w-full"
              >
                Something went wrong. Please try again or contact us directly.
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};
