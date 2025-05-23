import React from 'react';
import BackButton from '../components/BackButton';

const Skills = () => {
    const skillsData = [
        {
            id: 1,
            text: 'I worked on image processing with OpenCV.',
            imgSrc: '/images/opencv.jpg',
            alt: 'OpenCV',
        },
        {
            id: 2,
            text: 'I did projects with NVIDIA Jetson Nano.',
            imgSrc: '/images/nvidia.jpg',
            alt: 'NVIDIA Jetson Nano',
        },
        {
            id: 3,
            text: 'I developed mobile applications with Flutter.',
            imgSrc: '/images/flutter.jpg',
            alt: 'Flutter',
        },
        {
            id: 4,
            text: 'I improved myself in many social and personal areas other than software.',
            imgSrc: '/images/socialskills.jpg',
            alt: 'Social Skills',
        },
    ];

    return (
        <div
            style={{
                color: '#00ff00',
                minHeight: '100vh',
                padding: '60px 20px',
                fontFamily: 'Arial, sans-serif',
                backgroundImage: 'url(/images/background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <BackButton />

            <h1
                style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    fontSize: '2.5rem',
                }}
            >
                What I Can Do
            </h1>

            <div
                style={{
                    width: '100%',
                    maxWidth: '620px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                {skillsData.map(({ id, text, imgSrc, alt }) => (
                    <div
                        key={id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 255, 0, 0.08)',
                            borderRadius: '10px',
                            padding: '15px',
                            border: '1.5px solid limegreen',
                            boxShadow: '0 0 8px limegreen',
                        }}
                    >
                        <img
                            src={imgSrc}
                            alt={alt}
                            style={{
                                width: '50px',
                                height: '50px',
                                objectFit: 'cover',
                                marginRight: '15px',
                                borderRadius: '8px',
                                border: '2px solid #00ff00',
                            }}
                        />
                        <p style={{ fontSize: '16px', lineHeight: '1.4' }}>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
