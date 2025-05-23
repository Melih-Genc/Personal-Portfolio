import React from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate import'u
import PuzzleTopLeft from './PuzzleTopLeft';
import PuzzleTopRight from './PuzzleTopRight';
import PuzzleBottomLeft from './PuzzleBottomLeft';
import PuzzleBottomRight from './PuzzleBottomRight';
import './PuzzleMenu.css';

const PuzzleMenu = () => {
    const navigate = useNavigate();

    return (
        <div className="puzzle-container">
            <PuzzleTopLeft
                onClick={() => navigate('/about')}
                backgroundColor="#ffcc00"
                text="About"
            />
            <PuzzleTopRight
                onClick={() => navigate('/skills')}
                backgroundColor="#00ccff"
                text="Skills"
            />
            <PuzzleBottomLeft
                onClick={() => navigate('/portfolio')}
                backgroundColor="#ff66cc"
                text="Portfolio"
            />
            <PuzzleBottomRight
                onClick={() => navigate('/contact')}
                backgroundColor="#66ff66"
                text="Contact"
            />

            <div
                className="circle-button"
                onClick={() => navigate('/')}
            >
                Home
            </div>
        </div>
    );
};


export default PuzzleMenu;
