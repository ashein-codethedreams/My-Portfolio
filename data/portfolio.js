// ============================================================
//  BILINGUAL PORTFOLIO DATA  (en = English, ja = Japanese)
// ============================================================

export const navLinks = {
    en: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#certificates', label: 'Certificates' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ],
    ja: [
        { href: '#home', label: 'ホーム' },
        { href: '#about', label: '自己紹介' },
        { href: '#skills', label: 'スキル' },
        { href: '#certificates', label: '資格・証明書' },
        { href: '#experience', label: '経験' },
        { href: '#contact', label: 'お問い合わせ' },
    ],
};

export const heroData = {
    name: 'Aye Myat Mon',
    image: '/images/hero-illustration.png',
    socials: [
        { href: 'https://github.com/ashein-codethedreams', icon: 'fab fa-github', label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/aye-myat-mon-7a9b65214/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
        { href: 'mailto:heroglasses155@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
    ],
    en: {
        greeting: "Hello, I'm",
        title: 'Frontend Software Developer',
        description:
            'I craft beautiful, responsive and user-friendly web applications with modern technologies. Passionate about clean code, performance optimization, and creating delightful user experiences.',
        cta: {
            contact: 'Get In Touch',
            cv: 'Download CV',
            cvFile: '/assets/Resume_AyeMyatMon.pdf',
        },
    },
    ja: {
        greeting: 'はじめまして、',
        title: 'フロントエンドエンジニア',
        description:
            'モダンな技術を用いて、美しくレスポンシブなWebアプリケーションを開発しています。クリーンなコード・パフォーマンス最適化・優れたユーザー体験の創出に情熱を注いでいます。',
        cta: {
            contact: 'お問い合わせ',
            cv: '履歴書DL',
            cvFile: '/assets/Resume_AyeMyatMon.pdf',
        },
    },
};

export const aboutData = {
    sectionHeader: {
        en: { subtitle: 'Get To Know Me', title: 'About Me' },
        ja: { subtitle: '自己紹介', title: '私について' },
    },
    en: {
        paragraphs: [
            'I\'m a dedicated Frontend Developer with <strong>3+ years of experience</strong> building modern web applications. I specialize in React, Next.js, and TypeScript, creating seamless user interfaces that are both visually appealing and highly performant.',
            'My approach combines clean code practices with creative problem-solving to deliver solutions that exceed expectations. I believe in continuous learning and staying at the forefront of web technologies.',
        ],
        expertise: [
            {
                icon: 'fas fa-rocket',
                title: 'Performance',
                description: 'Optimized, fast-loading applications with excellent Core Web Vitals scores.',
            },
            {
                icon: 'fas fa-users',
                title: 'Collaboration',
                description: 'Strong communicator who thrives in agile teams and cross-functional projects.',
            },
        ],
    },
    ja: {
        paragraphs: [
            'React・Next.js・TypeScriptを専門とする、<strong>3年以上の実務経験</strong>を持つフロントエンドエンジニアです。視覚的に優れ、高パフォーマンスなUIの設計・構築を得意としています。',
            'クリーンなコードとクリエイティブな問題解決を組み合わせ、期待を超えるソリューションを提供します。継続的な学習とWeb技術の最前線を追い続けることを大切にしています。',
        ],
        expertise: [
            {
                icon: 'fas fa-rocket',
                title: 'パフォーマンス',
                description: 'Core Web Vitalsに優れた、高速で最適化されたアプリケーションを構築します。',
            },
            {
                icon: 'fas fa-users',
                title: 'チームワーク',
                description: 'アジャイル開発チームや多部署横断プロジェクトで力を発揮するコミュニケーターです。',
            },
        ],
    },
};

export const skillCategories = {
    sectionHeader: {
        en: { subtitle: 'What I Work With', title: 'Skills & Expertise' },
        ja: { subtitle: '使用技術', title: 'スキル・専門技術' },
    },
    en: [
        {
            icon: 'fas fa-code',
            title: 'Languages',
            skills: [
                { name: 'JavaScript', percent: 92 },
                { name: 'TypeScript', percent: 70 },
                { name: 'HTML5', percent: 95 },
                { name: 'Java', percent: 90 },
                { name: 'Python', percent: 70 },
            ],
        },
        {
            icon: 'fas fa-layer-group',
            title: 'Frameworks & Libraries',
            skills: [
                { name: 'React', percent: 90 },
                { name: 'Next.js', percent: 85 },
                { name: 'Vue.js', percent: 75 },
                { name: 'Tailwind CSS', percent: 88 },
                { name: 'Redux', percent: 82 },
            ],
        },
    ],
    ja: [
        {
            icon: 'fas fa-code',
            title: '言語',
            skills: [
                { name: 'JavaScript', percent: 92 },
                { name: 'TypeScript', percent: 70 },
                { name: 'HTML5', percent: 95 },
                { name: 'Java', percent: 90 },
                { name: 'Python', percent: 70 },
            ],
        },
        {
            icon: 'fas fa-layer-group',
            title: 'フレームワーク・ライブラリ',
            skills: [
                { name: 'React', percent: 90 },
                { name: 'Next.js', percent: 85 },
                { name: 'Vue.js', percent: 75 },
                { name: 'Tailwind CSS', percent: 88 },
                { name: 'Redux', percent: 82 },
            ],
        },
    ],
};

export const certificates = {
    sectionHeader: {
        en: { subtitle: 'Professional Credentials', title: 'Certificates & Achievements' },
        ja: { subtitle: '専門資格', title: '資格・受賞歴' },
    },
    en: [
        {
            icon: 'fas fa-award',
            title: 'React Developer',
            issuer: 'Digital Base',
            year: '2023',
            description: 'Professional certificate of Completion for Digital Base Internship Program.',
        },
        {
            icon: 'fas fa-certificate',
            title: 'React - The Complete Guide',
            issuer: 'Udemy',
            year: '2023',
            description: 'Comprehensive React course including Hooks, Redux, Next.js, and React Router.',
        },
        {
            icon: 'fas fa-medal',
            title: 'Code Yourself! An Introduction to Programming',
            issuer: 'Coursera',
            year: '2020',
            description: 'Introduction to programming course authorized by The University of Edinburgh.',
        },
    ],
    ja: [
        {
            icon: 'fas fa-award',
            title: 'Reactデベロッパー認定',
            issuer: 'Digital Base',
            year: '2023',
            description: 'Digital Baseインターンシッププログラム修了の専門資格。',
        },
        {
            icon: 'fas fa-certificate',
            title: 'React - 完全ガイド',
            issuer: 'Udemy',
            year: '2023',
            description: 'Hooks・Redux・Next.js・React Routerを含む包括的なReactコース修了証。',
        },
        {
            icon: 'fas fa-medal',
            title: 'Code Yourself! プログラミング入門',
            issuer: 'Coursera',
            year: '2020',
            description: 'エジンバラ大学公認のプログラミング入門コース修了証。',
        },
    ],
};

export const experienceData = {
    sectionHeader: {
        en: { subtitle: 'My Journey', title: 'Foreign Training Experience' },
        ja: { subtitle: '私の歩み', title: '海外技術研修経験' },
    },
    en: {
        badge: 'AOTS Japan',
        title: 'Specialized Technical Training',
        location: 'Miyazaki, Japan',
        period: '4 months intensive program',
        description:
            'Completed an intensive software development training program at a leading tech hub, gaining hands-on experience, agile methodologies, and collaborative software engineering. Worked alongside Japanese teams on projects.',
        highlights: [
            'Modernization',
            'Legacy programming languages',
            'CI/CD pipeline management',
            'Cross-cultural team collaboration',
        ],
        stats: [
            { number: '4', label: 'Months' },
            { number: '4+', label: 'Languages' },
            { number: '20+', label: 'Colleagues' },
            { number: '2', label: 'Countries' },
        ],
    },
    ja: {
        badge: 'AOTS 日本',
        title: '専門技術研修プログラム',
        location: '宮崎県、日本',
        period: '4ヶ月間の集中プログラム',
        description:
            '主要なテックハブにて集中的なソフトウェア開発研修プログラムを修了。実践的なスキル・アジャイル手法・協調的なソフトウェアエンジニアリングを習得し、日本のチームとともにプロジェクトに取り組みました。',
        highlights: [
            'システムモダナイゼーション',
            'レガシー言語対応',
            'CI/CDパイプライン管理',
            '異文化チームでの協働',
        ],
        stats: [
            { number: '4', label: 'ヶ月' },
            { number: '4+', label: '言語' },
            { number: '20+', label: '同僚' },
            { number: '2', label: 'ヶ国' },
        ],
    },
};

export const contactData = {
    sectionHeader: {
        en: { subtitle: "Let's Talk", title: 'Get In Touch' },
        ja: { subtitle: 'ご連絡ください', title: 'お問い合わせ' },
    },
    en: {
        intro: "I'm always open to discussing new opportunities, creative ideas, or just having a friendly chat.",
        availableBadge: 'Available for Work',
        details: [
            { icon: 'fas fa-envelope', label: 'Email', value: 'heroglasses155@gmail.com', href: 'mailto:heroglasses155@gmail.com' },
            { icon: 'fas fa-phone-alt', label: 'Phone', value: '+95 9454041324', href: 'tel:+959454041324' },
            { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Hlaing, Yangon', href: null },
        ],
    },
    ja: {
        intro: '新しい機会やクリエイティブなアイデアについて、お気軽にご連絡ください。',
        availableBadge: 'お仕事募集中',
        details: [
            { icon: 'fas fa-envelope', label: 'メール', value: 'heroglasses155@gmail.com', href: 'mailto:heroglasses155@gmail.com' },
            { icon: 'fas fa-phone-alt', label: '電話', value: '+95 9454041324', href: 'tel:+959454041324' },
            { icon: 'fas fa-map-marker-alt', label: '所在地', value: 'ヤンゴン、ミャンマー', href: null },
        ],
    },
};

export const footerData = {
    brand: 'Portfolio',
    socials: [
        { href: 'https://github.com/ashein-codethedreams', icon: 'fab fa-github', label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/aye-myat-mon-7a9b65214/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
        { href: 'mailto:heroglasses155@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
    ],
    en: {
        tagline: 'Building beautiful web experiences, one pixel at a time.',
        quickLinks: [
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#contact', label: 'Contact' },
        ],
        connect: 'Connect',
        quickLinksLabel: 'Quick Links',
        copyright: (year) => `© ${year} Aye Myat Mon. All rights reserved.`,
    },
    ja: {
        tagline: '一ピクセルずつ、美しいWeb体験を築いています。',
        quickLinks: [
            { href: '#home', label: 'ホーム' },
            { href: '#about', label: '自己紹介' },
            { href: '#contact', label: 'お問い合わせ' },
        ],
        connect: 'SNS',
        quickLinksLabel: 'クイックリンク',
        copyright: (year) => `© ${year} エーミャッモン. All rights reserved.`,
    },
};
