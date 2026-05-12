
import './App.css'
import DynamicHeader from './components/section-components/DynamicHeader'

import HeroSection from './components/sections/HeroSection'

function App() {

  return (
    <>
      <HeroSection />
      <DynamicHeader header="<About />" />
    </>
  )
}

export default App
