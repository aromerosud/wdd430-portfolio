export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Projects Section</h2>

      <nav>
        <a href="/projects">Overview</a>
        {" | "}
        <a href="/projects/settings">Settings</a>
      </nav>

      {children}
    </section>
  );
}
