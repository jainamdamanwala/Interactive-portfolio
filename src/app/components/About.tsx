import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Code,
      title: 'AI/ML Engineering',
      description: 'Expert in Agentic AI, Multi-Agent Systems, LLM Integration, and Reinforcement Learning',
    },
    {
      icon: Rocket,
      title: 'Cloud & MLOps',
      description: 'Azure ML, AWS, Databricks, MLflow, Docker, Jenkins CI/CD, and automated deployment',
    },
    {
      icon: Users,
      title: 'Full-Stack Development',
      description: 'Python, Java, Spring Boot, React, FastAPI - building scalable microservices',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Applying AI to sustainability, water management, and smart infrastructure',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8" />
          <p className="text-slate-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Innovative and results-driven AI/ML Engineer with strong experience in designing scalable intelligent 
            systems using Python, Java, and cloud-native architectures (AWS, Azure). Adept at building LLM-powered 
            and agentic AI solutions, integrating MLOps pipelines, and deploying high-performance models for 
            real-time decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors duration-300">
                <feature.icon className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-900/30 dark:to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2"
              >
                5+
              </motion.div>
              <p className="text-slate-700 dark:text-gray-300">Years Experience</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2"
              >
                27%
              </motion.div>
              <p className="text-slate-700 dark:text-gray-300">System Improvement</p>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2"
              >
                3
              </motion.div>
              <p className="text-slate-700 dark:text-gray-300">Graduate Degrees</p>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Experience</h3>
          <div className="space-y-6">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Software Development Engineer</h4>
                  <p className="text-purple-600 dark:text-purple-400">Capital One Financial Corporation</p>
                </div>
                <span className="text-slate-600 dark:text-gray-400 mt-2 md:mt-0">Aug 2023 - Present</span>
              </div>
              <p className="text-slate-600 dark:text-gray-400">
                Engineered AI-driven microservices for credit authorization & fraud detection, integrating ML-based 
                decision layers. Developed autonomous rule-learning modules using LangChain + OpenAI API for dynamic 
                transaction monitoring.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Software Developer</h4>
                  <p className="text-purple-600 dark:text-purple-400">Prime Video & Amazon MGM Studios</p>
                </div>
                <span className="text-slate-600 dark:text-gray-400 mt-2 md:mt-0">Sep 2022 - Aug 2023</span>
              </div>
              <p className="text-slate-600 dark:text-gray-400">
                Designed a multi-agent orchestration framework to automate content metadata classification using LLMs. 
                Optimized ML pipelines for media recommendation with TensorFlow and PyTorch.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Software Developer</h4>
                  <p className="text-purple-600 dark:text-purple-400">Exert, India</p>
                </div>
                <span className="text-slate-600 dark:text-gray-400 mt-2 md:mt-0">Jul 2019 - Dec 2020</span>
              </div>
              <p className="text-slate-600 dark:text-gray-400">
                Built data-driven analytics tools for industrial process optimization using Python ML frameworks. 
                Developed RESTful services in Java Spring Boot integrated with Azure IoT and data analytics APIs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}