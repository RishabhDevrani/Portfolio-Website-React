import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <div id="home" className="hero-container">
            <div className="hero-content">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hero-subtitle"
                >
                    HELLO, I'M
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hero-title"
                >
                    Rishabh Devrani
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="hero-role"
                >
                    Creative <span className="highlight">Developer</span> & <span className="highlight">Designer</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="hero-desc"
                >
                    I build exceptional digital experiences that are fast, accessible, beautiful, and responsive.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="hero-btns"
                >
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="social-icons"
                >
                    <a href="https://github.com/RishabhDevrani" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/rishabh-devrani-a3727a226" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://x.com/Dev_Rishabh13" target="_blank" rel="noreferrer"><FaTwitter /></a>
                </motion.div>
            </div>

            <div className="hero-bg-elements">
                <div className="glow-circle circle-1"></div>
                <div className="glow-circle circle-2"></div>
            </div>
        </div>
    );
};

export default Hero;
