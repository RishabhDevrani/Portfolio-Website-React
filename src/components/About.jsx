import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaJava, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiMysql, SiExpress, SiSpringboot, SiPostgresql, SiPostman, SiTailwindcss, SiFastapi } from 'react-icons/si';
import './About.css';

const About = () => {
    const skills = [
        { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]" },
        { name: "React.js", icon: <FaReact />, color: "text-[#61DAFB]" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]" },
        { name: "Express", icon: <SiExpress />, color: "text-[#ffffff]" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-[#E34F26]" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-[#1572B6]" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
        { name: "Python", icon: <FaPython />, color: "text-[#3776AB]" },
        { name: "Java", icon: <FaJava />, color: "text-[#007396]" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-[#6DB33F]" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#336791]" },
        { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
        { name: "Postman", icon: <SiPostman />, color: "text-[#FF6C37]" },
        { name: "Git & GitHub", icon: <FaGithub />, color: "text-[#ffffff]" },
        { name: "FastAPI", icon: <SiFastapi />, color: "text-[#009688]" },
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
                    <p className="section-kicker">01 — Profile</p>
                    <h2 className="section-title">About Me</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="about-layout">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="about-text"
                    >
                        <h3>Get to know me!</h3>
                        <p>
                            I'm a <strong>Full Stack Web Developer</strong> building the Full Stack of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                        </p>
                        <p>
                            I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.
                        </p>
                        <p>
                            I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="about-img"
                    >
                        <div className="img-placeholder">
                            <span>RD</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="skills-panel"
                >
                    <h4>My Skills</h4>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-chip animate-float"
                                style={{ animationDelay: `${index * 0.12}s` }}
                            >
                                <span className={`text-3xl ${skill.color}`}>{skill.icon}</span>
                                <span className={`text-xs font-semibold tracking-wide ${skill.color}`}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
