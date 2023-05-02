import React from 'react';

const Project = ({ title, description, link }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>View Project</a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Coming soon',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Coming soon',
      link: 'https://example.com/project2',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;