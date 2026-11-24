import { Suspense } from "react";
import Link from "next/link";
import { auth } from "@/auth";
import { connection } from "next/server";

async function DashboardContent() {
  await connection();
  const session = await auth();
  const user = session?.user;

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-blue-800 p-8 text-white shadow-lg">
        <p className="text-sm font-medium text-blue-200">
          Portfolio Administration
        </p>

        <h2 className="mt-3 text-3xl font-bold">Welcome, {user?.name}!</h2>

        <p className="mt-3 max-w-xl text-blue-100">
          Manage your portfolio, organize your projects, and keep your
          professional profile up to date.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800">My Projects</h2>

        <p className="mt-2 text-sm text-slate-600">
          Manage your portfolio projects in one place. You can create, review,
          update, and remove your projects.
        </p>

        <Link
          href="/dashboard/projects"
          className="mt-6 inline-flex items-center rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white transition hover:bg-blue-900"
        >
          Manage Projects
        </Link>
      </section>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#e8eef5] px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>

        <Suspense
          fallback={<p className="text-slate-600">Loading dashboard...</p>}
        >
          <DashboardContent />
        </Suspense>
      </div>
    </main>
  );
}
