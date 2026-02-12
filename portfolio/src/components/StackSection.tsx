import { motion } from "framer-motion";
import { useState } from "react";

type StackSectionProps = {
  darkMode: boolean;
};

type Category = {
  id: string;
  title: string;
  eyebrow: string;
  tools: string[];
};

const categories: Category[] = [
  {
    id: "frontend",
    title: "Frontend",
    eyebrow: "Development",
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Webflow", "Elementor"],
  },
  {
    id: "design",
    title: "Design",
    eyebrow: "Visual",
    tools: ["Figma", "Adobe Creative Suite", "Photoshop", "Illustrator"],
  },
  {
    id: "platforms",
    title: "Platforms",
    eyebrow: "CMS",
    tools: ["WordPress", "Shopify", "Webflow"],
  },
  {
    id: "workflow",
    title: "Workflow",
    eyebrow: "Tools",
    tools: ["Git", "GitHub", "Asana", "Notion"],
  },
];

function ToolTag({ 
  tool, 
  index, 
  darkMode 
}: { 
  tool: string; 
  index: number; 
  darkMode: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="inline-block px-4 py-2 rounded-full text-sm font-light cursor-default"
        style={{
          backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(68, 70, 132, 0.05)",
          border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(68, 70, 132, 0.1)"}`,
          color: darkMode ? "#f0f0f0" : "#444684",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        animate={{
          backgroundColor: isHovered 
            ? darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(68, 70, 132, 0.08)"
            : darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(68, 70, 132, 0.05)",
          borderColor: isHovered
            ? darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(68, 70, 132, 0.2)"
            : darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(68, 70, 132, 0.1)",
          y: isHovered ? -2 : 0,
        }}
      >
        {tool}
      </motion.span>
    </motion.li>
  );
}

function CategoryBlock({ 
  category, 
  index, 
  darkMode 
}: { 
  category: Category; 
  index: number; 
  darkMode: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        className="h-full p-8 md:p-10 rounded-2xl"
        style={{
          backgroundColor: "transparent",
          border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(68, 70, 132, 0.08)"}`,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        animate={{
          borderColor: isHovered
            ? darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(68, 70, 132, 0.15)"
            : darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(68, 70, 132, 0.08)",
        }}
      >
        {/* Header */}
        <div className="mb-8 pb-6 border-b" style={{
          borderColor: darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(68, 70, 132, 0.08)"
        }}>
          <p
            className="text-[10px] uppercase tracking-[0.3em] font-medium mb-3"
            style={{
              color: darkMode ? "rgba(240, 240, 240, 0.5)" : "rgba(68, 70, 132, 0.5)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {category.eyebrow}
          </p>
          <h3
            className="text-2xl md:text-3xl font-normal tracking-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#f0f0f0" : "#444684",
            }}
          >
            {category.title}
          </h3>
        </div>

        {/* Tools as tags */}
        <ul className="flex flex-wrap gap-2">
          {category.tools.map((tool, idx) => (
            <ToolTag 
              key={tool} 
              tool={tool} 
              index={idx} 
              darkMode={darkMode}
            />
          ))}
        </ul>

        {/* Subtle glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl -z-10"
          style={{
            background: darkMode 
              ? "radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)"
              : "radial-gradient(circle at 50% 0%, rgba(68, 70, 132, 0.03) 0%, transparent 50%)",
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

export default function Stack({ darkMode }: StackSectionProps) {
  return (
    <section
      className="w-full py-24 md:py-32 lg:py-40 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      style={{
        backgroundColor: darkMode ? "#202020" : "#E4E4E4",
        transition: "background-color 0.35s ease-out",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          {/* Eyebrow */}
          <p
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium mb-6 md:mb-8"
            style={{
              color: darkMode ? "rgba(240, 240, 240, 0.5)" : "rgba(68, 70, 132, 0.5)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            CRAFT & SYSTEMS
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
            The tools behind
            <br />
            the thinking.
          </h2>
        </motion.div>

        {/* Grid - Responsive 4 columns → 2 → 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <CategoryBlock
              key={category.id}
              category={category}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>

        {/* Optional: Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-20 text-center text-sm"
          style={{
            color: darkMode ? "rgba(240, 240, 240, 0.4)" : "rgba(68, 70, 132, 0.4)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
          }}
        >
          Always learning, always evolving.
        </motion.p>
      </div>
    </section>
  );
}