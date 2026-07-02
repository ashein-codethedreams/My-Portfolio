'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './Skills.module.css';
import SectionHeader from './SectionHeader';
import { skillCategories } from '@/data/portfolio';
import { useLanguage } from '@/hooks/useLanguage';

export default function Skills() {
    const [animated, setAnimated] = useState(false);
    const sectionRef = useRef(null);
    const { lang } = useLanguage();

    const categories = skillCategories[lang] ?? skillCategories.en;
    const header = skillCategories.sectionHeader[lang] ?? skillCategories.sectionHeader.en;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section section-even" id="skills">
            <div className="container">
                <SectionHeader subtitle={header.subtitle} title={header.title} />
                <div className={styles.skillsContainer} ref={sectionRef}>
                    {categories.map((category) => (
                        <div key={category.title} className={styles.skillsCategory}>
                            <h3 className={styles.skillsCategoryTitle}>
                                <i className={category.icon}></i> {category.title}
                            </h3>
                            <div className={styles.skillItems}>
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className={styles.skillItem}>
                                        <div className={styles.skillInfo}>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            <span className={styles.skillPercent}>{skill.percent}%</span>
                                        </div>
                                        <div className={styles.skillBar}>
                                            <div
                                                className={`${styles.skillFill} ${animated ? styles.animated : ''}`}
                                                style={{ '--skill-width': `${skill.percent}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
