import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-[5vw] py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="font-mono-custom text-[#7fffd4] text-xs tracking-[0.2em] uppercase mb-4">
          03 — Projects
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
            What I've built.
          </h2>
          <p className="font-mono-custom text-xs text-[#6b6b85] tracking-widest uppercase">
            All deployed on Render ↗
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group relative border border-white/5 rounded-xl bg-white/2 p-6 md:p-8 hover:border-[#7fffd4]/20 hover:bg-white/4 transition-all duration-300 overflow-hidden">

      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-[#7fffd4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

        {/* Left — Content */}
        <div className="flex-1">
          {/* Number + Highlight badge */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono-custom text-[#7fffd4]/50 text-xs tracking-widest">
              {project.number}
            </span>
            <span className="font-mono-custom text-[0.65rem] text-[#7fffd4] tracking-wider px-2 py-0.5 border border-[#7fffd4]/20 rounded-full bg-[#7fffd4]/5">
              {project.highlight}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-3 group-hover:text-[#7fffd4] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[#6b6b85] text-sm leading-relaxed max-w-xl mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono-custom text-[0.68rem] text-[#6b6b85] px-2.5 py-1 border border-white/5 rounded bg-white/3 hover:text-[#7fffd4] hover:border-[#7fffd4]/20 transition-colors duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Links */}
        <div className="flex md:flex-col gap-3 shrink-0">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-[0.7rem] tracking-widest uppercase px-4 py-2.5 bg-[#7fffd4] text-[#0a0a0f] font-medium rounded hover:bg-[#5fd4b0] hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            Live Demo ↗
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-[0.7rem] tracking-widest uppercase px-4 py-2.5 border border-white/10 text-[#e8e8f0] rounded hover:border-[#7fffd4] hover:text-[#7fffd4] hover:-translate-y-0.5 transition-all duration-200 text-center"
          >
            GitHub ↗
          </a>
        </div>

      </div>
    </div>
  );
}