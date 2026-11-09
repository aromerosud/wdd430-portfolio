import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
  return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
  return rows[0] ?? null;
}

/*
export const projects: Project[] = [
  {
    id: 1,
    title: "WDD430 Portfolio",
    description:
      "A personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    type: "school",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://wdd430-portfolio-kappa-rose.vercel.app/",
  },
  {
    id: 2,
    title: "Movie Management Application",
    description: "A web application for managing movies, genres, and actors.",
    type: "school",
    technologies: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Open Source Portfolio",
    description: "A portfolio project shared with the developer community.",
    type: "opensource",
    technologies: ["Next.js", "TypeScript", "Git", "GitHub"],
    link: "https://github.com/aromerosud/wdd430-portfolio",
  },
];


export function getProjects(type?: string | null): Project[] {
  if (type) {
    return projects.filter((p) => p.type === type);
  }

  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find((p) => p.id === id) ?? null;
}
*/
