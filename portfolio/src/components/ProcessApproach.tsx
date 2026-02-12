// ProcessApproach.tsx
import { motion, type Variants } from "framer-motion";

type ProcessApproachProps = {
  darkMode: boolean;
};

const items = [
  {
    n: "01",
    title: "Concept & UX First",
    body: "Before design or code, I define intention and user experience. Every decision should improve clarity and usability.",
  },
  {
    n: "02",
    title: "Design Meets Engineering",
    body: "Interfaces aren’t just visuals. They’re systems—components, structure, and consistency built to scale.",
  },
  {
    n: "03",
    title: "Interaction & Experience",
    body: "Details matter. Micro-interactions, rhythm, and feedback shape how a product feels.",
  },
  {
    n: "04",
    title: "Performance & Structure",
    body: "Experiences should feel fluid and lightweight. Clean architecture, clear decisions, and performance in mind.",
  },
];

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function ProcessApproach({ darkMode }: ProcessApproachProps) {
  const textPrimary = darkMode ? "#F0F0F0" : "#444684";
  const textSecondary = darkMode ? "rgba(240,240,240,0.72)" : "rgba(68,70,132,0.72)";
  const border = darkMode ? "rgba(240,240,240,0.14)" : "rgba(68,70,132,0.18)";
  const cardBg = darkMode ? "rgba(255,255,255,0.03)" : "transparent";
  const hoverBorder = darkMode ? "rgba(232,176,89,0.55)" : "rgba(68,70,132,0.38)";
  const hoverBg = darkMode ? "rgba(255,255,255,0.05)" : "rgba(68,70,132,0.04)";

  return (
    <section className="w-full">
      <motion.div
        className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16 py-24 md:py-28"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em]" style={{ color: textSecondary }}>
            PROCESS
          </p>

          <h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.02em]"
            style={{ color: textPrimary, fontFamily: "Inter, sans-serif" }}
          >
            Approach
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: textSecondary }}>
            I design and build digital experiences where clarity, structure and interaction work together.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div variants={container} className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {items.map((it) => (
            <motion.article
              key={it.n}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative rounded-2xl border p-7 md:p-8 will-change-transform"
              style={{ borderColor: border, background: cardBg }}
            >
              {/* Hover wash + border accent */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: hoverBg,
                  boxShadow: darkMode ? "0 18px 60px rgba(0,0,0,0.30)" : "0 18px 60px rgba(17, 18, 36, 0.10)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: `1px solid ${hoverBorder}` }}
              />

              {/* Number + Title */}
              <div className="relative z-10 flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs tracking-[0.34em]" style={{ color: textSecondary }}>
                    {it.n}
                  </p>
                  <h3 className="mt-3 text-xl md:text-2xl font-normal tracking-[-0.01em]" style={{ color: textPrimary }}>
                    {it.title}
                  </h3>
                </div>

                {/* Tiny mark */}
                <div
                  className="relative z-10 mt-1 h-[10px] w-[10px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: darkMode ? "#E8B059" : "#444684" }}
                />
              </div>

              <p className="relative z-10 mt-6 text-sm md:text-base leading-relaxed" style={{ color: textSecondary }}>
                {it.body}
              </p>

              <div
                className="relative z-10 mt-8 h-px w-full"
                style={{ backgroundColor: darkMode ? "rgba(240,240,240,0.10)" : "rgba(68,70,132,0.14)" }}
              />
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}