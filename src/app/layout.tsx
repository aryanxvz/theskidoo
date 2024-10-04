import { Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const poppins = Poppins({
    weight: ['500', '600', '900'], // Customize the weights you need
    subsets: ['latin'], 
    display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased overscroll-none overflow-x-auto`}>
                
                <Header />
                {children}
                <Footer />

            </body>
        </html>
    );
}
