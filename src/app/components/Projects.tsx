import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Agentic AI for Water Systems Optimization',
      description: 'Multi-agent reinforcement learning model for adaptive water flow management using LLM reasoning and agent collaboration. Optimized distribution efficiency by 19% in simulations.',
      image: 'https://images.unsplash.com/photo-1758826898770-c76ce24b4eff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMG1hbmFnZW1lbnQlMjBpbmZyYXN0cnVjdHVyZSUyMHN5c3RlbXxlbnwxfHx8fDE3NzEyMTgxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Reinforcement Learning', 'LLM', 'Multi-Agent'],
      github: 'https://github.com',
      live: '#',
    },
    {
      title: 'Autonomous LLM-Based Knowledge Assistant',
      description: 'AI agentic system using LangChain + AutoGen for multi-agent reasoning, RAG-based retrieval, and action planning. Deployed on Azure ML using Databricks.',
      image: 'https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzEyMTgxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['LangChain', 'AutoGen', 'Azure ML', 'Databricks'],
      github: 'https://github.com',
      live: '#',
    },
    {
      title: 'Smart Infrastructure Forecasting',
      description: 'Predictive models for infrastructure demand forecasting using TensorFlow. Achieved 94% accuracy in pilot environments for smart city applications.',
      image: 'https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcxMjE4MTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['TensorFlow', 'Python', 'Forecasting', 'Smart Cities'],
      github: 'https://github.com',
      live: '#',
    },
    {
      title: 'AI-Driven Credit Authorization System',
      description: 'Engineered ML-based decision layers for credit authorization and fraud detection at Capital One. Improved system adaptability by 27% with autonomous rule-learning.',
      image: 'https://images.unsplash.com/photo-1765648684555-de2d0f6af467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc3MTE2NTkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['LangChain', 'OpenAI API', 'MLOps', 'AWS'],
      github: 'https://github.com',
      live: '#',
    },
    {
      title: 'Multi-Agent Content Classification',
      description: 'Designed orchestration framework for Prime Video to automate metadata classification using LLMs and agentic planning models with TensorFlow and PyTorch.',
      image: 'https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHByb2plY3R8ZW58MXx8fHwxNzcxMTg3MjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['LLM', 'TensorFlow', 'PyTorch', 'Databricks'],
      github: 'https://github.com',
      live: '#',
    },
    {
      title: 'Industrial Process Optimization',
      description: 'Built data-driven analytics tools and autonomous agent-based alert systems for production monitoring at Exert using Python ML frameworks.',
      image: 'https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBjb2RlfGVufDF8fHx8MTc3MTIxMDU2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Spring Boot', 'Azure IoT', 'Analytics'],
      github: 'https://github.com',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8" />
          <p className="text-slate-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end justify-center pb-4 gap-4"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900/80 rounded-full hover:bg-slate-900 transition-colors duration-300"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}