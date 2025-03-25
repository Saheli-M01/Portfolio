import React from 'react';
import { Container } from 'react-bootstrap';
import { motion as Motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../Styles/components/_resume.scss';

const Resume = () => {
  const experiences = [
    {
      title: "Ghanta",
      company: "Tech Company",
      date: "2020 - Present",
      description: [
       
        "bruh...."
      ]
    },
    
  ];

  const education = [
    {
      title: "Bachelor of Technology in Computer Science and Engineering",
      company: "Maulana Abul Kalam Azad University of Technology",
      date: "2022 - 2026",
      description: [
        "8.5 CGPA"
      ]
    },
    {
        title: "12th",
        company: "West Bengal Council of Higher Secondary Education",
        date: "2019",
        description: [
          "82.6%"
        ]
      },
      {
        title: "10th",
        company: "West Bengal Board of Secondary Education",
        date: "2017",
        description: [
          "91%"
        ]
      }
  ];

  return (
    <section id="resume" className="resume-section">
      <Container>
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h1>Resume</h1>
          <p>My professional journey and qualifications</p>
        </Motion.div>

        <div className="resume">
          <div className="resume__section">
            <h2>Experience</h2>
            <div className="resume__timeline">
              {experiences.map((exp, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="resume__item"
                >
                  <div className="resume__item-header">
                    <div>
                      <h3 className="resume__item-title">{exp.title}</h3>
                      <p className="resume__item-company">{exp.company}</p>
                    </div>
                    <span className="resume__item-date">{exp.date}</span>
                  </div>
                  <div className="resume__item-description">
                    <ul>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          <div className="resume__section">
            <h2>Education</h2>
            <div className="resume__timeline">
              {education.map((edu, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="resume__item"
                >
                  <div className="resume__item-header">
                    <div>
                      <h3 className="resume__item-title">{edu.title}</h3>
                      <p className="resume__item-company">{edu.company}</p>
                    </div>
                    <span className="resume__item-date">{edu.date}</span>
                  </div>
                  <div className="resume__item-description">
                    <ul>
                      {edu.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a href="/path-to-your-resume.pdf" className="resume__download-btn" download>
              <FontAwesomeIcon icon={faDownload} className="icon" />
               Resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Resume; 