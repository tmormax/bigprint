import './App.css'
import Navbar from './Navbar/Navbar'
import HeroSection from './Hero Section/HeroSection'
import Wedo from './Wedo Section/Wedo'
import Projects from './Projects Section/Projects'
import Contactus from './Contactus Section/Contactus'
import Testing from './Testing/Testing'
function App() {

  return (
    <>        
    <Navbar />
    <HeroSection />    
    <Wedo />
    {/* About Us section is Testing */}
    <Testing /> 
    <Projects />
    <Contactus />
    </>
  )
}

export default App
