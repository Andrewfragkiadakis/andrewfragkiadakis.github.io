// src/hooks/useIntersectionObserver.js
import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (options) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Update state when observer callback fires
            setIsIntersecting(entry.isIntersecting);
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]); // Re-run effect if options change

    // Return the ref and the intersecting state
    // The consuming component will attach 'elementRef' to the DOM element it wants to observe
    return [elementRef, isIntersecting];
};

export default useIntersectionObserver;