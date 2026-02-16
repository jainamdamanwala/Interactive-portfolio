import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'damanwalajainam@gmail.com',
      href: 'mailto:damanwalajainam@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (908) 342-4987',
      href: 'tel:+19083424987',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Texas, USA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8" />
          <p className="text-slate-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-gray-400 text-sm mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 dark:text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-900/30 dark:to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Let's Work Together</h3>
              <p className="text-slate-700 dark:text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-green-400"
                      >
                        ✓ Message Sent!
                      </motion.div>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center text-slate-600 dark:text-gray-400"
        >
          <p>© 2026 Jainam Damanwala. Built with React, Motion, & Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  );
}