
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ProgressBar from '@/components/ui/ProgressBar';
import { Code, Database, Server, BarChart } from 'lucide-react';

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const programmingSkills = [
    { label: 'Python', percentage: 95 },
    { label: 'SQL', percentage: 90 },
    { label: 'R', percentage: 80 },
    { label: 'JavaScript', percentage: 70 },
  ];

  const toolsSkills = [
    { label: 'Power BI', percentage: 90 },
    { label: 'Tableau', percentage: 85 },
    { label: 'Docker Compose', percentage: 85 },
    { label: 'Git/Github', percentage: 90 },
    { label: 'Databricks', percentage: 80 },
  ];

  const cloudSkills = [
    { label: 'Azure', percentage: 85 },
    { label: 'GCP', percentage: 80 },
    { label: 'Snowflake', percentage: 85 },
    { label: 'AWS', percentage: 70 },
  ];

  const otherSkills = [
    { label: 'Machine Learning', percentage: 90 },
    { label: 'Deep Learning', percentage: 85 },
    { label: 'NLP', percentage: 85 },
    { label: 'Data Visualization', percentage: 90 },
    { label: 'ETL Pipelines', percentage: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            Here's an overview of my technical skills and proficiency levels in various technologies and tools
            that I use in my data science and engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div>
            <div className="flex items-center mb-6">
              <Code className="text-blue-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-blue-800">Programming Languages</h3>
            </div>
            <div className={`space-y-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
              {programmingSkills.map((skill) => (
                <ProgressBar
                  key={skill.label}
                  label={skill.label}
                  percentage={inView ? skill.percentage : 0}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Database className="text-blue-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-blue-800">Tools & Platforms</h3>
            </div>
            <div className={`space-y-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
              {toolsSkills.map((skill) => (
                <ProgressBar
                  key={skill.label}
                  label={skill.label}
                  percentage={inView ? skill.percentage : 0}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Server className="text-blue-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-blue-800">Cloud Services</h3>
            </div>
            <div className={`space-y-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
              {cloudSkills.map((skill) => (
                <ProgressBar
                  key={skill.label}
                  label={skill.label}
                  percentage={inView ? skill.percentage : 0}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <BarChart className="text-blue-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-blue-800">Data Science</h3>
            </div>
            <div className={`space-y-6 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
              {otherSkills.map((skill) => (
                <ProgressBar
                  key={skill.label}
                  label={skill.label}
                  percentage={inView ? skill.percentage : 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
