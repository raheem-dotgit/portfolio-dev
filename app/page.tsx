import Hero from './components/hero';
import Projects from './components/gallery';
import Skills from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import TechIcons from './components/tech-icons';
import Profile from './components/profile';
import Navbar from './components/navbar';

export default function Page() {
  return (
    <main className='min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white'>
      <Navbar />
      <Hero />
      <TechIcons />
      <Profile />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
