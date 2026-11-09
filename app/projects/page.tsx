import { Project } from "@/lib/projects-db";

export const instant = false;

export default async function ProjectsPage() {
  const response = await fetch("http://localhost:3000/api/projects");

  const projects: Project[] = await response.json();

  return (
    <main>
      <h1>Projects Overview</h1>
      <p>Welcome to my projects section.</p>

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
