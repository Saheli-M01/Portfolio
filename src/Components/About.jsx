import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion as Motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/components/_about.scss";

const About = () => {
  const features = [
    {
      number: "01",
      icon: faCode,
      title: "Clean Code",
      description:
        "I write clean, maintainable, and efficient code following best practices and design patterns.",
    },
   
    {
      number: "02",
      icon: faUsers,
      title: "Collaborative",
      description:
        "I thrive in team environments and enjoy collaborating with others to create amazing solutions.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title text-center mb-5">About Me</h1>

          <div className="about__content">
            <Row>
              <Col lg={6}>
                <Motion.div
                  className="about__text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae dicta et veniam quibusdam rerum atque assumenda
                    minima excepturi. Officiis perspiciatis facilis suscipit,
                    numquam at nesciunt aperiam soluta odit corporis. Sit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Recusandae dicta et veniam quibusdam rerum atque assumenda
                    minima excepturi. Officiis perspiciatis facilis suscipit,
                    numquam at nesciunt aperiam soluta odit corporis. Sit.
                  </p>
                </Motion.div>
              </Col>
              <Col lg={6}>
                <div className="about__features">
                  {features.map((feature, index) => (
                    <Motion.div
                      key={feature.title}
                      className="about__feature"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      <span className="about__feature-number">{feature.number}</span>
                      <div className="about__feature-content">
                        <FontAwesomeIcon
                          icon={feature.icon}
                          className="about__feature-icon"
                        />
                        <h3 className="about__feature-title">{feature.title}</h3>
                        <p className="about__feature-description">
                          {feature.description}
                        </p>
                      </div>
                    </Motion.div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </Motion.div>
      </Container>
    </section>
  );
};

export default About;
