interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>

      <p className="text-slate-600 mb-5 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {technology}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          View Project →
        </a>
      )}
    </article>
  );
}
