'use client';

import styles from './Certificates.module.css';
import SectionHeader from './SectionHeader';
import { certificates } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

function CertificateCard({ cert }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div ref={ref} className={`${styles.certificateCard} ${isVisible ? 'reveal revealed' : 'reveal'}`}>
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
    return (
        <section className="section section-even" id="certificates">
            <div className="container">
                <SectionHeader subtitle="Professional Credentials" title="Certificates & Achievements" />
                <div className={styles.certificatesGrid}>
                    {certificates.map((cert) => (
                        <CertificateCard key={cert.title} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}
