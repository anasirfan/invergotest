'use client';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Management from '@/components/sections/Management';
import PortfolioShowcase from '@/components/sections/PortfolioShowcase';
import PackagesCta from '@/components/sections/PackagesCta';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <Testimonials />
      <Management />
      <PortfolioShowcase />
      <PackagesCta />
      <Contact />
    </>
  );
}
