import ProjectsProject from "../components/ProjectsProject"

function ProjectPage() {
  return (
    <main>
      <h1>Projects</h1>
      {/* BUTTONS NEED CONDITIONAL STYLING */}
      <div className="filter-container">
        <div className="filter-buttons">all</div>
        <div className="filter-buttons">motion graphic design</div>
        <div className="filter-buttons">2d animation</div>
        <div className="filter-buttons">3d modeling</div>
      </div>
      <ProjectsProject></ProjectsProject>
    </main>
  )
}

export default ProjectPage
