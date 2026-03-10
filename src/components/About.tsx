import { Layers, Rocket, Code2 } from 'lucide-react';

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="section-title">
                        Hi, I’m <span className="text-gradient">RAPOLU CHARAN KUMAR</span> — <br />
                        I Build AI-First Products.
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.8'
                    }}>
                        AI & ML undergraduate specializing in building real-world full-stack applications using Flask, REST APIs, and modern frontend frameworks. Strong focus on API integration, optimization, and rapid MVP development.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Card 1 */}
                    <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', transition: 'transform var(--transition-normal)' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{
                            width: '60px', height: '60px',
                            background: 'rgba(112,0,255,0.1)',
                            borderRadius: '16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            <Rocket size={32} color="var(--accent-purple)" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Rapid MVP Delivery</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Turning intelligent ideas into ship-ready applications at startup speeds.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', transition: 'transform var(--transition-normal)' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{
                            width: '60px', height: '60px',
                            background: 'rgba(0,240,255,0.1)',
                            borderRadius: '16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            <Code2 size={32} color="var(--accent-blue)" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Clean Architecture</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Scalable full-stack codebases built to industry standards.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', transition: 'transform var(--transition-normal)' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{
                            width: '60px', height: '60px',
                            background: 'rgba(112,0,255,0.1)',
                            borderRadius: '16px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            <Layers size={32} color="var(--accent-purple)" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>AI Integration</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Embedding LLMs and ML pipelines directly into web interfaces.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
