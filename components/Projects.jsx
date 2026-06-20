// 'use client';

// import Image from 'next/image';
// import styles from './Projects.module.css';
// import SectionHeader from './SectionHeader';
// import { projects } from '@/data/portfolio';
// import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// function ProjectCard({ project }) {
//     const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

//     return (
//         <div ref={ref} className={`${styles.projectCard} ${isVisible ? 'reveal revealed' : 'reveal'}`}>
//             <div className={styles.projectImage}>
//                 <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={600}
//                     height={375}
//                     loading="lazy"
//                 />
//                 <div className={styles.projectOverlay}>
//                     <a href={project.github} className={styles.projectLink} aria-label="View source code">
//                         <i className="fab fa-github"></i>
//                     </a>
//                     <a href={project.live} className={styles.projectLink} aria-label="View live demo">
//                         <i className="fas fa-external-link-alt"></i>
//                     </a>
//                 </div>
//             </div>
//             <div className={styles.projectInfo}>
//                 <h3 className={styles.projectTitle}>{project.title}</h3>
//                 <p className={styles.projectDescription}>{project.description}</p>
//                 <div className={styles.projectTags}>
//                     {project.tags.map((tag) => (
//                         <span key={tag} className={styles.tag}>{tag}</span>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function Projects() {
//     return (
//         <section className="section" id="projects">
//             <div className="container">
//                 <SectionHeader subtitle="My Recent Works" title="Featured Projects" />
//                 <div className={styles.projectsGrid}>
//                     {projects.map((project) => (
//                         <ProjectCard key={project.title} project={project} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
