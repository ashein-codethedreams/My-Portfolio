import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            {/* <Projects /> */}
            <Certificates />
            <Experience />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}
