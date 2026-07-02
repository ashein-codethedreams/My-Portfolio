'use client';

import Image from 'next/image';
import styles from './About.module.css';
import SectionHeader from './SectionHeader';
import { aboutData } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/hooks/useLanguage';

export default function About() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const { lang } = useLanguage();

    const t = aboutData[lang] ?? aboutData.en;
    const header = aboutData.sectionHeader[lang] ?? aboutData.sectionHeader.en;

    return (
        <section className="section" id="about">
            <div className="container">
                <SectionHeader subtitle={header.subtitle} title={header.title} />
                <div className={styles.aboutContainer} ref={ref}>
                    {/* Profile Photo Column */}
                    <div className={styles.aboutPhotoColumn}>
                        <div className={styles.profilePhotoOuter}>
                            <div className={styles.profileRing}></div>
                            <div className={styles.profilePhotoInner}>
                                <Image
                                    src="/assets/MyPhoto.jpg"
                                    alt="Aye Myat Mon – Frontend Developer"
                                    width={340}
                                    height={400}
                                    className={styles.profilePhoto}
                                    priority
                                />
                            </div>
                            {/* Floating availability badge */}
                            <div className={styles.profileBadge}>
                                <span className={styles.profileBadgeDot}></span>
                                <span className={styles.profileBadgeText}>
                                    {lang === 'ja' ? 'お仕事募集中' : 'Available for Work'}
                                </span>
                            </div>
                            {/* Floating experience tag */}
                            <div className={styles.profileExpTag}>
                                <i className="fas fa-code"></i>
                                <div>
                                    <span className={styles.profileExpNum}>3+</span>
                                    <span className={styles.profileExpLabel}>
                                        {lang === 'ja' ? '年の経験' : 'Years Exp.'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className={`${styles.aboutContent} ${isVisible ? 'reveal revealed' : 'reveal'}`}>
                        {t.paragraphs.map((text, i) => (
                            <p
                                key={i}
                                className={styles.aboutText}
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                        ))}
                        <div className={styles.expertiseCards}>
                            {t.expertise.map((item) => (
                                <div key={item.title} className={styles.expertiseCard}>
                                    <div className={styles.expertiseIcon}>
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
