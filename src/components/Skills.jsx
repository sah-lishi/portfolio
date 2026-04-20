const skillGroups = [
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST API Design", "JWT Authentication", "Middleware", "Role-Based Access Control", "Owner-Based Access Control", "MVC Pattern"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose", "Aggregation Pipelines", "Indexing & Query Optimization"],
  },
  {
    category: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    category: "Dev Tools",
    skills: ["Git & GitHub", "Postman", "Swagger / OpenAPI", "Deployment (Render, GitHub Pages)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-[5vw] py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="font-mono-custom text-[#7fffd4] text-xs tracking-[0.2em] uppercase mb-4">
          02 — Skills
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-16">
          What I work with.
        </h2>

        {/* Skill groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="p-5 border border-white/5 rounded-lg bg-white/2 hover:border-[#7fffd4]/20 transition-all duration-300 group"
            >
              {/* Category label */}
              <p className="font-mono-custom text-[#7fffd4] text-[0.65rem] tracking-[0.2em] uppercase mb-4 group-hover:tracking-[0.25em] transition-all duration-300">
                {category}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-[0.7rem] font-mono-custom text-[#6b6b85] border border-white/5 rounded bg-white/3 hover:text-[#7fffd4] hover:border-[#7fffd4]/25 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}