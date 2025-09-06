
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
import Blog from './components/Blog'







function App() {

  return (
    
    <>

      <Router>
          <Nav  />
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
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Router>
     
      <Footer />
    </>

    
  )
}


export default App
