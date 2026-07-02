'use client';

import styles from './Experience.module.css';
import SectionHeader from './SectionHeader';
import { experienceData } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/hooks/useLanguage';

export default function Experience() {
    const [contentRef, contentVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [statsRef, statsVisible] = useIntersectionObserver({ threshold: 0.1 });
    const { lang } = useLanguage();

    const t = experienceData[lang] ?? experienceData.en;
    const header = experienceData.sectionHeader[lang] ?? experienceData.sectionHeader.en;

    return (
        <section className="section" id="experience">
            <div className="container">
                <SectionHeader subtitle={header.subtitle} title={header.title} />
                <div className={styles.experienceContainer}>
                    <div
                        ref={contentRef}
                        className={`${styles.experienceContent} ${contentVisible ? 'reveal revealed' : 'reveal'}`}
                    >
                        <div className={styles.experienceBadge}>
                            <i className="fas fa-globe-americas"></i>
                            <span>{t.badge}</span>
                        </div>
                        <h3>{t.title}</h3>
                        <p className={styles.experienceLocation}>
                            <i className="fas fa-map-marker-alt"></i> {t.location}
                        </p>
                        <p className={styles.experiencePeriod}>
                            <i className="far fa-clock"></i> {t.period}
                        </p>
                        <p className={styles.experienceDescription}>{t.description}</p>
                        <ul className={styles.experienceHighlights}>
                            {t.highlights.map((item) => (
                                <li key={item}>
                                    <i className="fas fa-check-circle"></i> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        ref={statsRef}
                        className={`${styles.experienceVisual} ${statsVisible ? 'reveal revealed' : 'reveal'}`}
                    >
                        <div className={styles.experienceStats}>
                            {t.stats.map((stat) => (
                                <div key={stat.label} className={styles.statCard}>
                                    <span className={styles.statNumber}>{stat.number}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
