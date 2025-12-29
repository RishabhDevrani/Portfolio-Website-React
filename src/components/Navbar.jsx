import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Portfolio<span className="dot">.</span>
                </Link>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-links" onClick={toggleMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={toggleMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-links" onClick={toggleMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
