'use client';

import Image from 'next/image';
import styles from './About.module.css';
import SectionHeader from './SectionHeader';
import { aboutData } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useTheme } from '@/hooks/useTheme';

export default function About() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const { theme, mounted } = useTheme();

    const aboutImage = mounted && theme === 'dark'
        ? '/images/about-illustration-dark.png'
        : aboutData.image;

    return (
        <section className="section" id="about">
            <div className="container">
                <SectionHeader subtitle="Get To Know Me" title="About Me" />
                <div className={styles.aboutContainer} ref={ref}>
                    <div className={styles.aboutImage}>
                        <div className={styles.aboutImageWrapper}>
                            <Image
                                src={aboutImage}
                                alt="Professional desk setup"
                                width={600}
                                height={450}
                                loading="lazy"
                            />
                            <div className={styles.aboutDecoration}></div>
                        </div>
                    </div>
                    <div className={`${styles.aboutContent} ${isVisible ? 'reveal revealed' : 'reveal'}`}>
                        {aboutData.paragraphs.map((text, i) => (
                            <p
                                key={i}
                                className={styles.aboutText}
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                        ))}
                        <div className={styles.expertiseCards}>
                            {aboutData.expertise.map((item) => (
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
