import './App.css'
import AboutmeSection from './components/sections/AboutmeSection'
import HeroSection from './components/sections/HeroSection'
import SkillSection from './components/sections/SkillSection' 
import ProjectsSection from './components/sections/ProjectsSection'


function App() {

  return (
    <main className="w-full overflow-x-hidden pb-16">
      <HeroSection />
      <AboutmeSection />
      <SkillSection />
      <ProjectsSection />
    </main>
  )
}

export default App
