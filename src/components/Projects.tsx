import { ExternalLink, Github, Code2, Layers, Cpu, Globe } from 'lucide-react';

const featuredProjects = [
    {
        title: 'One Piece Character Explorer',
        tech: ['Next.js', 'React', 'Tailwind', 'API'],
        problem: 'Anime APIs often have strict rate limits causing poor user experience during high traffic.',
        outcome: 'Implemented dynamic caching and optimized image delivery, bypassing 429 errors entirely.',
        link: 'https://one-piece-nine-tau.vercel.app/',
        github: 'https://github.com/Rapolucharankumar/ONE-PIECE'
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
        github: 'https://github.com/Rapolucharankumar/Vibe_Vault'
    },
    {
        title: 'Cherry CRM',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
        problem: 'Businesses lack a unified platform to manage leads and sales pipelines efficiently.',
        outcome: 'Built a MERN-stack CRM with Kanban boards, real-time analytics, and role-based access control.',
        link: 'https://crm-dusky-pi.vercel.app/',
        github: 'https://github.com/Rapolucharankumar/CRM'
    },
    {
        title: 'JobTrack AI',
        tech: ['React', 'TypeScript', 'Lucide-React', 'CSS'],
        problem: 'Job seekers need a cleaner, more tactile way to track applications beyond spreadsheets.',
        outcome: 'Implemented a high-fidelity Claymorphism design system for a tactile job tracking experience.',
        link: 'https://github.com/Rapolucharankumar/JobTrack-AI',
        github: 'https://github.com/Rapolucharankumar/JobTrack-AI'
    }
];

const otherProjects = [
    {
        title: 'Enterprise Platform Setup',
        description: 'Industry-standard full-stack enterprise platform architecture.',
        github: 'https://github.com/Rapolucharankumar/Industry-Ready-Full-Stack-Enterprise-Platform',
        icon: <Layers size={20} />
    },
    {
        title: 'Real-time Analytics',
        description: 'Advanced analytics dashboard with Spring WebFlux and WebSockets.',
        github: 'https://github.com/Rapolucharankumar/Advanced-Real-time-Analytics-Dashboard',
        icon: <Cpu size={20} />
    },
    {
        title: 'ERP System',
        description: 'Modular Enterprise Resource Planning system with core business modules.',
        github: 'https://github.com/Rapolucharankumar/-Enterprise-Resource-Planning-ERP-System-Development',
        icon: <Globe size={20} />
    },
    {
        title: 'Social Media Platform',
        description: 'Microservices-based social platform with API Gateway and Service Discovery.',
        github: 'https://github.com/Rapolucharankumar/Microservices-based-Social-Media-Platform',
        icon: <Github size={20} />
    },
    {
        title: 'E-commerce Backend',
        description: 'Complete backend system with Spring Boot, JPA, and Order Processing.',
        github: 'https://github.com/Rapolucharankumar/Complete-E-commerce-Backend-System',
        icon: <Code2 size={20} />
    },
    {
        title: 'Cogniq AI Clone',
        description: 'AI platform clone focusing on modern UI/UX patterns.',
        github: 'https://github.com/Rapolucharankumar/cogniq-ai-clone',
        icon: <Cpu size={20} />
    },
    {
        title: 'K-Pop Universe',
        description: 'Themed web application for K-Pop enthusiasts.',
        github: 'https://github.com/Rapolucharankumar/K-Pop-Universe',
        icon: <Layers size={20} />
    },
    {
        title: 'AI Interview Coach',
        description: 'Interactive AI coach for technical interview preparation.',
        github: 'https://github.com/Rapolucharankumar/CHERRY-AI-INTERVIEW-COACH',
        icon: <Cpu size={20} />
    },
    {
        title: 'SecurityLearn',
        description: 'Comprehensive security education and training platform.',
        github: 'https://github.com/Rapolucharankumar/SecurityLearn---Comprehensive-Security-Education-Platform',
        icon: <Globe size={20} />
    },
    {
        title: 'Xnexa',
        description: 'Next-generation web application framework experimentation.',
        github: 'https://github.com/Rapolucharankumar/Xnexa',
        icon: <Code2 size={20} />
    },
    {
        title: 'Dragon OS',
        description: 'Lightweight operating system concept and dashboard.',
        github: 'https://github.com/Rapolucharankumar/Dragon-os',
        icon: <Cpu size={20} />
    },
    {
        title: 'Time Track Extension',
        description: 'Chrome extension for productivity and time management.',
        github: 'https://github.com/Rapolucharankumar/-A-CHROME-EXTENSION-THAT-TRACKS-THE-TIME-SPENT',
        icon: <Layers size={20} />
    },
    {
        title: 'Real-time Chat',
        description: 'Messaging application with Socket.io and Node.js.',
        github: 'https://github.com/Rapolucharankumar/REAL-TIME-CHAT-APPLICATION',
        icon: <Github size={20} />
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '8rem 0' }}>
            <div className="container">
                <h2 className="section-title">Featured <span className="text-gradient">Work</span></h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '8rem' }}>
                    {featuredProjects.map((project, index) => (
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
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                                        View Project <ExternalLink size={18} />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', border: 'none', background: 'rgba(255,255,255,0.05)' }}>
                                        <Github size={18} /> Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>Other Notable <span style={{ color: 'var(--text-main)' }}>Experiments</span></h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {otherProjects.map((project, index) => (
                            <a
                                key={index}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-panel other-project-card"
                                style={{
                                    padding: '1.5rem',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid var(--border-subtle)'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--accent-purple)' }}>{project.icon}</div>
                                    <Github size={18} style={{ color: 'var(--text-muted)' }} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{project.title}</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{project.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
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
        .other-project-card:hover {
            transform: translateY(-3px);
            border-color: var(--accent-purple);
            background: rgba(255,255,255,0.05);
        }
      `}</style>
        </section>
    );
};

export default Projects;
