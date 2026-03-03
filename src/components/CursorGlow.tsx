import { useEffect, useState } from 'react';

const CursorGlow = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-glow)',
                pointerEvents: 'none',
                transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
                transition: 'transform 0.1s ease-out',
                zIndex: 9999,
                filter: 'blur(15px)',
                mixBlendMode: 'screen'
            }}
        />
    );
};

export default CursorGlow;
