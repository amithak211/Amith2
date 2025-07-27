import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa';
export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const socialLinks = [
    { icon: <FaGithub className="w-6 h-6" />, url: "https://github.com/amithak211" },
    { icon: <FaLinkedin className="w-6 h-6" />, url: "https://linkedin.com/in/amith" },
    { icon: <FaInstagram className="w-6 h-6" />, url: "https://instagram.com/amith" },
    { icon: <FaFacebook className="w-6 h-6" />, url: "https://facebook.com/amith" },
    { icon: <FaTwitter className="w-6 h-6" />, url: "https://twitter.com/amith" },
    { icon: <FaEnvelope className="w-6 h-6" />, url: "mailto:amith@example.com" },
  ];

  return (
    <section id="contact" className="py-20 px-6 backdrop-blur-md  dark:bg-black-900/40 transition-colors duration-300  text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-400">Contact Amith</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Have a project or just want to say hi? Let’s chat!
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#0e0e1a] rounded-full text-blue-400 shadow-[0_0_15px_#00f0ff] transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaEnvelope className="text-blue-400" />
                amith@example.com
              </p>
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaPhone className="text-blue-400" />
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-gray-600">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8 text-white"
              >
                <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-2xl font-bold">Thanks for reaching out!</h3>
                <p className="text-gray-300">I'll reply as soon as possible.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="mt-4 text-blue-400 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-white">
                <div>
                  <label className="block mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-lg 
                               text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-lg 
                               text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows="5"
                    className="w-full p-3 bg-transparent border border-gray-600 rounded-lg 
                               text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg text-white font-semibold ${
                    loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
