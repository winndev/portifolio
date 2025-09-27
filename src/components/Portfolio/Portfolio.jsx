import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A responsive website built with React and Tailwind.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'An interactive app using JavaScript and Node.js.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'A portfolio site with smooth scrolling.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Project 4',
      description: 'A full-stack application with Express.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
  ];

  return (
    <div id="portfolio" className="py-20 px-5 max-w-6xl mx-auto">
      <h1 className="text-5xl font-semibold text-center mb-12">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-medium mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
