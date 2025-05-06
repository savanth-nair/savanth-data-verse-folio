
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Database, ChartBar, Code, Cloud } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Nutrion',
      description: 'Diet recommendation app utilizing NLP and ML for personalized food suggestions. Features a FastAPI backend and Streamlit frontend, deployed via Docker Compose.',
      tags: ['Python', 'FastAPI', 'NLP', 'Machine Learning', 'Docker'],
      github: 'https://github.com/savanthnair/nutrion',
      icon: <Code className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Data Engineering Project',
      description: 'End-to-end pipeline involving web scraping book data, storing it in MySQL, executing SQL queries for insights, and visualizing results in Power BI.',
      tags: ['Web Scraping', 'MySQL', 'SQL', 'Power BI'],
      github: 'https://github.com/savanthnair/data-engineering-project',
      icon: <Database className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Deep Learning Project',
      description: 'Application of transfer learning using CNN architectures (MobileNet V3, NasNet, GoogLeNet) on the Food101 dataset for food classification tasks.',
      tags: ['Deep Learning', 'Transfer Learning', 'CNN', 'Python'],
      github: 'https://github.com/savanthnair/deep-learning-project',
      icon: <Code className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'AI Property Recommendation Tool',
      description: 'A tool designed to provide property recommendations using AI techniques, helping users find the perfect property based on their preferences.',
      tags: ['AI', 'Recommendation Systems', 'Python'],
      github: 'https://github.com/savanthnair/property-recommender',
      icon: <ChartBar className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Big Data Project',
      description: 'Analysis of YouTube trending videos using Snowflake and SQL to derive insights from large datasets, identifying patterns in viral content.',
      tags: ['Snowflake', 'SQL', 'Big Data', 'Analytics'],
      github: 'https://github.com/savanthnair/big-data-youtube',
      icon: <Cloud className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Supply and Demand Gap Analysis',
      description: 'Utilization of Power BI to analyze HR data, identifying employee churn patterns and providing real-time HR insights through interactive dashboards.',
      tags: ['Power BI', 'HR Analytics', 'Data Visualization'],
      github: 'https://github.com/savanthnair/hr-analytics',
      icon: <ChartBar className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
            Explore some of my recent data science and engineering projects that showcase
            my skills in machine learning, data analysis, and visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <div className="p-2 bg-blue-50 rounded-md">
                    {project.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-blue-800">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
