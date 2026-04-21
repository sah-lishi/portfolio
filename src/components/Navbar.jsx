import { useEffect, useState } from "react"

const links = ["About", "Skills", "Projects", "Contact"]

export default function Navbar({sectionRefs}) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        let ticking = false
        const onScroll = () => {
            if(!ticking){
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleNav = (e, id) => {
        e.preventDefault()
        sectionRefs.current[id.toLowerCase()]?.scrollIntoView({
            behavior: "smooth"
        })
    }
    
    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-4 transition-all duration-300 ${
        scrolled ? "border-b border-white/5 backdrop-blur-md bg-[#0a0a0f]/80" : ""
      }`}
        >
            {/* Logo */}
            <a href="#" className="font-mono-custom text-[#7fffd4] text-sm tracking-widest uppercase">
                lishi.dev
            </a>
            {/* Links */}
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <a 
                            href={`#${link.toLowerCase()}`}
                            onClick={(e) => handleNav(e, link)}
                            className="font-mono-custom text-xs tracking-widest text-[#6b6b85] uppercase hover:text-[#7fffd4] transition-colors duration-200"
                        >
                          {link}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}