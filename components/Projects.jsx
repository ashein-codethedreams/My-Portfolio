'use client';

import styles from './Projects.module.css';
import SectionHeader from './SectionHeader';
import { projects } from '@/data/portfolio';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/hooks/useLanguage';

function ProjectCard({ project }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const hasLiveLink = project.live && project.live !== '#';

    return (
        <div ref={ref} className={`${styles.projectCard} ${isVisible ? 'reveal revealed' : 'reveal'}`}>
            <div className={styles.projectHeader}>
                <div className={styles.projectIcon}>
                    <i className={project.icon}></i>
                </div>
                <div className={styles.projectActions}>
                    <a 
                        href={project.github} 
                        className={styles.projectLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="View source code"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    {hasLiveLink && (
                        <a 
                            href={project.live} 
                            className={styles.projectLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="View live demo"
                        >
                            <i className="fas fa-external-link-alt"></i>
                        </a>
                    )}
                </div>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const { lang } = useLanguage();

    const list = projects[lang] ?? projects.en;
    const header = projects.sectionHeader[lang] ?? projects.sectionHeader.en;

    return (
        <section className="section" id="projects">
            <div className="container">
                <SectionHeader subtitle={header.subtitle} title={header.title} />
                <div className={styles.projectsGrid}>
                    {list.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
