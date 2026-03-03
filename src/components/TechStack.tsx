
const technologies = [
    'Python', 'Flask', 'Next.js', 'React', 'JavaScript', 'TypeScript', 'Tailwind',
    'SQL', 'SQLite', 'Git', 'AWS', 'Power BI', 'Excel', 'Vercel'
];

const TechStack = () => {
    return (
        <section style={{ padding: '4rem 0', background: 'var(--bg-dark)', overflow: 'hidden', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
            <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Technologies & Tools
                </h3>
            </div>

            <div className="marquee-container" style={{
                display: 'flex',
                width: 'max-content',
                animation: 'scroll 40s linear infinite'
            }}>
                {/* Render the list three times for smooth infinite scroll */}
                {[...Array(3)].map((_, i) => (
                    <div key={i} style={{ display: 'flex', gap: '3rem', paddingRight: '3rem' }}>
                        {technologies.map((tech, index) => (
                            <div
                                key={`${i}-${index}`}
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-subtle)',
                                    borderRadius: '50px',
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 600,
                                    fontSize: '1.25rem',
                                    color: 'white',
                                    whiteSpace: 'nowrap',
                                    backdropFilter: 'blur(12px)',
                                    transition: 'color var(--transition-fast)',
                                    cursor: 'default'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--accent-blue)';
                                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <style>{`
        .marquee-container:hover {
          animation-play-state: paused;
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
