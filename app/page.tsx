import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio site built with Next.js and TypeScript.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "React"],
    link: "https://www.linkedin.com/in/arturo-romero-rodriguez/",
  },
  {
    title: "Task Manager",
    description: "A full-stack app for tracking tasks and team progress.",
    technologies: ["React", "Node.js", "MongoDB", "JavaScript"],
    link: "https://www.linkedin.com/in/arturo-romero-rodriguez/",
  },
  {
    title: "E-Commerce Store",
    description: "A online storefront featuring product browsing and checkout.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-6">
      <section className="text-center lg:text-left py-6">
        <span className="inline-block text-xs font-semibold tracking-widest text-indigo-800 mb-2">
          FULL STACK DEVELOPER
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-2">
          My Portfolio
        </h1>

        <h2 className="text-lg md:text-xl font-medium text-slate-800 mb-3">
          Building modern web experiences.
        </h2>

        <p className="text-base text-slate-600 max-w-2xl mx-auto lg:mx-0">
          Welcome to my portfolio! Here you can fnd a selection of my projects
          and work experience.
        </p>
      </section>

      <section className="pb-12">
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
