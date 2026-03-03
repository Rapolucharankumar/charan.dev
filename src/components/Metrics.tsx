import { useEffect, useState, useRef } from 'react';

const stats = [
    { label: 'Projects Built', value: 5, suffix: '+' },
    { label: 'APIs Integrated', value: 10, suffix: '+' },
    { label: 'Production Code', value: 1000, suffix: '+' },
    { label: 'AI Integrations', value: 4, suffix: '+' } // Used "Multiple AI Integrations" functionally
];

const Counter = ({ end, suffix }: { end: number, suffix: string }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                let startTime: number | null = null;
                const duration = 2000;

                const animate = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const percentage = Math.min(progress / duration, 1);

                    setCount(Math.floor(end * percentage));

                    if (progress < duration) {
                        requestAnimationFrame(animate);
                    }
                };
                requestAnimationFrame(animate);
                observer.disconnect(); // Only animate once
            }
        }, { threshold: 0.5 });

        if (nodeRef.current) observer.observe(nodeRef.current);
        return () => observer.disconnect();
    }, [end]);

    return <span ref={nodeRef}>{count}{suffix}</span>;
}

const Metrics = () => {
    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-panel" style={{
                            padding: '2rem',
                            border: `1px solid var(${index % 2 === 0 ? '--accent-purple)' : '--accent-blue)'}`
                        }}>
                            <div style={{
                                fontSize: '3rem',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 800,
                                color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-blue)',
                                marginBottom: '0.5rem',
                                textShadow: `0 0 20px rgba(${index % 2 === 0 ? '112, 0, 255' : '0, 240, 255'}, 0.3)`
                            }}>
                                <Counter end={stat.value} suffix={stat.suffix} />
                            </div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: 500 }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;
