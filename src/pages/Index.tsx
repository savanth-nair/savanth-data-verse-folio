
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Home/Hero';
import AboutSection from '@/components/About/AboutSection';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import SkillsSection from '@/components/Skills/SkillsSection';
import ContactSection from '@/components/Contact/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
