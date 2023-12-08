import "../App.css"
import { useState } from "react"
import data from "../assets/data"
import ProjectModal from "./ProjectModal"

export default function ProjectsProject(props) {
  /*
  const [isModalHidden, setIsModalHidden] = useState(true)
  */

  const openProject = (item) => {
    console.log(item.title)
    // setIsModalHidden(!isModalHidden)
  }

  const filteredData =
    props.filter === "all"
      ? data
      : data.filter((item) => item.tag === props.filter)

  return (
    <>
      {console.log(props.filter)}
      {/* {isModalHidden ? "" : <ProjectModal />} */}
      <div className="project-grid">
        {filteredData.map((item, key) => (
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
