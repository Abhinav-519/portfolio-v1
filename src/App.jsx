import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import TechBackground from './components/TechBackground';

export default function App() {
    return (
        <>
            <TechBackground />
            <ParticleBackground />
            <Navbar />
            <main style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
        </>
    );
}
