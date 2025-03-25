import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../Styles/components/_footer.scss';

const Footer = () => {
  const socialLinks = [
    {
      icon: faGithub,
      url: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: faLinkedin,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: faXTwitter,
      url: "https://x.com/yourusername",
      label: "X"
    }
  ];

  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
          <p className="footer__copyright">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 