// ContactSection.tsx
import { motion, type Variants } from "framer-motion";

type ContactSectionProps = {
  darkMode: boolean;
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export default function ContactSection({ darkMode }: ContactSectionProps) {
  const primary = darkMode ? "#F0F0F0" : "#444684";
  const secondary = darkMode
    ? "rgba(240,240,240,0.72)"
    : "rgba(68,70,132,0.72)";
  const hairline = darkMode
    ? "rgba(240,240,240,0.14)"
    : "rgba(68,70,132,0.18)";

  return (
    <section className="w-full">
      <motion.div
        className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16 py-32 md:py-36"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top Hairline */}
        <motion.div
          variants={fadeUp}
          className="h-px w-full"
          style={{ backgroundColor: hairline }}
        />

        <div className="mt-16 text-center">
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.32em]"
            style={{ color: secondary }}
          >
            CONTACT
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-normal tracking-[-0.02em]"
            style={{ color: primary, fontFamily: "Inter, sans-serif" }}
          >
            Let’s build something meaningful.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg"
            style={{ color: secondary }}
          >
            Currently available for frontend roles and digital product
            collaborations.
          </motion.p>

          {/* Email */}
          <motion.a
            variants={fadeUp}
            href="mailto:miguelalejandrodelamoraarocha@gmail.com"
            className="block mt-12 text-xl md:text-2xl lg:text-3xl font-normal tracking-[-0.01em] transition-opacity duration-300 hover:opacity-70"
            style={{ color: primary }}
          >
            miguelalejandrodelamoraarocha@gmail.com
          </motion.a>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex justify-center gap-8 text-sm uppercase tracking-[0.18em]"
            style={{ color: secondary }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}