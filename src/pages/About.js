import React, { useEffect, useState, useRef } from 'react';
import BackButton from '../components/BackButton';

const About = () => {
    const text = `I'm Melih Genç, 21 years old. I am a sophomore at Balıkesir University, Department of Computer Engineering. Since the first day I started as a university student, I have been trying to make myself stand out in the sector by pursuing ways to improve myself.`;

    const [displayedText, setDisplayedText] = useState('');
    const displayedTextRef = useRef('');
    const [showCursor, setShowCursor] = useState(true);
    const typed = useRef(false);

    useEffect(() => {
        if (typed.current) return;
        typed.current = true;

        let i = 0;
        displayedTextRef.current = '';

        const typeChar = () => {
            if (i < text.length) {
                displayedTextRef.current += text.charAt(i);
                setDisplayedText(displayedTextRef.current);
                i++;
                setTimeout(typeChar, 40);
            }
        };

        typeChar();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                color: '#00ff00',
                minHeight: '100vh',
                padding: '20px',
                fontFamily: 'Arial, sans-serif',
                backgroundImage: `url('/images/background.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
                margin: 0,
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    maxWidth: 900,
                    margin: '0 auto',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    padding: '20px',
                    borderRadius: '10px',
                }}
            >
                <BackButton />

                <h1
                    style={{
                        color: '#00ff00',
                        textAlign: 'center',
                        marginBottom: '40px',
                        fontFamily: 'monospace',
                        fontWeight: 'bold',
                        fontSize: '2.5rem',
                    }}
                >
                    About Me
                </h1>

                {/* İçerik alanı */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <pre
                            style={{
                                fontSize: '18px',
                                lineHeight: '1.6',
                                whiteSpace: 'pre-wrap',
                                fontFamily: 'monospace',
                            }}
                        >
                            {displayedText}
                            <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
                        </pre>
                    </div>

                    <div style={{ flex: 1, textAlign: 'center' }}>
                        <img
                            src="/images/aboutme.jpg"
                            alt="About me"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                            }}
                        />
                    </div>
                </div>

                <a
                    href="/Melih-GENC-CV.pdf"
                    download
                    style={{
                        display: 'block',
                        margin: '30px auto 0',
                        padding: '12px 24px',
                        fontSize: '16px',
                        backgroundColor: '#00ff00',
                        color: '#000',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        transition: 'background 0.3s',
                        textAlign: 'center',
                        maxWidth: '200px',
                        cursor: 'pointer',
                    }}
                    onMouseOver={e => (e.currentTarget.style.backgroundColor = '#00cc00')}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = '#00ff00')}
                >
                    📄 Download CV
                </a>

                <style>{`
                    @media (min-width: 768px) {
                        div[style*="flex-direction: column"] {
                            flex-direction: row !important;
                            align-items: center;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
};

export default About;
