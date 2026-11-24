import SkillCard from "@/components/SkillCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Arturo Romero, his professional background, skills, and experience as a Software Developer.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-16">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          About Me
        </span>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-blue-950 sm:text-5xl">
          Building Software Solutions
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          I&apos;m a Software Developer with over 8 years of professional
          experience building and maintaining software solutions. My background
          includes C#, .NET, ASP.NET, SQL Server, Oracle, and REST APIs.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          I&apos;m currently pursuing a degree in Software Development through
          BYU-Pathway Worldwide, strengthening my knowledge of modern web
          technologies, software architecture, and full-stack development.
        </p>
      </section>

      <section>
        <div className="mb-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            What I Work With
          </span>

          <h2 className="mt-2 text-3xl font-bold text-blue-950">
            My Technical Skills
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600">
            A combination of professional experience and technologies I&apos;m
            currently developing my expertise in.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillCard
            title="Backend Development"
            description="Building server-side applications and APIs."
            skills={[
              "C#",
              ".NET",
              "ASP.NET",
              "REST APIs",
              "SQL Server",
              "Oracle",
            ]}
          />

          <SkillCard
            title="Frontend Development"
            description="Developing modern and responsive web interfaces."
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "TypeScript",
            ]}
          />

          <SkillCard
            title="Database Management"
            description="Working with relational databases and data management."
            skills={["SQL Server", "Oracle", "PostgreSQL"]}
          />

          <SkillCard
            title="Tools & Technologies"
            description="Tools and platforms used in modern development workflows."
            skills={["Git", "GitHub", "Visual Studio", "VS Code", "Vercel"]}
          />
        </div>
      </section>
    </main>
  );
}
