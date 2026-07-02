'use client';

import styles from './Footer.module.css';
import { footerData } from '@/data/portfolio';
import { useLanguage } from '@/hooks/useLanguage';

export default function Footer() {
    const { lang } = useLanguage();

    const t = footerData[lang] ?? footerData.en;

    const handleSmoothScroll = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <a
                            href="#home"
                            className={`${styles.footerLogo} logo-gradient`}
                            onClick={(e) => handleSmoothScroll(e, '#home')}
                        >
                            {footerData.brand}
                        </a>
                        <p>{t.tagline}</p>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>{t.quickLinksLabel}</h4>
                        <ul>
                            {t.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerSocial}>
                        <h4>{t.connect}</h4>
                        <div className={styles.footerSocialLinks}>
                            {footerData.socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener"
                                    aria-label={social.label}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>{t.copyright(new Date().getFullYear())}</p>
                </div>
            </div>
        </footer>
    );
}
