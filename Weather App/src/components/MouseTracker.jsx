import {useEffect, useState} from "react";

export default function MouseTracker() {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({x: event.clientX, y: event.clientY});
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div>
            🖱 Cursor Position: X: {position.x}, Y: {position.y}
        </div>
    )
}