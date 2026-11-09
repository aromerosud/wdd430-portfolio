import { Project } from "@/lib/projects-db";

export const instant = false;

export default async function SchoolProjectsPage() {
  const response = await fetch(
    "http://localhost:3000/api/projects?type=school",
  );

  const projects: Project[] = await response.json();

  return (
    <main>
      <h1>School Projects</h1>
      <p>Explore my academic projects.</p>

      {projects.map((project) => (
        <article key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Technologies: {project.technologies.join(", ")}</p>
        </article>
      ))}
    </main>
  );
}
