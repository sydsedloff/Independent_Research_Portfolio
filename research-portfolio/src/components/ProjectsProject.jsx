import "../App.css"
import { useState } from "react"
import data from "../assets/data"
import ProjectModal from "./ProjectModal"

export default function ProjectsProject(props) {
  /*
  const [isModalHidden, setIsModalHidden] = useState(true)
  */
  const importAll = (r) => {
    let images = {}
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item)
    })
    return images
  }
  const images = importAll(require.context("../assets/images", false))

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
            <div className="project">
              <img
                src={images[`${item.images[0]}`]}
                alt="Mariah Profile"
                className="project-pictures"></img>
              <div className="project-description">
                <div className="project-title">
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
