'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { heroData } from '@/data/portfolio';
import { useLanguage } from '@/hooks/useLanguage';
import CodeMockup from './CodeMockup';

export default function Hero() {
    const [typedText, setTypedText] = useState('');
    const { lang } = useLanguage();
    const heroRef = useRef(null);

    const t = heroData[lang] ?? heroData.en;

    // Spotlight cursor tracking
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            heroRef.current.style.setProperty('--mouse-x', `${x}px`);
            heroRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        const heroElement = heroRef.current;
        if (heroElement) {
            heroElement.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            if (heroElement) {
                heroElement.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    // Typewriter effect
    useEffect(() => {
        const roles = lang === 'ja'
            ? ["フロントエンドエンジニア", "React・Next.jsスペシャリスト", "バイリンガルITプログラマー"]
            : ["Frontend Software Developer", "React & Next.js Specialist", "Bilingual IT Programmer"];
            
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let currentText = '';
        let timer = null;

        const type = () => {
            const currentRole = roles[roleIndex];

            if (!isDeleting) {
                // Add character
                currentText = currentRole.substring(0, charIndex + 1);
                setTypedText(currentText);
                charIndex++;

                if (charIndex === currentRole.length) {
                    isDeleting = true;
                    timer = setTimeout(type, 2500); // Hold role text for 2.5 seconds
                } else {
                    timer = setTimeout(type, 80); // Typing speed
                }
            } else {
                // Delete character
                currentText = currentRole.substring(0, charIndex - 1);
                setTypedText(currentText);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length; // Cycle next role
                    timer = setTimeout(type, 500); // Pause before typing next
                } else {
                    timer = setTimeout(type, 40); // Deleting speed
                }
            }
        };

        timer = setTimeout(type, 500);
        return () => clearTimeout(timer);
    }, [lang]);

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero} id="home" ref={heroRef}>
            <div className={styles.spotlight}></div>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <p className={styles.heroGreeting}>
                        <span className={styles.wave}>👋</span> {t.greeting}
                    </p>
                    <h1 className={styles.heroName}>{heroData.name}</h1>
                    <p className={`${styles.heroTitle} ${styles.typing}`}>
                        {typedText}
                    </p>
                    <p className={styles.heroDescription}>
{t.description}</p>
                    <div className={styles.heroCta}>
                        <a
                            href="#contact"
                            className="btn btn-primary"
                            onClick={(e) => handleSmoothScroll(e, '#contact')}
                        >
                            <i className="fas fa-paper-plane"></i> {t.cta.contact}
                        </a>
                        <a 
                            href={t.cta.cvFile} 
                            className="btn btn-outline" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <i className="far fa-file-alt"></i> {t.cta.cv}
                        </a>
                    </div>
                    <div className={styles.heroSocials}>
                        {heroData.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener"
                                className={styles.socialLink}
                                aria-label={social.label}
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <CodeMockup />
                </div>
            </div>
            <div className={styles.heroScrollIndicator}>
                <a
                    href="#about"
                    aria-label="Scroll down"
                    onClick={(e) => handleSmoothScroll(e, '#about')}
                >
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </section>
    );
}
