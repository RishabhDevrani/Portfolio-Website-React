import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const skills = [
        "JavaScript (ES6+)", "React.js", "Node.js", "HTML",
        "TypeScript", "CSS", "Git & GitHub", "Java", "Python", "MongoDB", "MySQL"
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">About Me</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="about-text"
                    >
                        <h3>Get to know me!</h3>
                        <p>
                            I'm a <strong>Frontend Web Developer</strong> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                        </p>
                        <p>
                            I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.
                        </p>
                        <p>
                            I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                        </p>

                        <div className="skills-container">
                            <h4>My Skills</h4>
                            <div className="skills-list">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="about-img"
                    >
                        {/* Placeholder for user image */}
                        <div className="img-placeholder">
                            <span>RD</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
