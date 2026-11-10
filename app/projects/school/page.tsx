import { Suspense } from "react";
import SchoolProjectList from "./SchoolProjectList";

function ProjectCardSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
      {[1, 2, 3].map((item) => (
        <article
          key={item}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 h-6 w-2/3 rounded bg-slate-200" />
          <div className="mb-3 h-4 w-full rounded bg-slate-200" />
          <div className="mb-5 h-4 w-4/5 rounded bg-slate-200" />
          <div className="h-4 w-1/2 rounded bg-slate-200" />
        </article>
      ))}
    </div>
  );
}

export default function SchoolProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-3xl font-bold text-slate-900">
          School Projects
        </h1>

        <p className="text-slate-600">Explore my academic projects.</p>
      </div>

      <Suspense fallback={<ProjectCardSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}
