import resumePDF from "../assets/resume.pdf";

export default function Contact() {
  return (
    <section id="contact" className="px-[5vw] py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="font-mono-custom text-[#7fffd4] text-xs tracking-[0.2em] uppercase mb-4">
          04 — Contact
        </p>

        {/* Big heading */}
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
          Let's work<br />
          <span className="text-[#7fffd4]">together.</span>
        </h2>

        <p className="text-[#6b6b85] text-base max-w-md leading-relaxed mb-12">
          Open to backend and full-stack internship or entry-level opportunities. If you're looking for someone who builds secure, well-structured APIs with real-world features like authentication, access control, and integrations — let’s connect.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="mailto:lishisaah@gmail.com"
            className="font-mono-custom text-xs tracking-widest uppercase px-6 py-3 bg-[#7fffd4] text-[#0a0a0f] font-medium rounded hover:bg-[#5fd4b0] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#7fffd4]/10"
          >
            Send Email →
          </a>
          <a
            href="https://www.linkedin.com/in/lishi-sah-56abb4257/"
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-xs tracking-widest uppercase px-6 py-3 border border-white/10 text-[#e8e8f0] rounded hover:border-[#7fffd4] hover:text-[#7fffd4] hover:-translate-y-0.5 transition-all duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/sah-lishi"
            target="_blank"
            rel="noreferrer"
            className="font-mono-custom text-xs tracking-widest uppercase px-6 py-3 border border-white/10 text-[#e8e8f0] rounded hover:border-[#7fffd4] hover:text-[#7fffd4] hover:-translate-y-0.5 transition-all duration-200"
          >
            GitHub ↗
          </a>
        </div>

        {/* Resume Download Card */}
        <div className="border border-white/5 rounded-xl bg-white/2 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#7fffd4]/20 transition-colors duration-300">
          <div>
            <p className="font-mono-custom text-[#7fffd4] text-xs tracking-[0.2em] uppercase mb-2">
              Resume
            </p>
            <h3 className="font-display text-xl font-bold tracking-tight mb-1">
              Download Resume
            </h3>
            <p className="font-mono-custom text-[#6b6b85] text-xs">
              PDF · Updated 2026
            </p>
          </div>
          <a
            href={resumePDF}
            download="Lishi_Resume.pdf"
            className="shrink-0 font-mono-custom text-xs tracking-widest uppercase px-6 py-3 bg-[#7fffd4] text-[#0a0a0f] font-medium rounded hover:bg-[#5fd4b0] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#7fffd4]/10"
          >
            Download ↓
          </a>
        </div>

      </div>
    </section>
  );
}