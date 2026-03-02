'use client';

import styles from './Footer.module.css';
import { footerData } from '@/data/portfolio';

export default function Footer() {
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
                        <p>{footerData.tagline}</p>
                    </div>
                    <div className={styles.footerLinks}>
                        <h4>Quick Links</h4>
                        <ul>
                            {footerData.quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.footerSocial}>
                        <h4>Connect</h4>
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
                    <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
