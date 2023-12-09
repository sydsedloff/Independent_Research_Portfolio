import "../App.css"
import data from "../assets/data"

export default function ProjectsProject(props) {
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
  }

  const filteredData =
    props.filter === "all"
      ? data
      : data.filter((item) => item.tag === props.filter)

  return (
    <>
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
              <div className="project-details">
                <div className="project-title">
                  <h3>{item.title}</h3>
                </div>
                <div className="project-description">
                  <h4>Description</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
