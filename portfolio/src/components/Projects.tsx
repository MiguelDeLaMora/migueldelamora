
import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  stack: string[];
  image: string;
  link: string;
}

// Datos de ejemplo - reemplaza con tus proyectos
const projects: Project[] = [
  {
    id: 1,
    title: "Project Alpha",
    subtitle: "E-commerce Platform",
    stack: ["WordPress", "Elementor", "Figma"],
    image: "/projects/project1.jpg", // Reemplaza con tu ruta
    link: "/projects/alpha"
  },
  {
    id: 2,
    title: "Project Beta",
    subtitle: "Corporate Website",
    stack: ["WordPress", "CSS", "Photoshop"],
    image: "/projects/project2.jpg",
    link: "/projects/beta"
  },
  {
    id: 3,
    title: "Project Gamma",
    subtitle: "Portfolio Redesign",
    stack: ["Figma", "HTML", "JavaScript"],
    image: "/projects/project3.jpg",
    link: "/projects/gamma"
  },
  {
    id: 4,
    title: "Project Delta",
    subtitle: "Landing Page",
    stack: ["Elementor", "WordPress", "CSS"],
    image: "/projects/project4.jpg",
    link: "/projects/delta"
  },
  {
    id: 5,
    title: "Project Epsilon",
    subtitle: "Brand Identity",
    stack: ["Figma", "Illustrator", "Photoshop"],
    image: "/projects/project5.jpg",
    link: "/projects/epsilon"
  },
  {
    id: 6,
    title: "Project Zeta",
    subtitle: "Mobile App Design",
    stack: ["Figma", "Sketch", "Principle"],
    image: "/projects/project6.jpg",
    link: "/projects/zeta"
  }
];

function ProjectCard({ project, index, darkMode }: { project: Project; index: number; darkMode: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block overflow-hidden rounded-2xl cursor-pointer"
      style={{
        aspectRatio: "4/5",
        backgroundColor: darkMode ? "rgba(255, 255, 255, 0.03)" : "rgba(68, 70, 132, 0.03)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(68, 70, 132, 0.1)"}`,
      }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundColor: darkMode ? "#2a2a2a" : "#d0d0d0", // Placeholder mientras carga
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Overlay gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: darkMode 
              ? "linear-gradient(to bottom, rgba(32, 32, 32, 0.3), rgba(32, 32, 32, 0.9))"
              : "linear-gradient(to bottom, rgba(228, 228, 228, 0.3), rgba(228, 228, 228, 0.9))"
          }}
          animate={{
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-end p-6">
        {/* Stack tags - aparecen en hover */}
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs uppercase tracking-wider font-light rounded-full"
              style={{
                backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(68, 70, 132, 0.1)",
                color: darkMode ? "#f0f0f0" : "#444684",
                border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(68, 70, 132, 0.2)"}`,
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Título y subtítulo */}
        <motion.div
          animate={{
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <h3
            className="text-2xl md:text-3xl font-medium mb-2 tracking-wide"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#f0f0f0" : "#444684",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm uppercase tracking-widest font-light"
            style={{
              color: darkMode ? "rgba(240, 240, 240, 0.7)" : "rgba(68, 70, 132, 0.7)",
            }}
          >
            {project.subtitle}
          </p>
        </motion.div>

        {/* Arrow indicator */}
        <motion.div
          className="absolute top-6 right-6"
          animate={{
            x: isHovered ? 5 : 0,
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={darkMode ? "#f0f0f0" : "#444684"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function Projects({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      className="min-h-screen w-full py-20 md:py-32 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      style={{
        backgroundColor: darkMode ? "#202020" : "#E4E4E4",
        transition: "background-color 0.35s ease-out",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-wider"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#f0f0f0" : "#444684",
              letterSpacing: "0.15em",
            }}
          >
            SELECTED PROJECTS
          </h2>
        </motion.div>

        {/* Grid de proyectos - Diseño asimétrico moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}