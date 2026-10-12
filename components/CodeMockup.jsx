'use client';

/* Code examples intentionally render literal quote characters. */
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import styles from './CodeMockup.module.css';
import { heroData } from '@/data/portfolio';
import { useLanguage } from '@/hooks/useLanguage';

const FILES = [
    { name: 'Developer.jsx', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Skills.css', icon: 'fas fa-hashtag', color: '#e389b9' },
    { name: 'Experience.json', icon: 'fas fa-braces', color: '#ffd54f' },
];

export default function CodeMockup() {
    const [activeFile, setActiveFile] = useState('Developer.jsx');
    const { lang } = useLanguage();
    const name = heroData.name[lang] ?? heroData.name.en;

    const handleTabKeyDown = (event, currentIndex) => {
        let nextIndex;

        switch (event.key) {
            case 'ArrowRight':
                nextIndex = (currentIndex + 1) % FILES.length;
                break;
            case 'ArrowLeft':
                nextIndex = (currentIndex - 1 + FILES.length) % FILES.length;
                break;
            case 'Home':
                nextIndex = 0;
                break;
            case 'End':
                nextIndex = FILES.length - 1;
                break;
            default:
                return;
        }

        event.preventDefault();
        const nextFile = FILES[nextIndex];
        setActiveFile(nextFile.name);
        document.getElementById(`tab-${nextFile.name}`)?.focus();
    };

    return (
        <div className={styles.ideContainer}>
            {/* macOS Window Header */}
            <div className={styles.ideHeader}>
                <div className={styles.windowControls}>
                    <span className={`${styles.dot} ${styles.close}`}></span>
                    <span className={`${styles.dot} ${styles.minimize}`}></span>
                    <span className={`${styles.dot} ${styles.maximize}`}></span>
                </div>
                <div className={styles.tabContainer} role="tablist" aria-label="Code files">
                    {FILES.map((file) => (
                        <button
                            type="button"
                            key={file.name}
                            id={`tab-${file.name}`}
                            role="tab"
                            className={`${styles.tab} ${activeFile === file.name ? styles.activeTab : ''}`}
                            onClick={() => setActiveFile(file.name)}
                            onKeyDown={(event) => handleTabKeyDown(event, FILES.indexOf(file))}
                            tabIndex={activeFile === file.name ? 0 : -1}
                            aria-selected={activeFile === file.name}
                            aria-controls="code-preview"
                        >
                            <i
                                className={file.icon}
                                style={{ color: file.color }}
                                aria-hidden="true"
                            ></i>
                            <span>{file.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* IDE Workspace */}
            <div className={styles.ideWorkspace}>
                {/* Sidebar Explorer (Hidden on mobile) */}
                <div className={styles.ideSidebar}>
                    <div className={styles.sidebarTitle}>EXPLORER</div>
                    <ul className={styles.fileList}>
                        {FILES.map((file) => (
                            <li key={file.name}>
                                <button
                                    type="button"
                                    className={`${styles.fileItem} ${activeFile === file.name ? styles.activeFile : ''}`}
                                    onClick={() => setActiveFile(file.name)}
                                    aria-pressed={activeFile === file.name}
                                >
                                    <i
                                        className={file.icon}
                                        style={{ color: file.color }}
                                        aria-hidden="true"
                                    ></i>
                                    <span>{file.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Code Editor */}
                <div className={styles.editorArea}>
                    <div className={styles.lineNumbers}>
                        {Array.from({ length: 15 }, (_, i) => (
                            <span key={i}>{i + 1}</span>
                        ))}
                    </div>

                    <div
                        id="code-preview"
                        className={styles.codeViewport}
                        role="tabpanel"
                        aria-labelledby={`tab-${activeFile}`}
                    >
                        {activeFile === 'Developer.jsx' && (
                            <pre className={styles.codeContent}>
                                <code>
                                    <span className={styles.keyword}>import</span>{' '}
                                    <span className={styles.variable}>React</span>{' '}
                                    <span className={styles.keyword}>from</span>{' '}
                                    <span className={styles.string}>'react'</span>;{'\n'}
                                    {'\n'}
                                    <span className={styles.keyword}>const</span>{' '}
                                    <span className={styles.function}>Developer</span> = () =&gt;
                                    &#123;{'\n'}
                                    {'  '}
                                    <span className={styles.keyword}>return</span> ({'\n'}
                                    {'    '}&lt;<span className={styles.tag}>Profile</span>
                                    {'\n'}
                                    {'      '}
                                    <span className={styles.attr}>name</span>=
                                    <span className={styles.string}>"{name}"</span>
                                    {'\n'}
                                    {'      '}
                                    <span className={styles.attr}>role</span>=
                                    <span className={styles.string}>"Frontend Developer"</span>
                                    {'\n'}
                                    {'      '}
                                    <span className={styles.attr}>experience</span>=
                                    <span className={styles.string}>"3+ Years"</span>
                                    {'\n'}
                                    {'      '}
                                    <span className={styles.attr}>languages</span>=&#123;[
                                    <span className={styles.string}>"English"</span>,{' '}
                                    <span className={styles.string}>"Japanese"</span>]&#125;{'\n'}
                                    {'      '}
                                    <span className={styles.attr}>available</span>=&#123;
                                    <span className={styles.literal}>true</span>&#125;{'\n'}
                                    {'    '}/&gt;{'\n'}
                                    {'  '});{'\n'}
                                    &#125;;{'\n'}
                                    {'\n'}
                                    <span className={styles.keyword}>export default</span>{' '}
                                    <span className={styles.function}>Developer</span>;
                                </code>
                            </pre>
                        )}
                        {activeFile === 'Skills.css' && (
                            <pre className={styles.codeContent}>
                                <code>
                                    <span className={styles.tag}>.developer-skills</span> &#123;
                                    {'\n'}
                                    {'    '}
                                    <span className={styles.attr}>core-frameworks</span>:{' '}
                                    <span className={styles.string}>React, Next.js, Redux</span>;
                                    {'\n'}
                                    {'    '}
                                    <span className={styles.attr}>styling-engines</span>:{' '}
                                    <span className={styles.string}>CSS Modules, Tailwind CSS</span>
                                    ;{'\n'}
                                    {'    '}
                                    <span className={styles.attr}>languages</span>:{' '}
                                    <span className={styles.string}>
                                        JavaScript, TypeScript, Java
                                    </span>
                                    ;{'\n'}
                                    {'    '}
                                    <span className={styles.attr}>cross-platform</span>:{' '}
                                    <span className={styles.string}>Electron.js (Desktop App)</span>
                                    ;{'\n'}
                                    {'    '}
                                    <span className={styles.attr}>unit-testing</span>:{' '}
                                    <span className={styles.string}>Jest, JUnit</span>;{'\n'}
                                    &#125;{'\n'}
                                    {'\n'}
                                    <span className={styles.tag}>.productivity-setup</span> &#123;
                                    {'\n'}
                                    {'    '}
                                    <span className={styles.attr}>code-quality</span>:{' '}
                                    <span className={styles.string}>clean, modular, optimized</span>
                                    ;{'\n'}
                                    {'    '}
                                    <span className={styles.attr}>team-sync</span>:{' '}
                                    <span className={styles.string}>Agile, Git workflows</span>;
                                    {'\n'}
                                    &#125;
                                </code>
                            </pre>
                        )}
                        {activeFile === 'Experience.json' && (
                            <pre className={styles.codeContent}>
                                <code>
                                    &#123;{'\n'}
                                    {'    '}
                                    <span className={styles.attr}>"status"</span>:{' '}
                                    <span className={styles.string}>"Freelance & Studying"</span>,
                                    {'\n'}
                                    {'    '}
                                    <span className={styles.attr}>"locations"</span>: [
                                    <span className={styles.string}>"Yangon"</span>,{' '}
                                    <span className={styles.string}>"Remote"</span>],{'\n'}
                                    {'    '}
                                    <span className={styles.attr}>"milestones"</span>: &#123;{'\n'}
                                    {'        '}
                                    <span className={styles.attr}>"2025-2026"</span>:{' '}
                                    <span className={styles.string}>"IT Programmer at GIC"</span>,
                                    {'\n'}
                                    {'        '}
                                    <span className={styles.attr}>"2023-2024"</span>:{' '}
                                    <span className={styles.string}>
                                        "Digital Base React Developer"
                                    </span>
                                    {'\n'}
                                    {'    '}&#125;{'\n'}
                                    &#125;
                                </code>
                            </pre>
                        )}
                        <span className={styles.blinkingCursor}></span>
                    </div>
                </div>
            </div>

            {/* Orbiting Tech Badges in Background */}
            <div className={`${styles.techBadge} ${styles.badgeReact}`}>
                <i className="fab fa-react"></i>
            </div>
            <div className={`${styles.techBadge} ${styles.badgeCss}`}>
                <i className="fab fa-css3-alt"></i>
            </div>
            <div className={`${styles.techBadge} ${styles.badgeJs}`}>
                <i className="fab fa-js-square"></i>
            </div>
        </div>
    );
}
