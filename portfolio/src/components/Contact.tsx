import { motion } from "framer-motion";
import { useState } from "react";

type ContactSectionProps = {
  darkMode: boolean;
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/MiguelDeLaMora",
    handle: "@MiguelDeLaMora"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/miguel-de-la-mora/",
    handle: "miguel-de-la-mora"
  },
  {
    name: "Email",
    url: "mailto:miguelalejandrodelamoraarocha@gmail.com",
    handle: "Send a message"
  }
];

function SocialLink({ 
  link, 
  index, 
  darkMode 
}: { 
  link: typeof socialLinks[0]; 
  index: number; 
  darkMode: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link.url}
      target={link.name !== "Email" ? "_blank" : undefined}
      rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: 0.6 + index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block"
    >
      <motion.div
        className="p-6 md:p-8 rounded-2xl"
        style={{
          backgroundColor: darkMode ? "rgba(255, 255, 255, 0.02)" : "rgba(68, 70, 132, 0.02)",
          border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(68, 70, 132, 0.08)"}`,
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        animate={{
          borderColor: isHovered
            ? darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(68, 70, 132, 0.2)"
            : darkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(68, 70, 132, 0.08)",
          y: isHovered ? -4 : 0,
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3
              className="text-lg md:text-xl font-medium mb-1"
              style={{
                fontFamily: "Inter, sans-serif",
                color: darkMode ? "#f0f0f0" : "#444684",
              }}
            >
              {link.name}
            </h3>
            <p
              className="text-sm"
              style={{
                color: darkMode ? "rgba(240, 240, 240, 0.5)" : "rgba(68, 70, 132, 0.5)",
              }}
            >
              {link.handle}
            </p>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{
              x: isHovered ? 4 : 0,
              y: isHovered ? -4 : 0,
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
      </motion.div>
    </motion.a>
  );
}

export default function Contact({ darkMode }: ContactSectionProps) {
  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <section
      className="w-full py-24 md:py-32 lg:py-40 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
      style={{
        backgroundColor: darkMode ? "#202020" : "#E4E4E4",
        transition: "background-color 0.35s ease-out",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-full mb-20 md:mb-28 origin-left"
          style={{
            backgroundColor: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(68, 70, 132, 0.1)",
          }}
        />

        <div className="text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium mb-8"
            style={{
              color: darkMode ? "rgba(240, 240, 240, 0.5)" : "rgba(68, 70, 132, 0.5)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            LET'S CONNECT
          </motion.p>

          {/* Main CTA */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-12 md:mb-16 tracking-tight leading-[1.1] max-w-4xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              color: darkMode ? "#f0f0f0" : "#444684",
              letterSpacing: "-0.02em",
            }}
          >
            Ready to bring your
            <br />
            ideas to life?
          </motion.h2>

          {/* Big Email Link */}
          <motion.a
            href="mailto:miguelalejandrodelamoraarocha@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
            className="inline-block group relative mb-16 md:mb-20"
          >
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                color: darkMode ? "#f0f0f0" : "#444684",
              }}
              animate={{
                y: emailHovered ? -4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              miguelalejandrodelamoraarocha@gmail.com
            </motion.div>
            
            {/* Underline */}
            <motion.div
              className="absolute bottom-0 left-0 h-px w-full origin-left"
              style={{
                backgroundColor: darkMode ? "#f0f0f0" : "#444684",
              }}
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: emailHovered ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.a>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-20 md:mb-24">
            {socialLinks.map((link, index) => (
              <SocialLink 
                key={link.name} 
                link={link} 
                index={index} 
                darkMode={darkMode}
              />
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p
              className="text-sm mb-3"
              style={{
                color: darkMode ? "rgba(240, 240, 240, 0.5)" : "rgba(68, 70, 132, 0.5)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
              }}
            >
              Designed & built by Miguel de la Mora
            </p>
            <p
              className="text-xs"
              style={{
                color: darkMode ? "rgba(240, 240, 240, 0.3)" : "rgba(68, 70, 132, 0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              © 2026 · Made with React, TypeScript & Three.js
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}