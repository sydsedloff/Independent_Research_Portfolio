import ProjectsProject from "../components/ProjectsProject"

function ProjectPage() {
  return (
    <>
      <h1>Projects</h1>
      {/* BUTTONS NEED CONDITIONAL STYLING */}
      <div className="filter-container">
        <p className="filter-buttons">all</p>
        <p className="filter-buttons">motion design</p>
        <p className="filter-buttons">animation</p>
        <p className="filter-buttons">3d modeling</p>
      </div>
      <ProjectsProject></ProjectsProject>
    </>
  )
}

export default ProjectPage
