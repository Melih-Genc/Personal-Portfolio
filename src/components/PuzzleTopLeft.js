import React from 'react';

const PuzzleTopLeft = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                gridArea: '1 / 1 / 2 / 2',
                backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about.jpg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // yarı saydam siyah
                    padding: '10px 20px',
                    borderRadius: '8px',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                }}
            >
                About
            </div>
        </div>
    );
};

export default PuzzleTopLeft;
