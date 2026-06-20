export const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
];

export const heroData = {
    greeting: 'Hello, I\'m',
    name: 'Aye Myat Mon',
    title: 'Frontend Software Developer',
    description:
        'I craft beautiful, responsive and user-friendly web applications with modern technologies. Passionate about clean code, performance optimization, and creating delightful user experiences.',
    socials: [
        { href: 'https://github.com/ashein-codethedreams', icon: 'fab fa-github', label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/aye-myat-mon-7a9b65214/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
        { href: 'mailto:heroglasses155@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
    ],
    image: '/images/hero-illustration.png',
};

export const aboutData = {
    image: '/images/about-illustration.png',
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
};

export const skillCategories = [
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
];

export const projects = [
    {
        image: '/images/project-taskapp.png',
        title: 'Task Management App',
        description:
            'A full-featured kanban-style task manager with drag & drop, real-time collaboration, and responsive design.',
        tags: ['React', 'TypeScript', 'Redux', 'Node.js'],
        github: '#',
        live: '#',
    },
    {
        image: '/images/project-ecommerce.png',
        title: 'E-Commerce Platform',
        description:
            'Modern shopping experience with product filtering, cart management, secure checkout, and admin dashboard.',
        tags: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
        github: '#',
        live: '#',
    },
    {
        image: '/images/project-weather.png',
        title: 'Weather Dashboard',
        description:
            'Real-time weather forecasting app with interactive maps, location search, and beautiful data visualizations.',
        tags: ['Vue.js', 'Chart.js', 'OpenWeather API'],
        github: '#',
        live: '#',
    },
];

export const certificates = [
    {
        icon: 'fas fa-award',
        title: 'React Developer',
        issuer: 'Digital Base',
        year: '2023',
        description:
            'Professional certificate of Completion for Digital Base Internship Program.',
    },
    {
        icon: 'fas fa-certificate',
        title: 'React - The Complete Guide',
        issuer: 'Udemy',
        year: '2023',
        description:
            'Comprehensive React course including Hooks, Redux, Next.js, and React Router.',
    },
    {
        icon: 'fas fa-medal',
        title: 'Code Yourself! An Introduction to Programming',
        issuer: 'Coursera',
        year: '2020',
        description:
            'Introduction to programming course authorized by The University of Edinburgh.',
    },
];

export const experienceData = {
    badge: 'AOTS',
    title: 'Specialized Technical Training',
    location: 'Miyazaki, Japan',
    period: '4 months intensive program',
    description:
        'Completed an intensive software development training program at a leading tech hub, gaining hands-on experience with modern development practices, agile methodologies, and collaborative software engineering. Worked alongside japanese teams on projects.',
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
};

export const contactData = {
    intro:
        "I'm always open to discussing new opportunities, creative ideas, or just having a friendly chat.",
    details: [
        { icon: 'fas fa-envelope', label: 'Email', value: 'heroglasses155.com', href: 'mailto:heroglasses155.com' },
        { icon: 'fas fa-phone-alt', label: 'Phone', value: '+95 9454041324', href: 'tel:+959454041324' },
        { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Hlaing, Yangon', href: null },
    ],
};

export const footerData = {
    brand: 'Portfolio',
    tagline: 'Building beautiful web experiences, one pixel at a time.',
    quickLinks: [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ],
    socials: [
        { href: 'https://github.com/ashein-codethedreams', icon: 'fab fa-github', label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/aye-myat-mon-7a9b65214/', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
        { href: 'mailto:heroglasses155@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
    ],
};
