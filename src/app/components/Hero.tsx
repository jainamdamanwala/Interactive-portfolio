import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '../assets/hero.png';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-purple-600 dark:text-purple-400 text-lg mb-4">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
                Jainam Damanwala
              </h1>
              <h2 className="text-2xl md:text-4xl text-slate-700 dark:text-gray-300 mb-6">
                AI/ML Engineer & Software Developer
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-lg mb-8 max-w-xl">
                Building scalable intelligent systems with AI/ML, cloud-native architectures, 
                and LLM-powered solutions. Passionate about applying AI to transform infrastructure and environmental systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600/10 rounded-full transition-all duration-300 hover:scale-105"
              >
                View Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/jainam-damanwala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={28} />
              </a>
              <a
                href="mailto:damanwalajainam@gmail.com"
                className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={28} />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <img
                src={heroImage}
                alt="Developer workspace with tech elements"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
}