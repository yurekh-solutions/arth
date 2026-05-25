"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/917285851515?text=${message}`, '_blank');
    
    setSubmitted(true);
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 text-center"
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
            <h3 className="text-2xl font-heading font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>
              Message Sent!
            </h3>
            <p style={{ color: 'var(--color-muted-foreground)' }}>
              We&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="neumorphic-input w-full px-4 py-3 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="neumorphic-input w-full px-4 py-3 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="neumorphic-input w-full px-4 py-3 outline-none"
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="neumorphic-input w-full px-4 py-3 outline-none"
              >
                <option value="" disabled>Select Subject</option>
                <option value="general">General Inquiry</option>
                <option value="project">Project Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="careers">Careers</option>
                <option value="other">Other</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="neumorphic-input w-full px-4 py-3 outline-none resize-none"
            />

            <button
              type="submit"
              className="solid-btn w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
