import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Arturo Romero to discuss software development projects, collaboration, or professional opportunities.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Get in touch
        </span>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">
          Let&apos;s Work Together
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          I&apos;m always interested in connecting with people, discussing
          ideas, and exploring opportunities to build meaningful software
          solutions.
        </p>
      </section>

      <section className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10">
        <h2 className="text-2xl font-bold text-blue-950">
          How can we connect?
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Whether you have a project in mind, want to discuss technology,
          or simply want to connect professionally, feel free to reach out.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="https://www.linkedin.com/in/arturo-romero-rodriguez/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-indigo-400 hover:shadow-md"
          >
            <h3 className="font-bold text-blue-950">LinkedIn</h3>
            <p className="mt-2 text-sm text-slate-600">
              Connect with me professionally.
            </p>
            <span className="mt-4 inline-block font-semibold text-indigo-600">
              Visit profile →
            </span>
          </a>

          <a
            href="https://github.com/aromerosud"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-200 p-5 transition hover:-translate-y-1 hover:border-indigo-400 hover:shadow-md"
          >
            <h3 className="font-bold text-blue-950">GitHub</h3>
            <p className="mt-2 text-sm text-slate-600">
              Explore my projects and code.
            </p>
            <span className="mt-4 inline-block font-semibold text-indigo-600">
              Visit repositories →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}

