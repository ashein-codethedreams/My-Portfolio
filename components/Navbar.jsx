'use client';

import { useState, useEffect, useMemo } from 'react';
import styles from './Navbar.module.css';
import { navLinks } from '@/data/portfolio';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useIntersectionObserver';
import { useTheme } from '@/hooks/useTheme';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrolled } = useScrollPosition();
    const sectionIds = useMemo(
        () => navLinks.map((l) => l.href.replace('#', '')),
        []
    );
    const activeId = useActiveSection(sectionIds);
    const { theme, toggleTheme, mounted } = useTheme();

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

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
                !e.target.closest(`.${styles.themeToggle}`)
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
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isDark = theme === 'dark';

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
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.navLink} ${activeId === link.href.replace('#', '') ? styles.activeLink : ''
                                    }`}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={styles.navActions}>
                    {mounted && (
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
