import { useState, useEffect } from "react";

export function useMouse() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener("mousemove", mouse);
        return () => window.removeEventListener("mousemove", mouse);
    }, [])

    function mouse(e) {
        setPosition({ x: e.pageX, y: e.pageY });
    }

    return {
        ...position
    }
}