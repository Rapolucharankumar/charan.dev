import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '8rem 0', background: 'var(--bg-darker)' }}>
            <div className="container">
                <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-blue))',
                        opacity: 0.3
                    }} />

                    {/* Timeline Item */}
                    <div style={{ position: 'relative', paddingLeft: '60px', marginBottom: '3rem' }}>
                        <div style={{
                            position: 'absolute',
                            left: '11px',
                            top: '5px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'var(--bg-darker)',
                            border: '4px solid var(--accent-purple)',
                            boxShadow: '0 0 10px var(--accent-glow)'
                        }} />

                        <div className="glass-panel" style={{ padding: '2.5rem', transition: 'transform var(--transition-normal)' }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Briefcase size={20} color="var(--accent-blue)" />
                                        Full Stack Web Development Intern
                                    </h3>
                                    <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>CODTECH IT Solutions Pvt. Ltd</div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={16} /> Optional Date Range
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <MapPin size={16} /> Remote / Office
                                    </div>
                                </div>
                            </div>

                            <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li>Built production-ready web applications using modern full-stack technologies.</li>
                                <li>Implemented seamless frontend-to-backend API integrations for dynamic data flow.</li>
                                <li>Utilized Git-based workflows for version control and team collaboration.</li>
                                <li>Delivered highly functional, responsive prototypes aligning with business requirements.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
