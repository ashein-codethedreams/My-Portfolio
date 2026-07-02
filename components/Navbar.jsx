'use client';

import { useState, useEffect, useMemo } from 'react';
import styles from './Navbar.module.css';
import { navLinks } from '@/data/portfolio';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useIntersectionObserver';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrolled } = useScrollPosition();
    const { theme, toggleTheme, mounted: themeMounted } = useTheme();
    const { lang, toggleLang, mounted: langMounted } = useLanguage();

    const links = navLinks[lang] ?? navLinks.en;
    const sectionIds = useMemo(() => links.map((l) => l.href.replace('#', '')), [links]);
    const activeId = useActiveSection(sectionIds);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuOpen &&
                !e.target.closest(`.${styles.navMenu}`) &&
                !e.target.closest(`.${styles.hamburger}`) &&
                !e.target.closest(`.${styles.themeToggle}`) &&
                !e.target.closest(`.${styles.langToggle}`)
            ) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        closeMenu();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    const isDark = theme === 'dark';
    const isJa = lang === 'ja';

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
            <div className={`container ${styles.navContainer}`}>
                <a
                    href="#home"
                    className={styles.navLogo}
                    onClick={(e) => handleLinkClick(e, '#home')}
                >
                    <span className="logo-gradient">Portfolio</span>
                </a>

                <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.navLink} ${activeId === link.href.replace('#', '') ? styles.activeLink : ''}`}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.navActions}>
                    {/* Language toggle pill */}
                    {langMounted && (
                        <div className={styles.langToggle} aria-label="Switch language">
                            <button
                                className={`${styles.langSegment} ${!isJa ? styles.active : ''}`}
                                onClick={() => isJa && toggleLang()}
                                aria-pressed={!isJa}
                                id="lang-en-btn"
                            >
                                EN
                            </button>
                            <button
                                className={`${styles.langSegment} ${isJa ? styles.active : ''}`}
                                onClick={() => !isJa && toggleLang()}
                                aria-pressed={isJa}
                                id="lang-ja-btn"
                            >
                                JP
                            </button>
                        </div>
                    )}

                    {/* Dark / light mode toggle */}
                    {themeMounted && (
                        <button
                            className={styles.themeToggle}
                            onClick={toggleTheme}
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            id="theme-toggle-btn"
                        >
                            <span className={styles.themeToggleIcon}>
                                <i className={isDark ? 'fas fa-sun' : 'fas fa-moon'}></i>
                            </span>
                        </button>
                    )}

                    {/* Hamburger */}
                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
