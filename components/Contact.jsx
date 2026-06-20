'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import SectionHeader from './SectionHeader';
import { contactData } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Contact() {
    const [infoRef, infoVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [formRef, formVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [submitState, setSubmitState] = useState('idle');

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

    const getButtonContent = () => {
        switch (submitState) {
            case 'sending':
                return <><i className="fas fa-spinner fa-spin"></i> Sending...</>;
            case 'sent':
                return <><i className="fas fa-check"></i> Message Sent!</>;
            default:
                return <><i className="fas fa-paper-plane"></i> Send Message</>;
        }
    };

    return (
        <section className="section section-even" id="contact">
            <div className="container">
                <SectionHeader subtitle="Let's Talk" title="Get In Touch" />
                <div className={styles.contactContainer}>
                    <div
                        ref={infoRef}
                        className={`${styles.contactInfo} ${infoVisible ? 'reveal revealed' : 'reveal'}`}
                    >
                        <p className={styles.contactIntro}>{contactData.intro}</p>
                        <div className={styles.contactDetails}>
                            {contactData.details.map((item) => (
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
                            Available for Work
                        </div>
                    </div>
                    {/* <form
                        ref={formRef}
                        className={`${styles.contactForm} ${formVisible ? 'reveal revealed' : 'reveal'}`}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="John Doe" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-primary btn-full ${submitState === 'sent' ? styles.btnSent : ''}`}
                            disabled={submitState !== 'idle'}
                        >
                            {getButtonContent()}
                        </button>
                    </form> */}
                </div>
            </div>
        </section>
    );
}
