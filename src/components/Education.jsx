import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Computer Applications",
            institution: "ITS-Mohan Nagar Ghaziabad",
            year: "2020 - 2023",
            // description: "Focused on software engineering, data structures, and algorithms. Graduated with honors."
        },
        {
            degree: "Master of Computer Applications",
            institution: "Jims Rohini",
            year: "2025-27",
            // description: "Intensive 12-week program covering HTML, CSS, JavaScript, React, and Node.js."
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <p className="section-kicker">02 — Journey</p>
                    <h2 className="section-title">Education</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="education-timeline">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="education-card"
                        >
                            <div className="education-year">{item.year}</div>
                            <h3 className="education-degree">{item.degree}</h3>
                            <h4 className="education-institution">{item.institution}</h4>
                            <p className="education-description">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
