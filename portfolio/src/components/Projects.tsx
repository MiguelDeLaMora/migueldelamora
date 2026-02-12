
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

// Proyect Data
const projects: Project[] = [
  {
    id: 1,
    title: "Epicus",
    subtitle: "Real Estate Website",
    stack: ["WordPress", "Elementor", "Figma"],
    image: "/public/images/epicus-mockup.png",
    link: "https://epicus.com.mx/inicio-demo/"
  },
  {
    id: 2,
    title: "Jerome & Zimmerman",
    subtitle: "Branding Agency",
    stack: ["WordPress", "CSS", "Photoshop"],
    image: "/public/images/jerome-and-zimmerman.png",
    link: "https://jeromeandzimmerman.com/"
  },
  {
    id: 3,
    title: "ISGO Tech",
    subtitle: "Manufacturing Solutions",
    stack: ["Elementor", "HTML", "JavaScript"],
    image: "/public/images/isgo-mockup.png",
    link: "https://isgo.tech/en/"
  },
  {
    id: 4,
    title: "Clasik",
    subtitle: "Furniture Design",
    stack: ["Elementor", "WordPress", "CSS"],
    image: "/public/images/clasik-mockup.png",
    link: "https://clasik.com.mx/"
  },
  {
    id: 5,
    title: "Grupo FAC",
    subtitle: "Construction",
    stack: ["Figma", "Elementor", "CSS"],
    image: "/public/images/grupo-fac-mockup.png",
    link: "https://grupofac.com/"
  },
  {
    id: 6,
    title: "Testo Rocket",
    subtitle: "Supplements",
    stack: ["Figma", "Elementor", "Shopify"],
    image: "/public/images/testo-rocket-mockup.png",
    link: "https://testorocket.mx/"
  }
];

function ProjectCard({ project, index, darkMode }: { project: Project; index: number; darkMode: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block overflow-hidden rounded-2xl cursor-pointer"
      style={{
        aspectRatio: "5/4.5",
        backgroundColor: darkMode ? "rgba(255, 255, 255, 0.03)" : "rgba(68, 70, 132, 0.03)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(68, 70, 132, 0.1)"}`,
      }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-full h-full bg-contain bg-no-repeat bg-top"
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
  : "linear-gradient(to bottom, rgba(228, 228, 228, 0.08), rgba(228, 228, 228, 0.35))"
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
          className="absolute top-61 right-6"
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

        {/* Eyebrow */}
          <p
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium mb-6 md:mb-8"
            style={{
              color: darkMode ? "rgba(240, 240, 240, 0.5)" : "rgba(68, 70, 132, 0.5)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            PORTFOLIO
          </p>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal mb-8 md:mb-10 tracking-tight leading-[1.1]"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#f0f0f0" : "#444684",
              letterSpacing: "-0.02em",
            }}
          >
            Selected Projects
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