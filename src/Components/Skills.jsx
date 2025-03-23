import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion as Motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faFigma, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer, faCode,faC } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/_skills.scss';

const Skills = () => {
  const skills = [
    {
        category: 'Programming Languages',
        items: [
          { name: 'C', icon: faC, level: 80 },
          { name: 'C++', icon: faCode, level: 85 },
          { name: 'Java', icon: faJava, level: 58 },
          { name: 'Python', icon: faPython, level: 65 }
        ]
      },
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', icon: faHtml5, level: 90 },
        { name: 'CSS3', icon: faCss3Alt, level: 85 },
        { name: 'JavaScript', icon: faJs, level: 88 },
        { name: 'React', icon: faReact, level: 85 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: faNodeJs, level: 82 },
        { name: 'MongoDB', icon: faDatabase, level: 75 },
        { name: 'Express', icon: faServer, level: 80 }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', icon: faGitAlt, level: 85 },
        { name: 'Figma', icon: faFigma, level: 65 }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <Container>
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title text-center mb-5">My Skills</h1>
          
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="skills__group">
              <h3 className="skills__group-title">{skillGroup.category}</h3>
              <Row className="skills__grid g-0">
                {skillGroup.items.map((skill, skillIndex) => (
                  <Col key={skill.name} xs={12} sm={6} md={3} lg={3}>
                    <Motion.div
                      className="skills__card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    >
                      <FontAwesomeIcon icon={skill.icon} className="skills__icon" />
                      <h4 className="skills__name">{skill.name}</h4>
                      <div className="skills__level">
                        <Motion.div
                          className="skills__level-bar"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        />
                      </div>
                    </Motion.div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Motion.div>
      </Container>
    </section>
  );
};

export default Skills;