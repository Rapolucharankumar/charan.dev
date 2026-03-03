import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Capabilities from './components/Capabilities.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import TechStack from './components/TechStack.tsx';
import Metrics from './components/Metrics.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import CursorGlow from './components/CursorGlow.tsx';
import './index.css';

function App() {
    return (
        <>
            <CursorGlow />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Capabilities />
                <Projects />
                <Experience />
                <TechStack />
                <Metrics />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
