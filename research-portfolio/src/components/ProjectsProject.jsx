import "../App.css"
import data from "../assets/data"

export default function ProjectsProject() {
  return (
    <div className="project-grid">
      {data.map((item, key) => (
        <div key={key}>
          <div>
            <img
              src={item.images[0].image1}
              alt="Mariah Profile"
              className="project-pictures"></img>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
