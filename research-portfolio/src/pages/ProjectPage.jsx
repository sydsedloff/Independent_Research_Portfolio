import ProjectsProject from "../components/ProjectsProject"
import { useState } from "react"

function ProjectPage() {
  const [filterTag, setFilterTag] = useState("all")

  const switchFilter = () => {
    // setFilterTag(this.textContent)
    // console.log(this.textContent)
  }

  return (
    <>
      <h1>Projects</h1>
      <div className="filter-container">
        {console.log(filterTag)}
        <button className="filter-buttons">all</button>
        <button className="filter-buttons" onClick={switchFilter}>
          motion design
        </button>
        <button className="filter-buttons">animation</button>
        <button className="filter-buttons">3d modeling</button>
      </div>
      <ProjectsProject></ProjectsProject>
    </>
  )
}

export default ProjectPage
