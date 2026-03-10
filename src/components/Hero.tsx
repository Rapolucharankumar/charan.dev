import { useEffect, useRef } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
        const particleCount = 100;
        const connectionRadius = 150;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionRadius) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 240, 255, ${1 - dist / connectionRadius})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    opacity: 0.6
                }}
            />
            <div className="glow-bg" style={{ top: '20%', left: '10%' }} />
            <div className="glow-bg" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, rgba(0,0,0,0) 70%)' }} />

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '50px',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: '2rem',
                    animation: 'fadeInUp 0.8s ease-out'
                }}>
                    <Terminal size={16} color="var(--accent-blue)" />
                    <span style={{ color: 'var(--text-muted)' }}>RAPOLU CHARAN KUMAR</span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    letterSpacing: '-1px',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1',
                    animation: 'fadeInUp 1s ease-out'
                }}>
                    Building AI-Powered Web<br />
                    Applications That <span className="text-gradient">Actually Ship.</span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    color: 'var(--text-muted)',
                    maxWidth: '800px',
                    margin: '0 auto 3rem auto',
                    lineHeight: '1.6',
                    animation: 'fadeInUp 1.2s ease-out'
                }}>
                    AI & ML Engineer focused on rapid prototyping, scalable MVPs, and intelligent product systems. Turning complex ideas into production-ready software.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    animation: 'fadeInUp 1.4s ease-out'
                }}>
                    <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        <span>View My Work</span>
                        <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                        Let's Build Together
                    </a>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                animation: 'bounce 2s infinite'
            }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Scroll</span>
                <div style={{
                    width: '1px',
                    height: '40px',
                    background: 'linear-gradient(to bottom, var(--accent-purple), transparent)'
                }} />
            </div>

            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
