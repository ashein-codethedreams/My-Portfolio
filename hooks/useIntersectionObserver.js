'use client';

import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
    const ref = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    if (options.once !== false) {
                        observer.unobserve(element);
                    }
                } else if (options.once === false) {
                    setIsIntersecting(false);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin, options.once]);

    return [ref, isIntersecting];
}

export function useActiveSection(sectionIds) {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-40% 0px -60% 0px',
                threshold: 0,
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeId;
}
