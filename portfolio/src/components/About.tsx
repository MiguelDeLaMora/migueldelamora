import { motion } from "framer-motion";
import { useState } from "react";

type AboutSectionProps = {
  darkMode: boolean;
};

const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Projects Delivered" },
  { number: "100%", label: "Client Satisfaction" },
];

const chips = [
  "Creative Frontend",
  "Product-minded",
  "Design × Engineering",
  "Interactive UI",
];

function StatCard({ 
  stat, 
  index, 
  darkMode 
}: { 
  stat: { number: string; label: string }; 
  index: number; 
  darkMode: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-center"
    >
      <motion.h3
        className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
        style={{
          fontFamily: "Inter, sans-serif",
          color: darkMode ? "#f0f0f0" : "#444684",
        }}
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {stat.number}
      </motion.h3>
      <p
        className="mt-3 text-xs uppercase tracking-[0.2em] font-medium"
        style={{
          color: darkMode ? "rgba(240, 240, 240, 0.5)" : "rgba(68, 70, 132, 0.5)",
        }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function About({ darkMode }: AboutSectionProps) {
  return (
    <section
      className="w-full py-24 md:py-32 lg:py-40 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      style={{
        backgroundColor: darkMode ? "#202020" : "#E4E4E4",
        transition: "background-color 0.35s ease-out",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-full mb-16 md:mb-24 origin-left"
          style={{
            backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(68, 70, 132, 0.1)",
          }}
        />

        {/* Main Grid - Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          
          {/* LEFT: Visual + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <p
              className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium mb-6"
              style={{
                color: darkMode ? "rgba(240, 240, 240, 0.5)" : "rgba(68, 70, 132, 0.5)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              ABOUT
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
              A bit about me
            </h2>

            {/* Image placeholder */}
            <motion.div
  className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-8"
  style={{
    backgroundColor: darkMode
      ? "rgba(255,255,255,0.05)"
      : "rgba(68,70,132,0.05)",
    border: `1px solid ${
      darkMode
        ? "rgba(255,255,255,0.1)"
        : "rgba(68,70,132,0.1)"
    }`,
  }}
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  <img
    src="/public/images/miguel-climbing.jpg"
    alt="Miguel de la Mora climbing"
    className="absolute inset-0 w-full h-full object-cover"
  />
</motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatCard 
                  key={stat.label} 
                  stat={stat} 
                  index={index} 
                  darkMode={darkMode}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {chips.map((chip, index) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + index * 0.05,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-block px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium"
                  style={{
                    backgroundColor: darkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(68, 70, 132, 0.05)",
                    border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(68, 70, 132, 0.1)"}`,
                    color: darkMode ? "rgba(240, 240, 240, 0.7)" : "rgba(68, 70, 132, 0.7)",
                  }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed"
                style={{
                  color: darkMode ? "rgba(240, 240, 240, 0.7)" : "rgba(68, 70, 132, 0.7)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                }}
              >
                I'm a creative frontend developer focused on building structured, 
                intentional digital experiences. My background in marketing and web 
                development shaped the way I think about clarity, performance and 
                visual impact.
              </p>

              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed"
                style={{
                  color: darkMode ? "rgba(240, 240, 240, 0.7)" : "rgba(68, 70, 132, 0.7)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                }}
              >
                I started building marketing-driven websites, but over time I became 
                more interested in systems, interaction and product thinking. Today, 
                I'm focused on bridging design and engineering through thoughtful 
                frontend architecture.
              </p>

              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed"
                style={{
                  color: darkMode ? "rgba(240, 240, 240, 0.7)" : "rgba(68, 70, 132, 0.7)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                }}
              >
                Currently exploring interactive interfaces, 3D, and performance-driven 
                frontend development. Looking to collaborate on ambitious digital 
                products where design and code work together.
              </p>

              <p
                className="text-base md:text-lg lg:text-xl leading-relaxed"
                style={{
                  color: darkMode ? "rgba(240, 240, 240, 0.7)" : "rgba(68, 70, 132, 0.7)",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                }}
              >
                Also, I climb mountains.
              </p>
            </motion.div>

            {/* CTA / Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center gap-4"
            >
              <div
                className="h-px flex-1"
                style={{
                  backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(68, 70, 132, 0.1)",
                }}
              />
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: darkMode ? "#E8B059" : "#444684",
                  }}
                />
                <span
                  className="text-xs uppercase tracking-[0.2em] font-medium"
                  style={{
                    color: darkMode ? "rgba(240, 240, 240, 0.6)" : "rgba(68, 70, 132, 0.6)",
                  }}
                >
                  Open to opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}