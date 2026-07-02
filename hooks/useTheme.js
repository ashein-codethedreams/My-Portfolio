'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'portfolio-theme';

export function useTheme() {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Read saved preference, fall back to system preference
        const saved = localStorage.getItem(STORAGE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = saved ?? (prefersDark ? 'dark' : 'light');

        setTheme(initial);
        document.documentElement.setAttribute('data-theme', initial);
        setMounted(true);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem(STORAGE_KEY, next);
            document.documentElement.setAttribute('data-theme', next);
            return next;
        });
    }, []);

    return { theme, toggleTheme, mounted };
}
