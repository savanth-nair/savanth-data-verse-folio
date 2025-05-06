
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600">Savanth Nair</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              A passionate data professional specializing in Machine Learning, Data Analysis, and Data Engineering.
            </p>
            <Button 
              onClick={scrollToContact} 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get in Touch
            </Button>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/lovable-uploads/4dc3b3c0-03ff-4c9b-8f8e-0c6e781c4950.png"
                  alt="Savanth Nair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-blue-600 rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M20.9997 7.13L11.9997 16.13L8.99973 13.13L7.59973 14.54L11.9997 18.94L22.3997 8.54L20.9997 7.13Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
