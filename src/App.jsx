import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scroll reveal observer for .reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <Doctors />
        <Testimonials />
        <Locations />
        <AppointmentForm />
      </main>
      <Footer />
    </>
  );
}
