
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Database, ChartBar, Cloud, Code } from 'lucide-react';

const AboutSection = () => {
  const expertiseAreas = [
    {
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights using Python, SQL, and visualization tools.',
      icon: <ChartBar className="w-10 h-10 text-blue-600" />,
    },
    {
      title: 'Machine Learning',
      description: 'Develop and implement ML models to solve real-world problems with data-driven approaches.',
      icon: <Code className="w-10 h-10 text-blue-600" />,
    },
    {
      title: 'Data Engineering',
      description: 'Design robust data pipelines and infrastructure for efficient data processing and storage.',
      icon: <Database className="w-10 h-10 text-blue-600" />,
    },
    {
      title: 'Cloud Solutions',
      description: 'Leverage AWS and Azure cloud platforms for scalable and reliable data solutions.',
      icon: <Cloud className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm a data professional with expertise in Python, SQL, cloud platforms, and visualization tools. 
              My passion lies in solving complex problems through data-driven approaches and creating 
              efficient solutions for data collection, processing, analysis, and visualization.
            </p>
            <p className="text-gray-700">
              With a strong analytical mindset and technical skills, I transform raw data into meaningful 
              insights that drive business decisions. I'm constantly learning and adapting to the 
              ever-evolving data landscape to deliver high-quality results.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">My Approach</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">●</div>
                <span>Leveraging data to solve real-world problems with practical solutions</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">●</div>
                <span>Building scalable and maintainable data infrastructure</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">●</div>
                <span>Creating clear visualizations that tell compelling data stories</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">●</div>
                <span>Continually exploring new technologies and methodologies</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600">●</div>
                <span>Combining technical expertise with effective communication</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
