'use client';

import { useState } from 'react';
import styles from './CodeMockup.module.css';

export default function CodeMockup() {
    const [activeFile, setActiveFile] = useState('Developer.jsx');

    const files = [
        { name: 'Developer.jsx', icon: 'fab fa-react', color: '#61dafb' },
        { name: 'Skills.css', icon: 'fas fa-hashtag', color: '#e389b9' },
        { name: 'Experience.json', icon: 'fas fa-braces', color: '#ffd54f' }
    ];

    return (
        <div className={styles.ideContainer}>
            {/* macOS Window Header */}
            <div className={styles.ideHeader}>
                <div className={styles.windowControls}>
                    <span className={`${styles.dot} ${styles.close}`}></span>
                    <span className={`${styles.dot} ${styles.minimize}`}></span>
                    <span className={`${styles.dot} ${styles.maximize}`}></span>
                </div>
                <div className={styles.tabContainer}>
                    <div className={styles.tab}>
                        <i className={activeFile === 'Developer.jsx' ? 'fab fa-react' : activeFile === 'Skills.css' ? 'fas fa-hashtag' : 'fas fa-braces'} 
                           style={{ color: activeFile === 'Developer.jsx' ? '#61dafb' : activeFile === 'Skills.css' ? '#e389b9' : '#ffd54f' }}></i>
                        <span>{activeFile}</span>
                        <span className={styles.closeTab}>×</span>
                    </div>
                </div>
            </div>

            {/* IDE Workspace */}
            <div className={styles.ideWorkspace}>
                {/* Sidebar */}
                <div className={styles.ideSidebar}>
                    <div className={styles.sidebarTitle}>EXPLORER</div>
                    <ul className={styles.fileList}>
                        {files.map(file => (
                            <li 
                                key={file.name} 
                                className={`${styles.fileItem} ${activeFile === file.name ? styles.activeFile : ''}`}
                                onClick={() => setActiveFile(file.name)}
                            >
                                <i className={file.icon} style={{ color: file.color }}></i>
                                <span>{file.name}</span>
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
                    
                    <div className={styles.codeViewport}>
                        {activeFile === 'Developer.jsx' && (
                            <pre className={styles.codeContent}>
                                <code>
                                    <span className={styles.keyword}>import</span> <span className={styles.variable}>React</span> <span className={styles.keyword}>from</span> <span className={styles.string}>'react'</span>;<span className={styles.comment}> // UI rendering</span>{'\n'}
                                    {'\n'}
                                    <span className={styles.keyword}>const</span> <span className={styles.function}>Developer</span> = () =&gt; &#123;{'\n'}
                                    {'    '}<span className={styles.keyword}>return</span> ({'\n'}
                                    {'        '}&lt;<span className={styles.tag}>Profile</span>{'\n'}
                                    {'            '}<span className={styles.attr}>name</span>=<span className={styles.string}>"Aye Myat Mon"</span>{'\n'}
                                    {'            '}<span className={styles.attr}>role</span>=<span className={styles.string}>"Frontend Developer"</span>{'\n'}
                                    {'            '}<span className={styles.attr}>experience</span>=<span className={styles.string}>"3+ Years"</span>{'\n'}
                                    {'            '}<span className={styles.attr}>languages</span>=&#123;[<span className={styles.string}>"English"</span>, <span className={styles.string}>"Japanese"</span>]&#125;{'\n'}
                                    {'            '}<span className={styles.attr}>available</span>=&#123;<span className={styles.literal}>true</span>&#125;{'\n'}
                                    {'        '}/&gt;{'\n'}
                                    {'    '});{'\n'}
                                    &#125;;{'\n'}
                                    {'\n'}
                                    <span className={styles.keyword}>export default</span> <span className={styles.function}>Developer</span>;
                                </code>
                            </pre>
                        )}
                        {activeFile === 'Skills.css' && (
                            <pre className={styles.codeContent}>
                                <code>
                                    <span className={styles.tag}>.developer-skills</span> &#123;{'\n'}
                                    {'    '}<span className={styles.attr}>core-frameworks</span>: <span className={styles.string}>React, Next.js, Redux</span>;{'\n'}
                                    {'    '}<span className={styles.attr}>styling-engines</span>: <span className={styles.string}>CSS Modules, Tailwind CSS</span>;{'\n'}
                                    {'    '}<span className={styles.attr}>languages</span>: <span className={styles.string}>JavaScript, TypeScript, Java</span>;{'\n'}
                                    {'    '}<span className={styles.attr}>cross-platform</span>: <span className={styles.string}>Electron.js (Desktop App)</span>;{'\n'}
                                    {'    '}<span className={styles.attr}>unit-testing</span>: <span className={styles.string}>Jest, JUnit</span>;{'\n'}
                                    &#125;{'\n'}
                                    {'\n'}
                                    <span className={styles.tag}>.productivity-setup</span> &#123;{'\n'}
                                    {'    '}<span className={styles.attr}>code-quality</span>: <span className={styles.string}>clean, modular, optimized</span>;{'\n'}
                                    {'    '}<span className={styles.attr}>team-sync</span>: <span className={styles.string}>Agile, Git workflows</span>;{'\n'}
                                    &#125;
                                </code>
                            </pre>
                        )}
                        {activeFile === 'Experience.json' && (
                            <pre className={styles.codeContent}>
                                <code>
                                    &#123;{'\n'}
                                    {'    '}<span className={styles.attr}>"currentCompany"</span>: <span className={styles.string}>"Global Innovation Consulting (GIC)"</span>,{'\n'}
                                    {'    '}<span className={styles.attr}>"status"</span>: <span className={styles.string}>"Full-time IT Programmer"</span>,{'\n'}
                                    {'    '}<span className={styles.attr}>"locations"</span>: [<span className={styles.string}>"Tokyo, Japan"</span>, <span className={styles.string}>"Yangon"</span>],{'\n'}
                                    {'    '}<span className={styles.attr}>"milestones"</span>: &#123;{'\n'}
                                    {'        '}<span className={styles.attr}>"2025"</span>: <span className={styles.string}>"AOTS Onsite Japan Training (Miyazaki)"</span>,{'\n'}
                                    {'        '}<span className={styles.attr}>"2023-2024"</span>: <span className={styles.string}>"Digital Base React Developer"</span>{'\n'}
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
