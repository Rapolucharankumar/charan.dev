import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'One Piece Character Explorer',
        tech: ['Next.js', 'React', 'Tailwind', 'API'],
        problem: 'Anime APIs often have strict rate limits causing poor user experience during high traffic.',
        outcome: 'Implemented dynamic caching and optimized image delivery, bypassing 429 errors entirely.',
        link: 'https://one-piece-nine-tau.vercel.app/',
        github: 'https://github.com/Rapolucharankumar/one-piece-character-explorer'
    },
    {
        title: 'CherryQuest AI',
        tech: ['Flask', 'Python', 'OpenAI', 'SQLite'],
        problem: 'Traditional coding platforms lack personalized, context-aware feedback.',
        outcome: 'Built a gamified AI-driven platform that evaluates Python code and provides targeted hints in real-time.',
        link: 'https://cherryquest-ai-p435.vercel.app/',
        github: 'https://github.com/Rapolucharankumar/CHERRYQUEST-AI'
    },
    {
        title: 'VibeVault',
        tech: ['React', 'CSS Modules', 'Node.js'],
        problem: 'Users struggle to find content perfectly matching their current emotional state.',
        outcome: 'Developed a mood-based recommendation engine with dynamic filtering and modular UI components.',
        link: 'https://vibe-vault-2.onrender.com',
        github: '#'
    },
    {
        title: 'Gym Management System',
        tech: ['Flask', 'SQLite', 'HTML/CSS/JS', 'Bootstrap'],
        problem: 'Local gyms rely on paper records or overly complex enterprise software.',
        outcome: 'Created a streamlined CRUD dashboard with integrated BMI calculators and membership tracking.',
        link: '#',
        github: '#'
    },
    {
        title: 'Weather Web App',
        tech: ['JavaScript', 'REST API', 'CSS Grid'],
        problem: 'Many weather apps are slow and cluttered with unnecessary data.',
        outcome: 'Built a lightning-fast, responsive dashboard pulling real-time data with a minimalist focus.',
        link: '#',
        github: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '8rem 0' }}>
            <div className="container">
                <h2 className="section-title">Selected <span className="text-gradient">Work</span></h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-panel project-card"
                            style={{
                                position: 'relative',
                                padding: '3rem',
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '2rem',
                                borderLeft: `4px solid ${index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-blue)'}`,
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '-50%',
                                right: '-10%',
                                width: '300px',
                                height: '300px',
                                background: index % 2 === 0 ? 'radial-gradient(circle, rgba(112,0,255,0.05) 0%, rgba(0,0,0,0) 70%)' : 'radial-gradient(circle, rgba(0,240,255,0.05) 0%, rgba(0,0,0,0) 70%)',
                                borderRadius: '50%',
                                pointerEvents: 'none'
                            }} />

                            <div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.5px' }}>{project.title}</h3>

                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} style={{
                                            padding: '0.3rem 0.8rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid var(--border-subtle)',
                                            borderRadius: '50px',
                                            fontSize: '0.8rem',
                                            color: 'var(--text-muted)'
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                    <div>
                                        <h4 style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>The Problem</h4>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{project.problem}</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: 'var(--accent-purple)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>The Outcome</h4>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{project.outcome}</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.link} className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                                        View Project <ExternalLink size={18} />
                                    </a>
                                    <a href={project.github} className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', border: 'none', background: 'rgba(255,255,255,0.05)' }}>
                                        <Github size={18} /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .project-card {
           transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .project-card:hover {
           transform: translateY(-5px);
           box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
      `}</style>
        </section>
    );
};

export default Projects;
