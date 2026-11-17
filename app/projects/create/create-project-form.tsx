"use client";

import { useActionState } from "react";
import { createProject } from "@/lib/actions";
import { initialState } from "@/lib/project-form-state";

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(
    createProject,
    initialState,
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium">
          Project Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          minLength={2}
          aria-describedby="title-error"
          className="w-full rounded-md border border-slate-300 p-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title?.map((error) => (
            <p key={error} className="text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={10}
          rows={4}
          aria-describedby="description-error"
          className="w-full rounded-md border border-slate-300 p-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description?.map((error) => (
            <p key={error} className="text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="technologies"
          className="mb-2 block text-sm font-medium"
        >
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          required
          minLength={2}
          placeholder="Next.js, TypeScript, PostgreSQL"
          aria-describedby="technologies-error"
          className="w-full rounded-md border border-slate-300 p-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div id="technologies-error" aria-live="polite" aria-atomic="true">
          {state.errors?.technologies?.map((error) => (
            <p key={error} className="text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="type" className="mb-2 block text-sm font-medium">
          Project Type
        </label>
        <select
          id="type"
          name="type"
          required
          aria-describedby="type-error"
          className="w-full rounded-md border border-slate-300 p-2"
        >
          <option value="opensource">Open Source</option>
          <option value="school">School</option>
        </select>
        <div id="type-error" aria-live="polite" aria-atomic="true">
          {state.errors?.type?.map((error) => (
            <p key={error} className="text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="link" className="mb-2 block text-sm font-medium">
          Project Link
        </label>
        <input
          id="link"
          name="link"
          type="url"
          placeholder="https://github.com/..."
          aria-describedby="link-error"
          className="w-full rounded-md border border-slate-300 p-2"
        />
        <div id="link-error" aria-live="polite" aria-atomic="true">
          {state.errors?.link?.map((error) => (
            <p key={error} className="text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="yearCompleted"
          className="mb-2 block text-sm font-medium"
        >
          Year Completed
        </label>
        <input
          id="yearCompleted"
          name="yearCompleted"
          type="number"
          min="2000"
          max="2026"
          required
          aria-describedby="yearCompleted-error"
          className="w-full rounded-md border border-slate-300 p-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
          {state.errors?.yearCompleted?.map((error) => (
            <p key={error} className="text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {state.message && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Save Project"}
      </button>
    </form>
  );
}
