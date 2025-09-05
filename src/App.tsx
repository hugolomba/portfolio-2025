
import './App.css'
import "./index.css"
import Nav from './components/Nav'
import ProjectSection from './components/ProjectSection'
import HeroSection from "./components/HeroSection"  
import AboutMeSection from './components/AboutMeSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from './components/ProjectDetail'







function App() {

  return (
    
    <>
      <Nav  />
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection  />
              <AboutMeSection  />
              <ProjectSection  />
              <ContactSection  />
            </>
          } />
          <Route path='/project/:id' element={<ProjectDetail />} />
        </Routes>
      </Router>
     
      <Footer />
    </>

    
  )
}


export default App
