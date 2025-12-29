import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>Rishabh Devrani</h3>
                        <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    </div>
                    <div className="footer-socials">
                        <h3>Socials</h3>
                        <div className="social-links">
                            <a href="https://github.com/RishabhDevrani" target="_blank" rel="noreferrer"><FaGithub /></a>
                            <a href="https://linkedin.com/in/rishabh-devrani-a3727a226" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                            <a href="https://x.com/Dev_Rishabh13" target="_blank" rel="noreferrer"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()}. Made by Rishabh Devrani</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
