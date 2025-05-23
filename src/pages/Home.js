import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const introText = "Welcome to my Portfolio!";
    const [displayedText, setDisplayedText] = useState('');
    const [showStart, setShowStart] = useState(false);
    const indexRef = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + introText.charAt(indexRef.current));
            indexRef.current += 1;
            if (indexRef.current >= introText.length) {
                clearInterval(interval);
                setTimeout(() => setShowStart(true), 500); // 0.5 saniye sonra buton göster
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            height: '100vh',
            backgroundColor: '#000',
            color: '#00ff00',
            fontFamily: 'monospace',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            textAlign: 'center',
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{displayedText}</h1>

            {showStart && (
                <button
                    onClick={() => navigate('/puzzlemenu')}
                    style={{
                        padding: '12px 24px',
                        fontSize: '1.2rem',
                        backgroundColor: '#00ff00',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        color: '#000',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#00cc00'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#00ff00'}
                >
                    Başla
                </button>
            )}
        </div>
    );
};

export default Home;
