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
    openGraph: {
        title: 'Aye Myat Mon | Frontend Software Developer - Portfolio',
        description: 'Explore the portfolio of Aye Myat Mon, featuring an interactive macOS IDE coding mockup, vertical experience timelines, and printable A4 resumes.',
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: 'https://portfolio.enttnine.online/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Aye Myat Mon | Frontend Software Developer Portfolio',
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aye Myat Mon | Frontend Software Developer - Portfolio',
        description: 'Explore the portfolio of Aye Myat Mon, featuring an interactive macOS IDE coding mockup, vertical experience timelines, and printable A4 resumes.',
        images: ['https://portfolio.enttnine.online/og-image.png'],
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);var l=localStorage.getItem('portfolio-lang')||'en';document.documentElement.setAttribute('data-lang',l);}catch(e){}})();`,
                    }}
                />
                
                <link rel="icon" type="image/png" href="/icon.png" />
                
                <meta property="og:title" content="Aye Myat Mon | Frontend Software Developer - Portfolio" />
                <meta property="og:description" content="Explore the portfolio of Aye Myat Mon, featuring an interactive macOS IDE coding mockup, vertical experience timelines, and printable A4 resumes." />
                <meta property="og:image" content="https://portfolio.enttnine.online/og-image.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aye Myat Mon | Frontend Software Developer - Portfolio" />
                <meta name="twitter:description" content="Explore the portfolio of Aye Myat Mon, featuring an interactive macOS IDE coding mockup, vertical experience timelines, and printable A4 resumes." />
                <meta name="twitter:image" content="https://portfolio.enttnine.online/og-image.png" />

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
