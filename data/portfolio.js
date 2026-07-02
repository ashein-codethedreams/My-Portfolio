// ============================================================
//  BILINGUAL PORTFOLIO DATA  (en = English, ja = Japanese)
// ============================================================

export const navLinks = {
    en: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#certificates', label: 'Certificates' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ],
    ja: [
        { href: '#home', label: 'ホーム' },
        { href: '#about', label: '自己紹介' },
        { href: '#projects', label: 'プロジェクト' },
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
            cv: 'View Resume',
            cvFile: '/assets/Resume_AyeMyatMon_EN.html',
        },
    },
    ja: {
        greeting: 'はじめまして、',
        title: 'フロントエンドエンジニア',
        description:
            'モダンな技術を用いて、美しくレスポンシブなWebアプリケーションを開発しています。クリーンなコード・パフォーマンス最適化・優れたユーザー体験の創出に情熱を注いでいます。',
        cta: {
            contact: 'お問い合わせ',
            cv: '履歴書を表示',
            cvFile: '/assets/Resume_AyeMyatMon_JP.html',
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
            'I\'m a dedicated Frontend Developer with <strong>3+ years of experience</strong> building modern web applications. I specialize in React, Next.js, and TypeScript, creating seamless user interfaces that combine visual appeal and high performance.',
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
            description: 'Professional Certificate of Completion for the Digital Base Internship Program.',
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
            description: 'Introduction to programming course authorized by the University of Edinburgh.',
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
        en: { subtitle: 'My Journey', title: 'Work Experience' },
        ja: { subtitle: '私の歩み', title: '実務経歴' },
    },
    stats: {
        en: [
            { number: '3+', label: 'Years Exp.' },
            { number: '6+', label: 'Real Projects' },
            { number: '2', label: 'Countries Worked' },
            { number: 'JLPT N3', label: 'Language Level' },
        ],
        ja: [
            { number: '3年以上', label: '実務経験' },
            { number: '6件以上', label: '開発実績' },
            { number: '2ヶ国', label: '勤務経験国' },
            { number: 'JLPT N3', label: '日本語レベル' },
        ]
    },
    en: [
        {
            company: 'Global Innovation Consulting (GIC) Inc.',
            role: 'IT Programmer',
            location: 'Tokyo, Japan / Yangon, Myanmar',
            period: 'Jan 2025 – Feb 2026',
            description: 'Developed and modernized client-facing web portals, ensuring top-tier code quality and integration.',
            highlights: [
                'Successfully modernized and implemented features for 4+ client-facing insurance websites using Java and Bootstrap.',
                'Planned and performed unit and integration testing pipelines aligning with strict Japanese enterprise standards.',
                'Collaborated in a cross-cultural environment, adapting to Japanese business workflows and methodologies.'
            ]
        },
        {
            company: 'GIC Japan / AOTS Training Program',
            role: 'Trainee Programmer',
            location: 'Miyazaki, Japan',
            period: '2025 (4 months intensive)',
            description: 'Selected for a specialized tech training program in Japan, focusing on modern enterprise architectures.',
            highlights: [
                'Studied transition pipelines for legacy codebases (COBOL, RPG, LANSA) to modern web systems.',
                'Studied cloud deployment basics on AWS and rapid application building using GeneXus.',
                'Experienced authentic Japanese workplace workflows and team dynamics directly.'
            ]
        },
        {
            company: 'Digital Base IT Company',
            role: 'React Developer',
            location: 'Yangon, Myanmar',
            period: 'Feb 2023 – Dec 2024',
            description: 'Owned client-side modular architectures and frontend system integrations for high-performance applications.',
            highlights: [
                'Engineered key LMS elements, including an automated exam evaluation engine and dynamic PDF certificate generation.',
                'Built fully responsive layouts and order workflows for panoramyanmar.com online bookstore.',
                'Packaged an e-commerce dashboard as a cross-platform desktop tool using Electron.js with Excel reporting.'
            ]
        }
    ],
    ja: [
        {
            company: 'Global Innovation Consulting (GIC) 株式会社',
            role: 'ITプログラマー',
            location: '東京 / ヤンゴン',
            period: '2025年1月 ～ 2026年2月',
            description: 'クライアント企業向けシステム開発ポータルサイトの構築・移行、およびテスト設計とコーディングを担当。',
            highlights: [
                'Java、Bootstrapを用い、日本企業向けの保険関連ポータルサイト（4サイト以上）のモダン化を担当。',
                '詳細な単体・結合テストプロセスを設計・実施し、日本の厳しいエンタープライズ品質基準を満たしました。',
                '日本チームとの直接的な連携を通じ、日本のビジネスマナーや開発フローに適応して業務を進めました。'
            ]
        },
        {
            company: 'GIC日本／AOTS実務研修プログラム',
            role: '実務研修生プログラマー',
            location: '日本・宮崎県',
            period: '2025年 (4ヶ月間)',
            description: 'システムモダナイゼーションに焦点を当てた、日本現地での集中実務研修生に選抜。',
            highlights: [
                'COBOLやRPGといったレガシープログラムから、モダンなWebシステムへの移行プロセスを習得。',
                'AWSによるクラウド基盤設計の基礎、およびGeneXusを用いたローコードでの高速開発手法を学習。',
                '日本の現場におけるプロジェクト管理、チームコラボレーション、専門的なプロセスを実践しました。'
            ]
        },
        {
            company: 'Digital Base IT Company',
            role: 'React開発エンジニア',
            location: 'ヤンゴン、ミャンマー',
            period: '2023年2月 ～ 2024年12月',
            description: '専任フロントエンドデベロッパーとして、システム基本設計・API連携・ステート管理等を担当。',
            highlights: [
                '学習管理システム(LMS)において、テスト自動評価エンジンと動的なPDF修了証書生成機能を開発。',
                'オンライン書店(panoramyanmar.com)のカート設計、チェックアウトフローおよびレスポンシブデザインの実装。',
                'Electron、Chart.js、Excel出力モジュールを用い、店舗オーナー向け店舗管理ダッシュボードアプリをパッケージ開発。'
            ]
        }
    ]
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
            { href: '#projects', label: 'Projects' },
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
            { href: '#projects', label: 'プロジェクト' },
            { href: '#contact', label: 'お問い合わせ' },
        ],
        connect: 'SNS',
        quickLinksLabel: 'クイックリンク',
        copyright: (year) => `© ${year} Aye Myat Mon. All rights reserved.`,
    },
};

export const projects = {
    sectionHeader: {
        en: { subtitle: 'My Works', title: 'Featured Projects' },
        ja: { subtitle: '制作実績', title: '主要開発実績' },
    },
    en: [
        {
            title: 'Learning Management System (LMS)',
            description: 'A comprehensive platform for course, user, and content management, featuring a dedicated admin portal, automated exam evaluation, and dynamic certification issuance.',
            tags: ['React', 'Next.js', 'Redux', 'REST API'],
            github: 'https://github.com/ashein-codethedreams',
            live: '#',
            icon: 'fas fa-graduation-cap'
        },
        {
            title: 'Online Book Shop',
            description: 'A fully responsive online bookstore with an interactive catalog, search system, shopping cart manager, and integrated order handling.',
            tags: ['React', 'CSS Modules', 'Responsive Layout'],
            github: 'https://github.com/ashein-codethedreams',
            live: 'https://panoramyanmar.com',
            icon: 'fas fa-book'
        },
        {
            title: 'HR Administration System',
            description: 'Internal enterprise portal for employee and department organization, automated payroll calculation, and interactive event calendar module.',
            tags: ['React', 'Next.js', 'State Management'],
            github: 'https://github.com/ashein-codethedreams',
            live: '#',
            icon: 'fas fa-users-cog'
        },
        {
            title: 'E-commerce Admin Portal',
            description: 'A packaged cross-platform desktop management application featuring bulk processing tools, analytical charts, and automated Excel reporting systems.',
            tags: ['Electron.js', 'React', 'Chart.js', 'Excel Export'],
            github: 'https://github.com/ashein-codethedreams',
            live: '#',
            icon: 'fas fa-store'
        }
    ],
    ja: [
        {
            title: '学習管理システム (LMS)',
            description: 'コース・ユーザー・教材コンテンツ管理を統合した学習プラットフォーム。専用管理者ポータル、テストの自動評価システム、証明書の動的PDF生成機能を実装。',
            tags: ['React', 'Next.js', 'Redux', 'REST API'],
            github: 'https://github.com/ashein-codethedreams',
            live: '#',
            icon: 'fas fa-graduation-cap'
        },
        {
            title: 'オンライン書店 (パノラマミャンマー)',
            description: 'インタラクティブな書籍検索、カート管理、注文処理フローを実装した、完全モバイルレスポンシブ対応のオンライン書店ECサイト。',
            tags: ['React', 'CSS Modules', 'モバイルレスポンシブ'],
            github: 'https://github.com/ashein-codethedreams',
            live: 'https://panoramyanmar.com',
            icon: 'fas fa-book'
        },
        {
            title: '人事労務管理システム',
            description: '社員・部署等の組織データ管理、月次給与計算の自動化、社内アナウンス・カレンダー表示を統合した社内向け管理ポータルサイト。',
            tags: ['React', 'Next.js', 'ステート管理'],
            github: 'https://github.com/ashein-codethedreams',
            live: '#',
            icon: 'fas fa-users-cog'
        },
        {
            title: 'Eコマースデスクトップ管理ツール',
            description: 'Electronを用いてデスクトップアプリ化された店舗用管理ポータル。大量データの一括バッチ処理、売上チャート、Excel出力によるレポート機能を搭載。',
            tags: ['Electron.js', 'React', 'Chart.js', 'Excel出力'],
            github: 'https://github.com/ashein-codethedreams',
            live: '#',
            icon: 'fas fa-store'
        }
    ]
};
