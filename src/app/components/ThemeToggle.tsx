import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-slate-800/50 dark:bg-slate-800/50" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon size={20} className="text-purple-400" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : -180,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun size={20} className="text-amber-500" />
      </motion.div>
    </motion.button>
  );
}
