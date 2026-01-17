import "./App.css";

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
        <section className="pt-16 pb-20">
          <p className="mb-4 text-sm text-neutral-400">
            Frontend • UX • Product mindset
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Product-focused Frontend Developer
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
            With a background in Industrial Design. I build fast, thoughtful web
            experiences and I’m evolving toward software and native apps.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#work"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
            >
              View work
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-neutral-100 hover:border-neutral-500"
            >
              Contact
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