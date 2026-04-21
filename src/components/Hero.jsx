import { useEffect, useState } from "react";

export default function Hero({sectionRefs}) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100)
        return () => clearTimeout(t)
    }, [])

    const fade = (delay) => `transition-all duration-700 ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`

    return (
        <section 
            id="home"
            className="relative min-h-screen flex flex-col justify-center px-[5vw] pt-24 pb-16 overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute top-1/4 right-[-10%] w-125 h-125 rounded-full bg-[#7fffd4]/5 blur-3xl pointer-events-none"/>

            {/* Eyebrow */}
            <p className={`font-mono-custom text-[#7fffd4] text-xs tracking-[0.2em] uppercase mb-6 ${fade("delay-100")}`}>
                — Backend Developer · MERN Stack
            </p>
            {/* Name */}
            <h1 className={`font-display text-[clamp(3.5rem,10vw,8rem)] font-extrabold leading-[0.95] tracking-tight mb-8 ${fade("delay-200")}`}>
                Hi, I'm<br />
                <span className="text-[#7fffd4]">Lishi</span>
            </h1>
            {/* Tagline */}
            <p className={`max-w-lg text-[#6b6b85] text-lg leading-relaxed mb-10 ${fade("delay-300")}`}>
                I build scalable REST APIs and backend systems using{" "}
                <span className="text-[#e8e8f0]">Node.js, Express & MongoDB</span>{" "}
                with clean architecture, JWT auth, and Swagger documentation.
            </p>
            {/* CTAs */}
            <div className={`flex gap-4 flex-wrap ${fade("delay-500")}`}>
                <a 
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault()
                        sectionRefs.current["projects"]?.scrollIntoView({ behavior: "smooth"})
                    }}
                    className="font-mono-custom text-xs tracking-widest uppercase px-6 py-3 bg-[#7fffd4] text-[#0a0a0f] font-medium rounded hover:bg-[#5fd4b0] hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-[#7fffd4]/10"
                >
                    View Projects ↓
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
            {/* Scroll hint */}
            <div className={`absolute bottom-10 left-[5vw] ${fade("delay-700")}`}>
                <div className="w-px h-12 bg-linear-to-b from-[#7fffd4]/40 to-transparent"/>
            </div>
        </section>
    )
}