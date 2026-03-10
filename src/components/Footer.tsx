
const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-darker)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    built by <span style={{ color: 'var(--accent-purple)' }}>cherry</span>
                </div>

                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Rapolu Charan Kumar
                </div>
            </div>
        </footer>
    );
};

export default Footer;
