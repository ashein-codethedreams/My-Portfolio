'use client';

import { useState, useEffect } from 'react';

export function useScrollPosition(threshold = 50) {
    const [scrolled, setScrolled] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setScrolled(currentScroll > threshold);
            setShowBackToTop(currentScroll > 500);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    return { scrolled, showBackToTop };
}
