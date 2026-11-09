import { Project } from "@/lib/projects-db";

export const instant = false;

export default async function OpenSourcePage() {
  const response = await fetch(
    "http://localhost:3000/api/projects?type=opensource",
  );

  const projects: Project[] = await response.json();

  return (
    <main>
      <h1>Open Source Projects</h1>
      <p>Explore my open source projects.</p>

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
