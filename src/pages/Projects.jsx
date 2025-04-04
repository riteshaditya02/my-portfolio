import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Stock Market Prediction",
      description: "Developed robust prediction model using Python, implementing regression algorithms for accurate stock price forecasting",
      tech: ["Python", "Machine Learning", "Regression Analysis"],
      link: "https://github.com/riteshaditya02/Stock-Market-Prediction"
    },
    {
      title: "Geninvinci Timesheet",
      description: "Built a web-based app for time tracking and project management with features including historical timesheet access and project progress tracking",
      tech: ["Laravel", "MySQL", "Bootstrap", "jQuery", "AJAX"],
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen bg-primary py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-heading">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="backdrop-blur-md bg-white/10 rounded-lg shadow-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-custom-heading">{project.title}</h3>
              <p className="text-custom-allText mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-white/5 text-custom-allText px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="text-custom-allText hover:text-custom-blue font-semibold">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
