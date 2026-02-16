import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'PyTorch', level: 92 },
        { name: 'TensorFlow', level: 90 },
        { name: 'LangChain', level: 88 },
        { name: 'Reinforcement Learning', level: 85 },
        { name: 'RAG Pipelines', level: 87 },
      ],
    },
    {
      title: 'Programming & Backend',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java 17', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'SQL', level: 88 },
        { name: 'C++', level: 80 },
      ],
    },
    {
      title: 'Cloud & MLOps',
      skills: [
        { name: 'Azure ML', level: 90 },
        { name: 'AWS CDK', level: 87 },
        { name: 'Docker', level: 92 },
        { name: 'Databricks', level: 88 },
        { name: 'Jenkins CI/CD', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8" />
          <p className="text-slate-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Technologies and tools I use to build scalable AI/ML solutions. Specialized in Agentic AI, Multi-Agent Systems, and cloud-native architectures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-purple-600 dark:text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-900/30 dark:to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Python', 'Java', 'LangChain', 'AutoGen', 'OpenAI API', 'PyTorch',
                'TensorFlow', 'Azure ML', 'AWS', 'Databricks', 'MLflow', 'Docker',
                'Jenkins', 'Spring Boot', 'React', 'FastAPI', 'Terraform', 'Hugging Face'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications & Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">M.S. - Artificial Intelligence</h4>
                <p className="text-slate-700 dark:text-gray-300">University of the Cumberlands</p>
                <p className="text-sm text-slate-600 dark:text-gray-400">2025 - 2026 (In Progress)</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">M.S. - Computer Science</h4>
                <p className="text-slate-700 dark:text-gray-300">Stevens Institute of Technology</p>
                <p className="text-sm text-slate-600 dark:text-gray-400">2022</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400">B.E. - Computer Science</h4>
                <p className="text-slate-700 dark:text-gray-300">Silver Oak College of Engineering</p>
                <p className="text-sm text-slate-600 dark:text-gray-400">2020</p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">AWS Certified Solutions Architect</h4>
                  <p className="text-slate-600 dark:text-gray-400">Associate Level</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}