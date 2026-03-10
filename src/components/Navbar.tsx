import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            padding: isScrolled ? '1rem 0' : '1.5rem 0',
            transition: 'var(--transition-normal)',
            background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(12px)' : 'none',
            borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    letterSpacing: '-0.5px'
                }}>
                    Charan<span className="text-gradient">.Dev</span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="nav-desktop">
                    <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500 }} className="nav-link">About</a>
                    <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500 }} className="nav-link">Projects</a>
                    <a href="#experience" style={{ fontSize: '0.9rem', fontWeight: 500 }} className="nav-link">Experience</a>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div style={{ display: 'block' }} className="nav-mobile-toggle">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="glass-panel" style={{
                    position: 'absolute',
                    top: '100%',
                    left: '1rem',
                    right: '1rem',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    alignItems: 'center',
                    marginTop: '1rem'
                }}>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                    <a href="#contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Let's Talk</a>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <a href="https://github.com/Rapolucharankumar" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/charan-kumar-rapolu-358a8630b/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                    </div>
                </div>
            )}

            {/* Basic styles injection for media queries */}
            <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--accent-blue); }
      `}</style>
        </nav>
    );
};

export default Navbar;
