import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

import profileImage from '../assets/Saheli.jpg';
import '../Styles/components/_hero.scss';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="hero" id="home">
      <div className="hero__background">
        <div className="hero__grid"></div>
        <div className="hero__glow"></div>
      </div>
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={6} className="hero__content">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 className="hero__title" variants={itemVariants}>
                <span className="greeting">Hello, I'm</span>
                <span className="name">Saheli Mondal</span>
                <span className="title">Developer</span>
              </motion.h1>
              <motion.p className="hero__subtitle" variants={itemVariants}>
                I build cool websites that actually work (I think) and make the internet a slightly engaging with bugs!
              </motion.p>
              <motion.div className="hero__cta" variants={itemVariants}>
                <motion.a
                  href="#projects"
                  className="btn btn-solid"
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  className="btn btn-outline"
                  whileTap={{ scale: 0.95 }}
                  download
                >
                  Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </Col>
          <Col lg={6} className="hero__image">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="image-container"
            >
              <div className="floating-shapes">
                <motion.div 
                  className="shape shape-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                <motion.div 
                  className="shape shape-2"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                <motion.div 
                  className="shape shape-3"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
                <motion.div 
                  className="shape shape-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                ></motion.div>
              </div>
              <motion.div 
                className="profile-image"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="profile-img"
                />
                <div className="profile-image__glow"></div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero; 