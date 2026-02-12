import { motion, type Variants } from "framer-motion";

type AboutSectionProps = {
  darkMode: boolean;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function AboutSection({ darkMode }: AboutSectionProps) {
  const primary = darkMode ? "#F0F0F0" : "#444684";
  const secondary = darkMode ? "rgba(240,240,240,0.72)" : "rgba(68,70,132,0.72)";
  const hairline = darkMode ? "rgba(240,240,240,0.14)" : "rgba(68,70,132,0.18)";
  const chipBg = darkMode ? "rgba(255,255,255,0.04)" : "rgba(68,70,132,0.05)";
  const chipBorder = darkMode ? "rgba(240,240,240,0.14)" : "rgba(68,70,132,0.16)";

  return (
    <section className="w-full">
      <motion.div
        className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16 py-24 md:py-28"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top hairline */}
        <motion.div variants={fadeUp} className="h-px w-full" style={{ backgroundColor: hairline }} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: title */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.32em]" style={{ color: secondary }}>
              ABOUT
            </p>

            <h2
              className="mt-4 text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.02em]"
              style={{ color: primary, fontFamily: "Inter, sans-serif" }}
            >
              A bit about me
            </h2>

            {/* Small “profile chips” */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Creative Frontend", "Product-minded", "Design x Engineering"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs tracking-[0.16em] uppercase"
                  style={{ color: secondary, background: chipBg, border: `1px solid ${chipBorder}` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: narrative */}
          <motion.div variants={container} className="lg:col-span-7">
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed"
              style={{ color: secondary }}
            >
              I’m a creative frontend developer focused on building structured, intentional digital experiences. My
              background in marketing and web development shaped the way I think about clarity, performance and visual
              impact.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base md:text-lg leading-relaxed"
              style={{ color: secondary }}
            >
              I started building marketing-driven websites, but over time I became more interested in systems,
              interaction and product thinking. Today, I’m focused on bridging design and engineering through thoughtful
              frontend architecture.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base md:text-lg leading-relaxed"
              style={{ color: secondary }}
            >
              Currently exploring interactive interfaces, 3D, and performance-driven frontend development. Looking to
              collaborate on ambitious digital products where design and code work together.
            </motion.p>

            {/* Bottom meta line */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
              <div className="h-px flex-1" style={{ backgroundColor: hairline }} />
              <span className="text-xs uppercase tracking-[0.32em]" style={{ color: secondary }}>
                Open to opportunities
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}