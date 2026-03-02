'use client';

import styles from './BackToTop.module.css';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function BackToTop() {
    const { showBackToTop } = useScrollPosition();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`${styles.backToTop} ${showBackToTop ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}
