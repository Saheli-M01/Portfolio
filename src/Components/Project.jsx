import React from 'react';
import { Container } from 'react-bootstrap';
import { motion as Motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/_project.scss';

const Project = () => {
  const projects = [
    {
      title: "Algorithm Visualizer",
      description: "A frontend platform built with ReactBootstrap and SAAS. Features include sorting algorithms, pathfinding algorithms, and graph algorithms.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "SAAS"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "A modern and responsive portfolio website showcasing projects, skills, and professional information with smooth animations and interactive elements.",
      image: "https://via.placeholder.com/400x300",
      technologies: ["React", "SCSS", "Framer Motion"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="projects">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        <h1>My Projects</h1>
        <p>Check out some of my recent work</p>
      </Motion.div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <Motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="projects__card"
          >
            <div className="projects__card-wrapper">
              <div className="projects__card-image">
                <img src={project.image} alt={project.title} />
                <div className="projects__card-overlay">
                  <div className="projects__card-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project; 