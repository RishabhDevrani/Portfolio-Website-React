import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Send, ChevronDown, Linkedin, Github, Sun, Moon } from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
}

interface Skill {
    name: string;
    level: 'Beginner' | 'Advanced' | 'Intermediate';
}

// --- DATA ---
const userProfile = {
    photo: "public/Image2.jpg",
    name: "Rishabh Devrani",
    title: "Full-Stack Developer & Tech Enthusiast",
    bio: "I’m passionate about building clean, scalable, and user-friendly web applications. I work mainly with the React ecosystem, JavaScript, and modern MERN stack technologies like Node.js, Express, and MongoDB. I enjoy writing clean code, improving performance, and learning new concepts that help me grow as a developer.I’m always curious to explore new tools, web technologies, and the latest developments in AI and distributed systems. I love contributing to meaningful projects and constantly improving my technical skills.",
    email: "devranirishabh39@gmail.com",
    linkedin: "www.linkedin.com/in/rishabh-devrani-a3727a226",
    github: "https://github.com/RishabhDevrani"
};

const skillsData: Skill[] = [
    { name: 'TypeScript', level: 'Beginner' },
    { name: 'React', level: 'Beginner' },
    // { name: 'Tailwind CSS', level: 'Beginner' },
    { name: 'Node.js & Express', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Beginner' },
    { name: 'REST APIs', level: 'Beginner' },
    { name: 'Git & GitHub', level: 'Intermediate' },
    { name: 'MYSQL', level: 'Beginner' },
    { name: "Python", level: 'Beginner' },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "C++", level: "Beginner" },
];

const projectsData: Project[] = [
    {
        id: 1,
        title: "Food-Delivery App",
        description: "A responsive food-ordering platform built with React, Node.js, Express, and MongoDB. Includes user authentication, real-time order updates, and secure API handling.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        link: "https://food-delivery-kappa-pied.vercel.app/",
    },
    {
        id: 2,
        title: "School Website",
        description: "A full-stack school management system with modules for Students, Teachers, Attendance, and Notices.Backend APIs built with Node.js & Express, and templating done using Handlebars (HBS).",
        tags: ["Node.js", "Express", "HBS(HandleBars)", "REST API"],
        link: "https://genius-4w6d.onrender.com/",
    },
    {
        id: 3,
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard for visualizing large datasets, built with React and D3.js. Features responsive charts and data filtering.",
        tags: ["React", "D3.js", "Data Viz", "Shadcn"],
        link: "#",
    },
];

// --- COMPONENTS ---

/**
 * Maps skill level to Tailwind classes for visual feedback
 * @param level - The skill level
 * @returns Tailwind CSS classes
 */
const getLevelStyle = (level: Skill['level']) => {
    switch (level) {
        case 'Beginner':
            return 'bg-green-100 text-green-800 border-green-300';
        case 'Advanced':
            return 'bg-blue-100 text-blue-800 border-blue-300';
        case 'Intermediate':
            return 'bg-yellow-100 text-yellow-800 border-yellow-300';
    }
};

/**
 * The main container component for a section.
 * @param icon - Lucide React Icon component
 * @param title - Section title
 * @param children - Section content
 */
const Section: React.FC<{ icon: React.ElementType, title: string, id: string, children: React.ReactNode }> = ({ icon: Icon, title, id, children }) => (
    <section id={id} className="min-h-screen pt-24 pb-16 px-4 sm:px-8 lg:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 flex items-center justify-center">
                <Icon className="w-8 h-8 mr-3 text-indigo-600 dark:text-indigo-400" />
                {title}
            </h2>
            {children}
        </div>
    </section>
);

/**
 * Navigation component
 */
const NavBar: React.FC<{ activeSection: string, theme: 'light' | 'dark', toggleTheme: () => void }> = ({ activeSection, theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const getLinkClass = (href: string) => `
    block px-3 py-2 rounded-lg transition-colors duration-200
    ${activeSection === href.substring(1)
            ? 'bg-indigo-500 text-white font-bold shadow-md'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        }
  `;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 shadow-lg backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wider">
                        RishabhDev
                    </a>
                    <nav className="hidden md:block">
                        <div className="flex space-x-1">
                            {navItems.map(item => (
                                <a key={item.name} href={item.href} className={getLinkClass(item.href)}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                    {/* Theme toggle */}
                    <div className="hidden md:flex items-center ml-4">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="ml-4 p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                    <button
                        className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-800">
                    {navItems.map(item => (
                        <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={getLinkClass(item.href)}>
                            {item.name}
                        </a>
                    ))}
                    <div className="pt-2">
                        <button
                            onClick={() => { setIsOpen(false); toggleTheme(); }}
                            className="w-full flex items-center justify-center px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        >
                            <span className="mr-2">Toggle theme</span>
                            {typeof window !== 'undefined' && (document.documentElement.classList.contains('dark') ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

/**
 * Portfolio Project Card component
 * @param project - Project data
 */
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:scale-[1.02]">
        <div className="p-6 space-y-4">
            <div className="flex items-center">
                <Briefcase className="w-6 h-6 text-indigo-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full dark:bg-indigo-900 dark:text-indigo-200">
                        {tag}
                    </span>
                ))}
            </div>
            <a
                href={project.link} target='_blank'
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold transition duration-150"
            >
                View Project
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
        </div>
    </div>
);


/**
 * Main App Component
 */
const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        try {
            const stored = localStorage.getItem('theme');
            if (stored === 'dark') return 'dark';
            if (stored === 'light') return 'light';
            if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        } catch (e) {
            // ignore
        }
        return 'light';
    });

    // Simple intersection observer setup for navigation highlighting
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -30% 0px' } // Trigger when section is ~70% visible
        );

        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    // Sync theme to document and localStorage
    useEffect(() => {
        try {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
        } catch (e) {
            // ignore
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    // --- RENDER SECTIONS ---

    const renderHero = () => (
    <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center bg-white dark:bg-gray-950 transition-colors duration-300 p-4 sm:p-8"
    >
        <div className="max-w-4xl mx-auto space-y-6">

            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl mb-4">
                <img
                    src={userProfile.photo}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            <p className="text-xl font-medium text-gray-500 dark:text-gray-400">Hello, I'm</p>

            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                {userProfile.name}
            </h1>

            <p className="text-2xl font-light text-indigo-600 dark:text-indigo-400">
                {userProfile.title}
            </p>

            <div className="flex justify-center space-x-4 pt-4">
                <a
                    href="#projects"
                    className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                >
                    View Work
                    <Briefcase className="ml-2 w-4 h-4 group-hover:rotate-6 transition-transform" />
                </a>

                <a
                    href="#contact"
                    className="group inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700 transition duration-300 transform hover:scale-105"
                >
                    Contact Me
                    <Send className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>

            <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </a>
        </div>
    </section>
);

    const renderAbout = () => (
        <Section icon={User} title="About Me" id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-indigo-500">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {userProfile.bio}
                    </p>
                    <p className="text-md text-gray-600 dark:text-gray-400">
                        When I'm not coding, you can find me exploring new coffee shops or reading about the latest in AI and distributed systems.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Links</h3>
                    <div className="space-y-3">
                        <a href={userProfile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <Linkedin className="w-6 h-6 text-blue-700 mr-3" />
                            <span className="text-gray-700 dark:text-gray-300 hover:text-blue-500 font-medium">Connect on LinkedIn</span>
                        </a>
                        <a href={userProfile.github} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                            <Github className="w-6 h-6 text-gray-900 dark:text-white mr-3" />
                            <span className="text-gray-700 dark:text-gray-300 hover:text-gray-500 font-medium">Check out my GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );

    const renderSkills = () => (
        <Section icon={Code} title="Technical Skills" id="skills">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillsData.map(skill => (
                    <div
                        key={skill.name}
                        className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition duration-300 hover:shadow-xl hover:border-indigo-400 transform hover:-translate-y-1"
                    >
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{skill.name}</h4>
                        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${getLevelStyle(skill.level)}`}>
                            {skill.level}
                        </span>
                    </div>
                ))}
            </div>
        </Section>
    );

    const renderProjects = () => (
        <Section icon={Briefcase} title="Featured Projects" id="projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );

    const renderContact = () => (
        <Section icon={Send} title="Get In Touch" id="contact">
            <div className="max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border-b-4 border-indigo-600">
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                    I'm currently open to new opportunities and collaboration. Feel free to send me an email!
                </p>
                <a
                    href={`mailto:${userProfile.email}`}
                    className="inline-flex items-center px-2 py-4 text-lg font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-xl"
                >
                    <Send className="w-5 h-5 mr-3" />
                    {userProfile.email}
                </a>

                <div className="mt-8 flex justify-center space-x-6">
                    <a href={userProfile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-700 transition duration-300">
                        <Linkedin className="w-8 h-8" />
                    </a>
                    <a href={userProfile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition duration-300">
                        <Github className="w-8 h-8" />
                    </a>
                </div>
            </div>
        </Section>
    );

    const renderFooter = () => (
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} {userProfile.name}. All Rights Reserved.</p>
        </footer>
    );

    return (
        <div className="font-sans antialiased">
            <NavBar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
            <main>
                {renderHero()}
                {renderAbout()}
                {renderSkills()}
                {renderProjects()}
                {renderContact()}
            </main>
            {renderFooter()}
        </div>
    );
};

export default App;
