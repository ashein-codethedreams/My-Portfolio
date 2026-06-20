import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-inter',
});

export const metadata = {
    title: 'Aye Myat Mon | Frontend Software Developer - Portfolio',
    description:
        'Portfolio of Aye Myat Mon, a passionate Frontend Software Developer specializing in React, Next.js, and modern web technologies.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
            </head>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
