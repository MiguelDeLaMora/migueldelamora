import { motion } from "framer-motion";
import { useState } from "react";

type ProcessItem = {
  number: string;
  title: string;
  description: string;
};

const processSteps: ProcessItem[] = [
  {
    number: "01",
    title: "Concept & UX First",
    description: "Before design or code, I define intention and user experience. Every decision should improve clarity and usability.",
  },
  {
    number: "02",
    title: "Design Meets Engineering",
    description: "Interfaces aren't just visuals. They're systems—components, structure, and consistency built to scale.",
  },
  {
    number: "03",
    title: "Interaction & Experience",
    description: "Details matter. Micro-interactions, rhythm, and feedback shape how a product feels.",
  },
  {
    number: "04",
    title: "Performance & Structure",
    description: "Experiences should feel fluid and lightweight. Clean architecture, clear decisions, and performance in mind.",
  },
];

function ProcessCard({ 
  item, 
  index, 
  darkMode 
}: { 
  item: ProcessItem; 
  index: number; 
  darkMode: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] // Easing tipo Locomotive
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="h-full p-8 md:p-10 lg:p-12 rounded-2xl"
        style={{
          backgroundColor: darkMode ? "rgba(255, 255, 255, 0.02)" : "rgba(68, 70, 132, 0.02)",
          border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(68, 70, 132, 0.08)"}`,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        animate={{
          y: isHovered ? -8 : 0,
          borderColor: isHovered 
            ? darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(68, 70, 132, 0.15)"
            : darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(68, 70, 132, 0.08)",
        }}
      >
        {/* Number - Estilo Locomotive */}
        <div className="mb-8 md:mb-12 flex items-start justify-between">
          <motion.span
            className="font-mono text-sm tracking-tight"
            style={{
              color: darkMode ? "rgba(240, 240, 240, 0.4)" : "rgba(68, 70, 132, 0.4)",
              fontFamily: "Inter, monospace",
            }}
            animate={{
              color: isHovered
                ? darkMode ? "rgba(240, 240, 240, 0.6)" : "rgba(68, 70, 132, 0.6)"
                : darkMode ? "rgba(240, 240, 240, 0.4)" : "rgba(68, 70, 132, 0.4)",
            }}
          >
            {item.number}
          </motion.span>

          {/* Arrow indicator - aparece en hover */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              width="20"
              height="20"
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

        {/* Title */}
        <h3
          className="text-2xl md:text-3xl lg:text-4xl font-normal mb-6 tracking-tight leading-tight"
          style={{
            fontFamily: "Inter, sans-serif",
            color: darkMode ? "#f0f0f0" : "#444684",
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{
            color: darkMode ? "rgba(240, 240, 240, 0.6)" : "rgba(68, 70, 132, 0.6)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
          }}
        >
          {item.description}
        </p>

        {/* Subtle glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl -z-10 opacity-0"
          style={{
            background: darkMode 
              ? "radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 0%, transparent 70%)"
              : "radial-gradient(circle at center, rgba(68, 70, 132, 0.03) 0%, transparent 70%)",
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Process({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      className="w-full py-24 md:py-32 lg:py-40 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      style={{
        backgroundColor: darkMode ? "#202020" : "#E4E4E4",
        transition: "background-color 0.35s ease-out",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Estilo muy espacioso tipo Locomotive */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28 lg:mb-32"
        >
          {/* Eyebrow */}
          <p
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium mb-6 md:mb-8"
            style={{
              color: darkMode ? "rgba(240, 240, 240, 0.5)" : "rgba(68, 70, 132, 0.5)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            PROCESS
          </p>

          {/* Title */}
          <h2
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal mb-8 md:mb-10 tracking-tight leading-[1.1]"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#f0f0f0" : "#444684",
              letterSpacing: "-0.02em",
            }}
          >
            Approach
          </h2>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed"
            style={{
              color: darkMode ? "rgba(240, 240, 240, 0.6)" : "rgba(68, 70, 132, 0.6)",
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
            }}
          >
            I design and build digital experiences where clarity, structure and 
            interaction work together.
          </p>
        </motion.div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.number}
              item={step}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}