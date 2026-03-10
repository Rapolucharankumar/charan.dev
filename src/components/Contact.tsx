import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            <div className="glow-bg" style={{ bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(112,0,255,0.1) 0%, rgba(0,0,0,0) 70%)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                        Let’s Build Something <span className="text-gradient">Intelligent.</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Ready to turn your ideas into functional products? Let's talk.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) 2fr',
                    gap: '4rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }} className="contact-grid">

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Connect</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <a href="mailto:rapolucharan5@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', transition: 'color var(--transition-fast)' }} className="contact-link">
                                    <Mail size={20} color="var(--accent-blue)" /> rapolucharan5@gmail.com
                                </a>
                                <a href="https://www.linkedin.com/in/charan-kumar-rapolu-358a8630b/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', transition: 'color var(--transition-fast)' }} className="contact-link">
                                    <Linkedin size={20} color="var(--accent-purple)" /> LinkedIn
                                </a>
                                <a href="https://github.com/Rapolucharankumar" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', transition: 'color var(--transition-fast)' }} className="contact-link">
                                    <Github size={20} color="var(--accent-blue)" /> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-panel" style={{ padding: '3rem' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Name</label>
                                    <input type="text" placeholder="RAPOLU CHARAN KUMAR" required />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email</label>
                                    <input type="email" placeholder="cherry@example.com" required />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Subject</label>
                                <input type="text" placeholder="Project Inquiry" required />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Message</label>
                                <textarea rows={5} placeholder="Tell me about your project..." required style={{ resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 2.5rem', marginTop: '1rem' }}>
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-link:hover { color: white !important; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Contact;
