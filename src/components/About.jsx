export default function About() {
  return (
    <section id="about" className="px-[5vw] py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — Text */}
        <div>
          <p className="font-mono-custom text-[#7fffd4] text-xs tracking-[0.2em] uppercase mb-4">
            01 — About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-8">
            Building backends<br />
            <span className="text-[#7fffd4]">that actually work.</span>
          </h2>
          <div className="space-y-4 text-[#6b6b85] text-base leading-relaxed">
            <p>
              I’m a backend-focused developer with a BCA degree, experienced in building scalable and production-ready systems. I work with Node.js, Express, and MongoDB to design clean REST APIs with{" "}
              <span className="text-[#e8e8f0]">secure authentication</span>{" "}(JWT & refresh tokens),{" "}
              <span className="text-[#e8e8f0]">role-based access control</span>,{" "} 
              <span className="text-[#e8e8f0]">owner-based authorization</span>{" "} for data protection, {""}
              <span className="text-[#e8e8f0]">authentication systems</span>{" "}and{" "}
              <span className="text-[#e8e8f0]">third-party API integrations</span>.
            </p>
            <p>
              I’ve developed and deployed multiple backend projects, focusing on real-world use cases and best practices.
            </p>
            <p>
              Currently seeking backend or full-stack internship or entry-level opportunities where I can contribute to real-world products and grow as a developer.
            </p>
          </div>
        </div>

        {/* Right — Quick facts */}
        <div className="space-y-4 pt-2">
          <p className="font-mono-custom text-[#7fffd4] text-xs tracking-[0.2em] uppercase mb-6">
            Quick Facts
          </p>
          {[
            { label: "Focus", value: "Backend / MERN Stack" },
            { label: "Experience", value: "3 Deployed Projects" },
            { label: "Docs", value: "OpenAPI 3.0 / Swagger UI" },
            { label: "Deployment", value: "Render + GitHub Pages" },
            { label: "Looking for", value: "Backend Internship" },
            { label: "Platform", value: "Internshala" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between px-4 py-3 border border-white/5 rounded bg-white/2 hover:border-[#7fffd4]/20 transition-colors duration-200"
            >
              <span className="font-mono-custom text-xs text-[#6b6b85] tracking-widest uppercase">
                {label}
              </span>
              <span className="font-mono-custom text-xs text-[#e8e8f0]">{value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}