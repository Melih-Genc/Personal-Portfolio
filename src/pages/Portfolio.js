import React from 'react';
import BackButton from '../components/BackButton';

const projects = [
    {
        title: "Image Processing with Yolov8 Fighting UAV",
        videoSrc: "/videos/yolo.mp4",
        description: "This project is the image processing code of our aircraft that we competed in the Teknofest Combat UAV category. I used the Yolo v8 algorithm for image processing. I filtered the Yolo algorithm, which can detect 80 different objects, by putting a simple if condition so that it only marks the aircraft. Thus, my code was updated to mark only the detected aircraft. I also added a QR reader to read the QR code in the kamikaze mission.",
        githubUrl: "https://github.com/Melih-Genc/Image-Processing-with-Yolov8-Fighting-UAV-"
    },
    {
        title: "CikCik App Social Platform",
        videoSrc: "/videos/cikcik.mp4",
        description: "My Visual Programming Course Final Project \"CikCik\" is actually a social platform application similar to X (Twitter). In this project I made using Pyqt5, I used the local database SQLite. This application has features such as publishing public posts, commenting, and liking. In addition, account security is ensured by encrypting user passwords in the database using the Hashlib library.",
        githubUrl: "https://github.com/Melih-Genc/CikCik-App-Social-Platform-"
    },
    {
        title: "Medication Tracking",
        videoSrc: "/videos/medicine.mp4",
        description: "Medication tracking application is a Flutter project written in Dart language. It is a mobile application where the drugs used can be noted by determining the drug name, dosage, day and time and whether that dose has been taken or not can be checked.",
        githubUrl: "https://github.com/Melih-Genc/Medication-Tracking"
    },
    {
        title: "Numerology App",
        videoSrc: "/videos/numerology.mp4",
        description: "It is the first flutter project I made. It is a simple mobile application where you can check your numerology analysis by entering your name and date of birth.",
        githubUrl: "https://github.com/Melih-Genc/Numerology-App"
    },
];

const Portfolio = () => {
    return (
        <div style={{ backgroundImage: 'url(/images/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'fixed', minHeight: '100vh', padding: '40px 20px', color: 'limegreen' }}>
            <BackButton />

            <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>My Projects</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                {projects.map((project, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '15px' }}>{project.title}</h2>

                        <video
                            src={project.videoSrc}
                            controls
                            style={{
                                width: '100%',
                                maxWidth: '600px',
                                borderRadius: '10px',
                                boxShadow: '0 0 10px limegreen',
                            }}
                        />

                        <div
                            style={{
                                border: '2px solid limegreen',
                                borderRadius: '10px',
                                padding: '20px',
                                margin: '20px auto',
                                maxWidth: '600px',
                                backgroundColor: 'rgba(0, 255, 0, 0.05)',
                                fontSize: '16px',
                                lineHeight: '1.5',
                                color: '#00ff00',
                            }}
                        >
                            {project.description}
                        </div>

                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                marginTop: '10px',
                                display: 'inline-block',
                                padding: '10px 20px',
                                backgroundColor: 'limegreen',
                                color: '#000',
                                textDecoration: 'none',
                                borderRadius: '5px',
                                fontWeight: 'bold',
                                transition: 'background-color 0.3s',
                            }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = '#00ff00'}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = 'limegreen'}
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
