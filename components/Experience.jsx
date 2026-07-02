'use client';

import styles from './Experience.module.css';
import SectionHeader from './SectionHeader';
import { experienceData } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/hooks/useLanguage';

function ExperienceCard({ item }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

    return (
        <div 
            ref={ref} 
            className={`${styles.timelineItem} ${isVisible ? 'reveal revealed' : 'reveal'}`}
        >
            <div className={styles.timelinePoint}></div>
            <div className={styles.timelineCard}>
                <div className={styles.timelineCardHeader}>
                    <h3 className={styles.timelineRole}>{item.role}</h3>
                    <span className={styles.timelinePeriod}>
                        <i className="far fa-clock"></i> {item.period}
                    </span>
                </div>
                <h4 className={styles.timelineCompany}>{item.company}</h4>
                <p className={styles.timelineLocation}>
                    <i className="fas fa-map-marker-alt"></i> {item.location}
                </p>
                <p className={styles.timelineDescription}>{item.description}</p>
                <ul className={styles.timelineHighlights}>
                    {item.highlights.map((highlight, idx) => (
                        <li key={idx}>
                            <i className="fas fa-check-circle"></i> {highlight}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Experience() {
    const { lang } = useLanguage();

    const list = experienceData[lang] ?? experienceData.en;
    const stats = experienceData.stats[lang] ?? experienceData.stats.en;
    const header = experienceData.sectionHeader[lang] ?? experienceData.sectionHeader.en;

    return (
        <section className="section" id="experience">
            <div className="container">
                <SectionHeader subtitle={header.subtitle} title={header.title} />
                
                {/* Stats Summary row */}
                <div className={styles.experienceStatsRow}>
                    {stats.map((stat) => (
                        <div key={stat.label} className={styles.statCard}>
                            <span className={styles.statNumber}>{stat.number}</span>
                            <span className={styles.statLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Timeline list */}
                <div className={styles.timelineContainer}>
                    <div className={styles.timelineLine}></div>
                    {list.map((item, index) => (
                        <ExperienceCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
