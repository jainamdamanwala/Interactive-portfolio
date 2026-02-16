import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Contact } from './Contact';

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
