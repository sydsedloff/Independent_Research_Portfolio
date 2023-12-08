import "../App.css"
import data from "../assets/data"
import ProjectModal from "./ProjectModal"

export default function ProjectsProject() {
  const openProject = (item) => {
    console.log(item.title)
  }

  return (
    <>
      <ProjectModal />
      <div className="project-grid">
        {data.map((item, key) => (
          <div
            key={key}
            onClick={() => {
              openProject(item)
            }}>
            <div>
              <img
                src={item.images[0]}
                alt="Mariah Profile"
                className="project-pictures"></img>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
