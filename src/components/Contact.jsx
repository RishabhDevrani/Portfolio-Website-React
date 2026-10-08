import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <p className="section-kicker">04 — Let’s Talk</p>
                    <h2 className="section-title">Contact Me</h2>
                    <div className="section-line"></div>
                    <p className="section-subtitle">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                </motion.div>

                <div className="contact-grid">
                    <motion.aside
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="contact-aside"
                    >
                        <h3>Let’s build something together</h3>
                        <p>Open to full-time roles, internships, and freelance collaborations in full stack development.</p>
                        <div className="contact-meta">
                            <div className="contact-meta-item">
                                <span>Focus</span>
                                <strong>Full Stack Web Development</strong>
                            </div>
                            <div className="contact-meta-item">
                                <span>Location</span>
                                <strong>India · Remote friendly</strong>
                            </div>
                        </div>
                    </motion.aside>
                    <div className="contact-container">
                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="contact-form"
                        >
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Enter Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
