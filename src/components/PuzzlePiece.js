import React from 'react';

const PuzzlePiece = ({ area, backgroundColor, clipPath, text, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                gridArea: area,
                backgroundColor: backgroundColor || '#00ff00',
                clipPath: clipPath,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '18px',
                userSelect: 'none',
            }}
        >
            {text}
        </div>
    );
};

export default PuzzlePiece;
