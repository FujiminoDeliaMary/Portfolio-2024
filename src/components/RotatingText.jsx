import React, { useState, useEffect, useMemo } from 'react';


function RotatingText() {
    const [wordIndex, setWordIndex] = useState(0);
    const [letters, setLetters] = useState([]);

    const roles = useMemo(() => ["Amatrice de manga", "RedBullolic", "Developpeuse Front-end", "Developpeuse Full Stack"], []);

    useEffect(() => {
        const currentLetters = roles[wordIndex].split('').map(char => char === ' ' ? '\u00A0' : char); // Remplace les espaces par &nbsp;
        setLetters(currentLetters.map((letter, index) => ({
            letter,
            key: `${wordIndex}-${index}`,
            delay: `${index * 100}ms`
        })));

        const timer = setTimeout(() => {
            setWordIndex((current) => (current + 1) % roles.length);
        }, currentLetters.length * 100 + 2000);

        return () => clearTimeout(timer);
    }, [wordIndex, roles]);

    return (
        <div className="rotating-text">
            {letters.map(({ letter, key, delay }) => (
                <span key={key} style={{ animation: `appear 600ms ${delay} forwards` }}>{letter}</span>
            ))}
        </div>
    );
}


export default RotatingText;
