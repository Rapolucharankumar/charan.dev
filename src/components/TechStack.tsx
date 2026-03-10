
const technologies = [
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Flask', icon: 'devicon-flask-original' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'Tailwind', icon: 'devicon-tailwindcss-original' },
    { name: 'SQL', icon: 'devicon-mysql-original' },
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
    { name: 'Docker', icon: 'devicon-docker-plain' },
    { name: 'Vercel', icon: 'devicon-vercel-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'C++', icon: 'devicon-cplusplus-plain' }
];

const TechStack = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg-dark)', overflow: 'hidden', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
            <div className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                    Technologies & Tools
                </h3>
                <div style={{ height: '2px', width: '50px', background: 'var(--accent-blue)', margin: '0 auto' }} />
            </div>

            <div className="marquee-container" style={{
                display: 'flex',
                width: 'max-content',
                animation: 'scroll 30s linear infinite'
            }}>
                {[...Array(3)].map((_, i) => (
                    <div key={i} style={{ display: 'flex', gap: '4rem', paddingRight: '4rem', alignItems: 'center' }}>
                        {technologies.map((tech, index) => (
                            <div
                                key={`${i}-${index}`}
                                className="tech-item"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    position: 'relative'
                                }}
                            >
                                <i className={`${tech.icon} colored`} style={{
                                    fontSize: '3.5rem',
                                    filter: 'grayscale(1) brightness(0.8)',
                                    transition: 'all 0.3s ease'
                                }}></i>
                                <span className="tech-name" style={{
                                    position: 'absolute',
                                    bottom: '-25px',
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-blue)',
                                    opacity: 0,
                                    transition: 'all 0.3s ease',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px'
                                }}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <style>{`
        .marquee-container:hover {
          animation-play-state: paused;
        }
        .tech-item:hover i {
          filter: grayscale(0) brightness(1) !important;
          transform: scale(1.1);
        }
        .tech-item:hover .tech-name {
          opacity: 1;
          bottom: -20px;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33%)); }
        }
      `}</style>
        </section>
    );
};

export default TechStack;
