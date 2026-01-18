import { AiFillBehanceCircle } from "react-icons/ai";
import "./App.css";
import { FiGithub, FiLinkedin, FiDribbble } from "react-icons/fi";
import { SiBehance } from "react-icons/si";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-semibold tracking-tight">
          Miguel de la Mora
        </span>

        <nav className="flex gap-6 text-sm text-neutral-400">
          <a href="#work" className="hover:text-neutral-100">Work</a>
          <a href="#about" className="hover:text-neutral-100">About</a>
          <a href="#contact" className="hover:text-neutral-100">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto w-full max-w-5xl px-6">
        <section className="relative pt-24 pb-32">
  <div className="max-w-6xl">
    {/* Headline */}
    <h1 className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-tight">
      <span className="block">FRONTEND</span>
      <span className="block italic text-blue-500">DEVELOPER</span>
      <span className="block">
        & PRODUCT{" "}
        <span className="text-blue-500">DESIGNER</span>
      </span>
    </h1>

    {/* CTA */}
    <div className="mt-12 flex flex-wrap items-center gap-6">
      <a
        href="#contact"
        className="inline-flex items-center gap-3 rounded-full border border-neutral-700 px-7 py-3 text-sm font-semibold hover:border-neutral-500"
      >
        Contact me
      </a>

      <a
        href="#"
        className="inline-flex items-center gap-3 text-sm font-semibold text-neutral-300 hover:text-white"
      >
        Download CV
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-neutral-950">
          ↗
        </span>
      </a>
    </div>
  </div>

  {/* Socials (lado derecho) */}
  <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-5 md:flex">
  <a
    href="https://www.linkedin.com/in/TU-USUARIO"
    target="_blank"
    className="text-neutral-400 transition hover:text-blue-500"
  >
    <FiLinkedin size={20} />
  </a>

  <a
    href="https://github.com/migueldelamora"
    target="_blank"
    className="text-neutral-400 transition hover:text-white"
  >
    <FiGithub size={20} />
  </a>

  <a
    href="https://www.behance.net/TU-USUARIO"
    target="_blank"
    className="text-neutral-400 transition hover:text-blue-500"
  >
    <SiBehance size={20} />
  </a>
</div>
</section>

        {/* Placeholder sections */}
        <section id="work" className="py-20">
          <h2 className="mb-4 text-lg font-medium">Selected work</h2>
          <p className="text-neutral-400">
            Projects will go here.
          </p>
        </section>

        <section id="about" className="py-20">
          <h2 className="mb-4 text-lg font-medium">About</h2>
          <p className="max-w-2xl text-neutral-400">
            Short professional summary goes here.
          </p>
        </section>

        <section id="contact" className="py-20">
          <h2 className="mb-4 text-lg font-medium">Contact</h2>
          <p className="text-neutral-400">
            Email:{" "}
            <a
              href="mailto:migueldelamora@gmail.com"
              className="text-neutral-100 hover:underline"
            >
              migueldelamora@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}