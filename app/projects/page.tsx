import { Suspense } from "react";
import { fetchFilteredProjects, fetchProjectsPages } from "@/lib/projects-db";
import ProjectSearch from "@/components/ProjectSearch";
import Pagination from "@/components/Pagination";

export const instant = false;

interface ProjectsPageProps {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}

async function ProjectsList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const projects = await fetchFilteredProjects(query, currentPage);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.id}
          className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mb-4">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
              {project.type === "opensource" ? "Open Source" : "Academic"}
            </span>
          </div>

          <h2 className="mb-3 text-xl font-bold text-slate-800">
            {project.title}
          </h2>

          <p className="mb-5 flex-grow text-sm leading-relaxed text-slate-600">
            {project.description}
          </p>

          <div className="mb-5">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              View Project
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

export default async function ProjectsPage({
  searchParams,
}: ProjectsPageProps) {
  const params = await searchParams;

  const query = typeof params?.query === "string" ? params.query : "";

  const requestedPage = Number(params?.page);
  const currentPage =
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;

  const totalPages = await fetchProjectsPages(query);

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-slate-900">
          Projects Overview
        </h1>

        <p className="mx-auto max-w-2xl text-slate-600">
          Explore my academic and open-source projects, the technologies used,
          and the experience gained throughout my development journey.
        </p>
      </div>

      <Suspense fallback={<p>Loading search...</p>}>
        <ProjectSearch />
      </Suspense>

      <Suspense
        fallback={
          <p className="py-10 text-center text-slate-600">
            Loading projects...
          </p>
        }
      >
        <ProjectsList query={query} currentPage={currentPage} />
      </Suspense>

      <Suspense fallback={null}>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </section>
  );
}
