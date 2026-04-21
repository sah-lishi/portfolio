import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const sectionRefs = useRef({})
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar sectionRefs={sectionRefs} />
      <Hero sectionRefs={sectionRefs}/>
      <About sectionRefs={sectionRefs}/>
      <Skills sectionRefs={sectionRefs}/>
      <Projects sectionRefs={sectionRefs}/>
      <Contact sectionRefs={sectionRefs}/>
      <Footer />
    </div>
  )
}

export default App
/* <section ref={(el) => (sectionRefs.current.about = el)}>
        About
      </section>
      <section ref={(el) => (sectionRefs.current.skills = el)}>
        Skills
      </section> */