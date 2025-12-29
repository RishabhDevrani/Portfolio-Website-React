import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery",
      desc: "A web application built with React and Node.js. Features include user authentication, real-time data updates, and a responsive design.",
      tags: ["React", "Node.js", "MongoDB"],
      image: Image1,
      links: {
        demo: "https://food-delivery-kappa-pied.vercel.app/",
        code: "https://github.com/RishabhDevrani/Food_Delivery",
      },
    },
    {
      title: "School Website",
      desc: "An e-commerce platform with a custom shopping cart, payment integration, and an admin dashboard for product management.",
      tags: ["Node.js", "Express", "MongoDB", "Handlebars"],
      image: Image2,
      links: {
        demo: "https://genius-4w6d.onrender.com/",
        code: "https://github.com/RishabhDevrani/genius",
      },
    },
    {
      title: "Quiz-App",
      desc: "A portfolio website designed to showcase creative work. Built with modern CSS techniques and smooth animations.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: Image3,
      links: {
        demo: "https://quiz-be878f.netlify.app/",
        code: "https://github.com/RishabhDevrani/Quiz_App",
      },
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">My Projects</h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-img-placeholder">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
