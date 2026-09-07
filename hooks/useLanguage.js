'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'portfolio-lang';

const LanguageContext = createContext({
    lang: 'ja',
    toggleLang: () => {},
    mounted: false,
});

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('ja');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) ?? 'ja';
        setLang(saved);
        document.documentElement.setAttribute('data-lang', saved);
        setMounted(true);
    }, []);

    const toggleLang = useCallback(() => {
        setLang((prev) => {
            const next = prev === 'en' ? 'ja' : 'en';
            localStorage.setItem(STORAGE_KEY, next);
            document.documentElement.setAttribute('data-lang', next);
            return next;
        });
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
