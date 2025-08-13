
import './App.css'
import "./index.css"
import Nav from './components/Nav'
import ProjectSection from './components/ProjectSection'
import ProjectCard from './components/ProjectCard'
import projects from './projects' 

type Project = {
  title: string;
  technologies: string[];
  description: string;
  images: string[];
  github: string;
  link: string;
};

function App() {

  return (
    <>
      <Nav  />
      {/* <section id="projectsSection">   
        <h2 className="projectsTitle">PROJECTS</h2>
        <p className="projectsDescription">Here are some of my projects. Click on the buttons to see more details or visit the live demos.</p>
        <div className="projectsContainer">
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      </section> */}
      <ProjectSection />
    
    </>
  )
}

export default App
