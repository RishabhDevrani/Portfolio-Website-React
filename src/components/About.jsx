import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaJava, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiMysql, SiExpress, SiSpringboot, SiPostgresql, SiPostman, SiTailwindcss, SiFastapi } from 'react-icons/si';
import './About.css';

const About = () => {
    const skills = [
        { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]", shadow: "shadow-[#F7DF1E]/30", border: "border-[#F7DF1E]/50", bg: "bg-[#F7DF1E]/10" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-[#3178C6]", shadow: "shadow-[#3178C6]/30", border: "border-[#3178C6]/50", bg: "bg-[#3178C6]/10" },
        { name: "React.js", icon: <FaReact />, color: "text-[#61DAFB]", shadow: "shadow-[#61DAFB]/30", border: "border-[#61DAFB]/50", bg: "bg-[#61DAFB]/10" },
        { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]", shadow: "shadow-[#339933]/30", border: "border-[#339933]/50", bg: "bg-[#339933]/10" },
        { name: "Express", icon: <SiExpress />, color: "text-[#ffffff]", shadow: "shadow-[#ffffff]/30", border: "border-[#ffffff]/50", bg: "bg-[#ffffff]/10" },
        { name: "HTML5", icon: <FaHtml5 />, color: "text-[#E34F26]", shadow: "shadow-[#E34F26]/30", border: "border-[#E34F26]/50", bg: "bg-[#E34F26]/10" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-[#1572B6]", shadow: "shadow-[#1572B6]/30", border: "border-[#1572B6]/50", bg: "bg-[#1572B6]/10" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]", shadow: "shadow-[#06B6D4]/30", border: "border-[#06B6D4]/50", bg: "bg-[#06B6D4]/10" },
        { name: "Python", icon: <FaPython />, color: "text-[#3776AB]", shadow: "shadow-[#3776AB]/30", border: "border-[#3776AB]/50", bg: "bg-[#3776AB]/10" },
        { name: "Java", icon: <FaJava />, color: "text-[#007396]", shadow: "shadow-[#007396]/30", border: "border-[#007396]/50", bg: "bg-[#007396]/10" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-[#6DB33F]", shadow: "shadow-[#6DB33F]/30", border: "border-[#6DB33F]/50", bg: "bg-[#6DB33F]/10" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]", shadow: "shadow-[#47A248]/30", border: "border-[#47A248]/50", bg: "bg-[#47A248]/10" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#336791]", shadow: "shadow-[#336791]/30", border: "border-[#336791]/50", bg: "bg-[#336791]/10" },
        { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]", shadow: "shadow-[#4479A1]/30", border: "border-[#4479A1]/50", bg: "bg-[#4479A1]/10" },
        { name: "Postman", icon: <SiPostman />, color: "text-[#FF6C37]", shadow: "shadow-[#FF6C37]/30", border: "border-[#FF6C37]/50", bg: "bg-[#FF6C37]/10" },
        { name: "Git & GitHub", icon: <FaGithub />, color: "text-[#ffffff]", shadow: "shadow-[#ffffff]/30", border: "border-[#ffffff]/50", bg: "bg-[#ffffff]/10" },
        { name: "FastAPI", icon: <SiFastapi />, color: "text-[#009688]", shadow: "shadow-[#009688]/30", border: "border-[#009688]/50", bg: "bg-[#009688]/10" },
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
                            I'm a <strong>Full Stack Web Developer</strong> building the Full Stack of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                        </p>
                        <p>
                            I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.
                        </p>
                        <p>
                            I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                        </p>

                        <div className="skills-container mt-8">
                            <h4 className="text-xl font-semibold mb-4">My Skills</h4>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6 p-4">
                                {skills.map((skill, index) => (
                                    <div 
                                        key={index} 
                                        className={`animate-float flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-[#111111] border-2 ${skill.border} shadow-lg ${skill.shadow} transition-transform duration-300 hover:scale-110 cursor-default`}
                                        style={{ animationDelay: `${index * 0.15}s` }}
                                    >
                                        <span className={`text-5xl ${skill.color} drop-shadow-md`}>{skill.icon}</span>
                                        <span className={`text-sm font-bold tracking-wider ${skill.color}`}>{skill.name}</span>
                                    </div>
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
