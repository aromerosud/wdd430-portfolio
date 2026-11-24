import CreateProjectForm from "./create-project-form";

export default function CreateProjectPage() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Create New Project</h1>

      <CreateProjectForm />
    </main>
  );
}
