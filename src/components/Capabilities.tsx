import React from 'react';
import { Cpu, Zap, LayoutTemplate, Gauge, Network, Smartphone } from 'lucide-react';

const Capabilities = () => {
    const features = [
        {
            icon: <Cpu size={24} color="var(--accent-purple)" />,
            title: "AI & ML Integration",
            desc: "Embedding advanced language models and ML pipelines into modern applications."
        },
        {
            icon: <Zap size={24} color="var(--accent-blue)" />,
            title: "Rapid MVP Development",
            desc: "Transforming concepts into functional prototypes within days, not months."
        },
        {
            icon: <LayoutTemplate size={24} color="var(--accent-purple)" />,
            title: "Full-Stack Web Apps",
            desc: "Building end-to-end solutions using React, Vite, Next.js, and Flask."
        },
        {
            icon: <Gauge size={24} color="var(--accent-blue)" />,
            title: "Performance Optimization",
            desc: "Architecting for speed, scalability, and Lighthouse 100 metrics."
        },
        {
            icon: <Network size={24} color="var(--accent-purple)" />,
            title: "REST Architecture Design",
            desc: "Designing robust, secure, and scalable API ecosystems."
        },
        {
            icon: <Smartphone size={24} color="var(--accent-blue)" />,
            title: "UI/UX Focused Development",
            desc: "Translating Figma designs into pixel-perfect, accessible component systems."
        }
    ];

    return (
        <section id="capabilities" style={{ padding: '6rem 0', position: 'relative' }}>
            <div className="glow-bg" style={{ top: '20%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,240,255,0.08) 0%, rgba(0,0,0,0) 70%)' }} />

            <div className="container">
                <h2 className="section-title">Core <span className="text-gradient">Capabilities</span></h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem',
                    position: 'relative',
                    zIndex: 2
                }}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-panel"
                            style={{
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                transition: 'all var(--transition-normal)',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--border-hover)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--border-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '0.5rem'
                            }}>
                                {feature.icon}
                            </div>

                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
