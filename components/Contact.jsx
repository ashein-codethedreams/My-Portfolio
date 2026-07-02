'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import SectionHeader from './SectionHeader';
import { contactData } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/hooks/useLanguage';

export default function Contact() {
    const [infoRef, infoVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [submitState, setSubmitState] = useState('idle');
    const { lang } = useLanguage();

    const t = contactData[lang] ?? contactData.en;
    const header = contactData.sectionHeader[lang] ?? contactData.sectionHeader.en;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitState('sending');
        setTimeout(() => {
            setSubmitState('sent');
            setTimeout(() => {
                setSubmitState('idle');
                e.target.reset();
            }, 2500);
        }, 1500);
    };

    return (
        <section className="section section-even" id="contact">
            <div className="container">
                <SectionHeader subtitle={header.subtitle} title={header.title} />
                <div className={styles.contactContainer}>
                    <div
                        ref={infoRef}
                        className={`${styles.contactInfo} ${infoVisible ? 'reveal revealed' : 'reveal'}`}
                    >
                        <p className={styles.contactIntro}>{t.intro}</p>
                        <div className={styles.contactDetails}>
                            {t.details.map((item) => (
                                <div key={item.label} className={styles.contactItem}>
                                    <div className={styles.contactIcon}>
                                        <i className={item.icon}></i>
                                    </div>
                                    <div>
                                        <h4>{item.label}</h4>
                                        {item.href ? (
                                            <a href={item.href}>{item.value}</a>
                                        ) : (
                                            <p>{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.availableBadge}>
                            <span className={styles.pulseDot}></span>
                            {t.availableBadge}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
