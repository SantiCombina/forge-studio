import { AboutSection } from '@/components/about/about-section';
import { ContactSection } from '@/components/contact/contact-section';
import { HeroSection } from '@/components/hero/hero-section';
import { ServicesSection } from '@/components/services/services-section';
import { Footer } from '@/components/ui/footer/footer';
import { WorkSection } from '@/components/work/work-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
