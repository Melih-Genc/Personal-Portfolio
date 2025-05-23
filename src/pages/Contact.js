import React from 'react';
import BackButton from '../components/BackButton';
import {
    FaGithub,
    FaFacebook,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
    FaPhone,
} from 'react-icons/fa';

const socialLinks = [
    {
        icon: <img src="/images/x.jpg" alt="X" style={{ width: '24px', height: '24px' }} />,
        url: 'https://x.com/',
        label: 'X',
    },
    { icon: <FaGithub />, url: 'https://github.com/Melih-Genc', label: 'GitHub' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/melih.genc.1656/', label: 'Facebook' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/melih-gen%C3%A7-8370692a7/', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/meelih.genc/', label: 'Instagram' },
    { icon: <FaPhone />, url: 'tel:+905518892604', label: 'Phone' },
    { icon: <FaEnvelope />, url: 'https://gmail.com', label: 'cengmelihgenc@gmail.com' },
];

const Contact = () => {
    return (
        <div
            style={{
                minHeight: '100vh',
                padding: '20px',
                backgroundImage: 'url(/images/background.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '30px',
            }}
        >
            <BackButton />

            <h1
                style={{
                    color: 'limegreen',
                    fontSize: '2rem',
                    textAlign: 'center',
                    margin: 0,
                }}
            >
                Contact
            </h1>

            <form
                style={{
                    backgroundColor: '#111',
                    padding: '20px',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px limegreen',
                    width: '90%',
                    maxWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                }}
            >
                <label style={{ color: 'limegreen' }}>Full Name:</label>
                <input
                    type="text"
                    placeholder="Your full name"
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        outline: 'none',
                    }}
                />

                <label style={{ color: 'limegreen' }}>Email:</label>
                <input
                    type="email"
                    placeholder="email@example.com"
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        outline: 'none',
                    }}
                />

                <label style={{ color: 'limegreen' }}>Message:</label>
                <textarea
                    rows="5"
                    placeholder="Write your message"
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        outline: 'none',
                    }}
                />

                <button
                    type="submit"
                    style={{
                        backgroundColor: 'limegreen',
                        color: '#000',
                        fontWeight: 'bold',
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#00ff00')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'limegreen')}
                >
                    Send
                </button>
            </form>

            <div
                style={{
                    width: '90%',
                    maxWidth: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    marginTop: '10px',
                }}
            >
                {socialLinks.map(({ icon, url, label }) => (
                    <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        style={{
                            color: 'limegreen',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            padding: '10px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            boxShadow: '0 0 6px limegreen',
                            userSelect: 'none',
                            transition: 'background-color 0.3s',
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = 'rgba(0, 255, 0, 0.7)')
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)')
                        }
                    >
                        {icon}
                        <span>{label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
