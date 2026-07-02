'use client';

import styles from './Certificates.module.css';
import SectionHeader from './SectionHeader';
import { certificates } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/hooks/useLanguage';

function CertificateCard({ cert }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        const angleX = -(y - yc) / 15; // Sensitivity
        const angleY = (x - xc) / 15;
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'transform 0.05s ease';
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.4s ease-out';
    };

    return (
        <div 
            ref={ref} 
            className={`${styles.certificateCard} ${isVisible ? 'reveal revealed' : 'reveal'}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.certificateIcon}>
                <i className={cert.icon}></i>
            </div>
            <div className={styles.certificateContent}>
                <h3>{cert.title}</h3>
                <p className={styles.certificateIssuer}>{cert.issuer}</p>
                <p className={styles.certificateDate}>
                    <i className="far fa-calendar-alt"></i> {cert.year}
                </p>
                <p className={styles.certificateDescription}>{cert.description}</p>
            </div>
        </div>
    );
}

export default function Certificates() {
    const { lang } = useLanguage();

    const list = certificates[lang] ?? certificates.en;
    const header = certificates.sectionHeader[lang] ?? certificates.sectionHeader.en;

    return (
        <section className="section section-even" id="certificates">
            <div className="container">
                <SectionHeader subtitle={header.subtitle} title={header.title} />
                <div className={styles.certificatesGrid}>
                    {list.map((cert) => (
                        <CertificateCard key={cert.title} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}
