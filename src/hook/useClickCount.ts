import React, { useEffect, useRef, useState } from 'react';

const useClickCount = () => {
    const [count, setCount] = useState(0);
    const componentRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleCount = (event: MouseEvent) => {
            if (componentRef.current && componentRef.current === event.target) {
                setCount(prev => prev + 1);
            }
        };

        document.addEventListener('click', handleCount);
    
        return () => {
            document.removeEventListener('click', handleCount);
        };
    }, [])

    return { count, componentRef };
}

export { useClickCount };