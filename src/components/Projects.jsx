import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiHandlebarsdotjs } from "react-icons/si";
import "./Projects.css";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";

const Projects = () => {
  const tagData = {
    "React": { icon: <FaReact />, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10", border: "border-[#61DAFB]/50" },
    "Node.js": { icon: <FaNodeJs />, color: "text-[#339933]", bg: "bg-[#339933]/10", border: "border-[#339933]/50" },
    "MongoDB": { icon: <SiMongodb />, color: "text-[#47A248]", bg: "bg-[#47A248]/10", border: "border-[#47A248]/50" },
    "Express": { icon: <SiExpress />, color: "text-[#ffffff]", bg: "bg-[#ffffff]/10", border: "border-[#ffffff]/50" },
    "Handlebars": { icon: <SiHandlebarsdotjs />, color: "text-[#f0772b]", bg: "bg-[#f0772b]/10", border: "border-[#f0772b]/50" },
    "HTML": { icon: <FaHtml5 />, color: "text-[#E34F26]", bg: "bg-[#E34F26]/10", border: "border-[#E34F26]/50" },
    "CSS": { icon: <FaCss3Alt />, color: "text-[#1572B6]", bg: "bg-[#1572B6]/10", border: "border-[#1572B6]/50" },
    "JavaScript": { icon: <SiJavascript />, color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/10", border: "border-[#F7DF1E]/50" }
  };

  const projects = [
    {
      title: "Food Delivery App",
      desc: "A full-stack food ordering platform built with React and Node.js. Features include user authentication, a dynamic cart system, and real-time restaurant data rendering.",
      tags: ["React", "Node.js", "MongoDB"],
      image: Image1,
      links: {
        demo: "https://food-delivery-kappa-pied.vercel.app/",
        code: "https://github.com/RishabhDevrani/Food_Delivery",
      },
    },
    {
      title: "Genius School Platform",
      desc: "A comprehensive educational and management website for schools. Built using robust backend routing with Express, Handlebars templating, and integrated with MongoDB.",
      tags: ["Node.js", "Express", "MongoDB", "Handlebars"],
      image: Image2,
      links: {
        demo: "https://genius-4w6d.onrender.com/",
        code: "https://github.com/RishabhDevrani/genius",
      },
    },
    {
      title: "Interactive Quiz App",
      desc: "A fast-paced, interactive quiz application crafted with pure JavaScript, HTML, and CSS. Features dynamic question loading, real-time score tracking, and instant feedback.",
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
          <p className="section-kicker">03 — Selected Work</p>
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
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {project.tags.map((tag, i) => {
                    const tagStyle = tagData[tag] || { icon: null, color: "text-white", bg: "bg-white/10", border: "border-white/50" };
                    return (
                      <span 
                        key={i} 
                        className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${tagStyle.color} ${tagStyle.bg} border ${tagStyle.border} px-3.5 py-1.5 rounded-full shadow-md animate-pulse hover:animate-none transition-transform duration-200 hover:scale-110 cursor-default`}
                        style={{ animationDuration: `${2 + i * 0.5}s` }}
                      >
                        {tagStyle.icon && <span className="flex items-center justify-center text-sm drop-shadow-md">{tagStyle.icon}</span>}
                        <span>{tag}</span>
                      </span>
                    );
                  })}
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
