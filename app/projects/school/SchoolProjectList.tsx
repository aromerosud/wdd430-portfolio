import { getProjects } from "@/lib/projects-db";

async function getSchoolProjects() {
  return getProjects("school");
}

export default async function SchoolProjectList() {
  const projects = await getSchoolProjects();

  return (
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
  );
}
