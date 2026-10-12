import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
    ...nextVitals,
    {
        ignores: ['.next/**', 'node_modules/**', 'public/assets/**'],
    },
];

export default config;
