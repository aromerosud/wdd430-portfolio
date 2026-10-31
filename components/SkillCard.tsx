interface Typeface {
  title: string;
  description: string;
  skills: string[];
}

export default function SkillCard({ title, description, skills }: Typeface) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <h2 className="text-xl font-bold text-blue-950 mb-2">{title}</h2>

      <p className="text-slate-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
