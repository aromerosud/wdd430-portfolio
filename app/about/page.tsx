import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-950 mb-4">About Me</h1>

      <p className="text-lg text-slate-700 mb-8">
        This about page shares more information about my background and work.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-blue-950 mb-6">
          My Technical Skills
        </h2>

        <SkillCard
          title="Frontend Development"
          description="Technologies I use to build modern web applications."
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "TypeScript",
          ]}
        />
      </section>
    </main>
  );
}
