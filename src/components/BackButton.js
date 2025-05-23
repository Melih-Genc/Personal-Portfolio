import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate('/menu')}
            aria-label="Go back to Menu"
            style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                width: '100px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'rgba(128, 128, 128, 0.6)',
                border: 'none',
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none',
                transition: 'background-color 0.3s ease',
                zIndex: 10,
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.9)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(128, 128, 128, 0.6)'}
        >
            Back
        </button>
    );
};

export default BackButton;
