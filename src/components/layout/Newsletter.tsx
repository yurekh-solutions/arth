"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h3 className="font-heading text-xl font-semibold mb-2" style={{ color: '#ffffff' }}>
          Stay Updated
        </h3>
        <p className="text-sm max-w-md" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Get the latest updates on our projects, industry news, and exclusive investment opportunities.
        </p>
      </div>

      {submitted ? (
        <div className="flex items-center gap-2 text-green-400">
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-stretch w-full md:w-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            suppressHydrationWarning
            className="flex-1 md:w-72 px-4 py-3 text-sm text-white placeholder-white/50 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-white/40 transition-colors"
          />
          <button
            type="submit"
            suppressHydrationWarning
            className="px-6 py-3 text-sm font-semibold text-white rounded-r-lg inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all hover:opacity-90"
            style={{ background: '#c6873b' }}
          >
            Subscribe
            <Send className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
