import Hero from './components/Hero'
import ProcessApproach from './components/ProcessApproach'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import StackSection from './components/StackSection'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <>
      <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
      <Projects darkMode={darkMode} />
      <ProcessApproach darkMode={darkMode} />
      <StackSection darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  )
}

export default App  //