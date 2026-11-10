export default function Loading() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12 animate-pulse">
      <div className="mb-10 space-y-4 text-center">
        <div className="mx-auto h-9 w-72 rounded bg-slate-200" />
        <div className="mx-auto h-4 w-80 max-w-full rounded bg-slate-200" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}
