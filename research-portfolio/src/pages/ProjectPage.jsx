import ProjectsProject from "../components/ProjectsProject"
import { useState } from "react"

function ProjectPage() {
  const [filterTag, setFilterTag] = useState("all")

  const switchFilter = (newFilter) => {
    setFilterTag(newFilter)
  }

  return (
    <>
      <h1>Projects</h1>
      <div className="filter-container">
        <button
          className={`filter-buttons ${
            filterTag === "all" ? "filter-buttons-selected" : ""
          }`}
          onClick={() => {
            switchFilter("all")
          }}>
          all
        </button>
        <button
          className={`filter-buttons ${
            filterTag === "motion design" ? "filter-buttons-selected" : ""
          }`}
          onClick={() => {
            switchFilter("motion design")
          }}>
          motion design
        </button>
        <button
          className={`filter-buttons ${
            filterTag === "animation" ? "filter-buttons-selected" : ""
          }`}
          onClick={() => {
            switchFilter("animation")
          }}>
          animation
        </button>
        <button
          className={`filter-buttons ${
            filterTag === "3d modeling" ? "filter-buttons-selected" : ""
          }`}
          onClick={() => {
            switchFilter("3d modeling")
          }}>
          3d modeling
        </button>
      </div>
      <ProjectsProject filter={filterTag} />
    </>
  )
}

export default ProjectPage
