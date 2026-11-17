
import { getProjectById } from "@/lib/projects-db";
import { updateProject } from "@/lib/actions";
import { notFound } from "next/navigation";

export const instant = false;

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Edit Project
      </h1>

      <form action={updateProject.bind(null, project.id)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            defaultValue={project.title}
            required
            minLength={2}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            defaultValue={project.description}
            required
            minLength={10}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="technologies">Technologies</label>
          <input
            id="technologies"
            name="technologies"
            defaultValue={project.technologies.join(", ")}
            required
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="type">Project Type</label>
          <select
            id="type"
            name="type"
            defaultValue={project.type}
            required
            className="w-full rounded border p-2"
          >
            <option value="opensource">Open Source</option>
            <option value="school">School</option>
          </select>
        </div>

        <div>
          <label htmlFor="link">Project Link</label>
          <input
            id="link"
            name="link"
            type="url"
            defaultValue={project.link ?? ""}
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="yearCompleted">Year Completed</label>
          <input
            id="yearCompleted"
            name="yearCompleted"
            type="number"
            min="2000"
            max={new Date().getFullYear()}
            defaultValue={project.year_completed ?? ""}
            required
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
        >
          Update Project
        </button>
      </form>
    </main>
  );
}

