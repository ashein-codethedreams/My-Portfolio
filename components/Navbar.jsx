'use client';

import { useState, useEffect, useMemo } from 'react';
import styles from './Navbar.module.css';
import { navLinks } from '@/data/portfolio';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useIntersectionObserver';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrolled } = useScrollPosition();
    const sectionIds = useMemo(
        () => navLinks.map((l) => l.href.replace('#', '')),
        []
    );
    const activeId = useActiveSection(sectionIds);

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
                !e.target.closest(`.${styles.hamburger}`)
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
        </nav>
    );
}
