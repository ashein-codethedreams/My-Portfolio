'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { heroData } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/hooks/useLanguage';

export default function Hero() {
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const { theme, mounted: themeMounted } = useTheme();
    const { lang } = useLanguage();

    const t = heroData[lang] ?? heroData.en;
    const heroImage = themeMounted && theme === 'dark'
        ? '/images/hero-illustration-dark.png'
        : heroData.image;

    useEffect(() => {
        const text = t.title;
        let i = 0;
        setTypedText('');
        setShowCursor(true);
        const timer = setTimeout(() => {
            const typeWriter = setInterval(() => {
                if (i < text.length) {
                    setTypedText(text.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(typeWriter);
                    setTimeout(() => setShowCursor(false), 1000);
                }
            }, 60);
            return () => clearInterval(typeWriter);
        }, 300);
        return () => clearTimeout(timer);
    }, [lang]); // re-run typewriter when language changes

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero} id="home">
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <p className={styles.heroGreeting}>
                        <span className={styles.wave}>👋</span> {t.greeting}
                    </p>
                    <h1 className={styles.heroName}>{heroData.name}</h1>
                    <p className={`${styles.heroTitle} ${showCursor ? styles.typing : ''}`}>
                        {typedText}
                    </p>
                    <p className={styles.heroDescription}>{t.description}</p>
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
                    <div className={styles.heroImageWrapper}>
                        <Image
                            src={heroImage}
                            alt="Developer workspace illustration"
                            width={500}
                            height={500}
                            priority
                        />
                        <div className={styles.heroBlob}></div>
                    </div>
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
