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
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    RD<span className="dot">.</span>
                </Link>

                <button type="button" className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-links" onClick={closeMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={closeMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#education" className="nav-links" onClick={closeMenu}>Education</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-links" onClick={closeMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
