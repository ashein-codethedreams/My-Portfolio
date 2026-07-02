import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Providers from './Providers';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-inter',
});

const notoSansJP = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-noto-jp',
    preload: false,
});

export const metadata = {
    title: 'Aye Myat Mon | Frontend Software Developer - Portfolio',
    description:
        'Portfolio of Aye Myat Mon, a passionate Frontend Software Developer specializing in React, Next.js, and modern web technologies.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Anti-FOUC: runs synchronously before first paint, sets theme + lang from localStorage */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('portfolio-lang')||'en';document.documentElement.setAttribute('data-lang',l);}catch(e){}})();`,
                    }}
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
            </head>
            <body className={`${inter.variable} ${notoSansJP.variable} ${inter.className}`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
