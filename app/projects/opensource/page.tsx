import { getProjects } from "@/lib/projects-db";

export const instant = false;

async function getOpenSourceProjects() {
  return getProjects("opensource");
}

export default async function OpenSourcePage() {
  const projects = await getOpenSourceProjects();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">
          Open Source Projects
        </h1>

        <p className="text-slate-600">Explore my open source projects.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="mb-3 text-xl font-bold text-slate-800">
              {project.title}
            </h2>

            <p className="mb-4 text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>

            <p className="text-sm text-slate-600">
              Technologies: {project.technologies.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
