import React from 'react';
import { Container } from 'react-bootstrap';
import { motion as Motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/components/_contact.scss';

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      content: "your.email@example.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: faGithub,
      title: "Github",
      content: "https://github.com/yourusername",
      link: "https://github.com/yourusername"
    },
    {
      icon: faLinkedin,
      title: "LinkedIn",
      content: "https://linkedin.com/in/yourusername",
      link: "https://linkedin.com/in/yourusername"
    },
    {
      icon: faXTwitter,
      title: "X",
      content: "https://x.com/yourusername",
      link: "https://x.com/yourusername"
    }
  ];

 

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h1>Contact Me</h1>
          <p>Get in touch with me for any questions or opportunities</p>
        </Motion.div>

        <div className="contact">
          <div className="contact__info">
            {contactInfo.map((info, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="contact__info-item"
              >
                <div className="contact__info-icon">
                  <FontAwesomeIcon icon={info.icon} />
                </div>
                <div className="contact__info-content">
                  <h3>{info.title}</h3>
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    {info.content}
                  </a>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact; 