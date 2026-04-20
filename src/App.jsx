import { useRef } from 'react'
import './App.css'
import Example from './components/Navbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const sectionRefs = useRef({})
  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <Navbar sectionRefs={sectionRefs} />
      <Hero />
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