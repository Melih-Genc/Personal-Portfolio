import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeEffect = () => {
    const firstText = "Welcome To My Website !";
    const secondText = "I'm a Programmer";
    const thirdText = "Based Balıkesir / Türkiye";

    const [displayedText, setDisplayedText] = useState("");
    const [phase, setPhase] = useState(1);
    const [index, setIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [shrink, setShrink] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let targetText = "";

        switch (phase) {
            case 1:
                targetText = firstText;
                break;
            case 2:
                targetText = secondText;
                break;
            case 3:
                targetText = thirdText;
                break;
            default:
                return;
        }

        if (index < targetText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + targetText[index]);
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else if (phase < 3) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + "\n");
                setPhase(phase + 1);
                setIndex(0);
            }, 1000);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setShrink(true);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [phase, index]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        if (shrink) {
            const timeout = setTimeout(() => {
                navigate("/menu");
            }, 1200);
            return () => clearTimeout(timeout);
        }
    }, [shrink, navigate]);

    return (
        <div
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: shrink ? "clamp(120px, 20vw, 180px)" : "100vw",
                height: shrink ? "clamp(120px, 20vw, 180px)" : "100vh",
                maxWidth: shrink ? "180px" : "100vw",
                maxHeight: shrink ? "180px" : "100vh",
                backgroundColor: "black",
                borderRadius: shrink ? "50%" : "0",
                color: "limegreen",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "monospace",
                fontSize: shrink ? "clamp(1rem, 1.3vw, 1.3rem)" : "clamp(1.5rem, 4vw, 2.5rem)",
                whiteSpace: "pre-wrap",
                textAlign: "center",
                padding: shrink ? "clamp(8px, 1vw, 20px)" : "0 20px",
                transition: "all 1s ease-in-out",
                boxShadow: shrink ? "0 0 20px 3px limegreen" : "none",
                zIndex: 9999,
                overflow: "hidden",
            }}
        >
            {!shrink ? (
                <pre style={{ margin: 0 }}>
                    {displayedText}
                    <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
                </pre>
            ) : (
                <span style={{ userSelect: "none" }}>Welcome!</span>
            )}
        </div>
    );
};

export default HomeEffect;
