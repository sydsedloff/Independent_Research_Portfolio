import "../App.css"
import data from "../assets/data"

export default function ProjectsHome() {
  return (
    <div className="home-grid">
      {data.map((item) => (
        <div key={item.id}>
          <div style={{ display: "inline-block" }}>
            <img
              src={item.images[0].image1}
              alt="Mariah Profile"
              className="project-pictures"></img>
          </div>

          <div
            style={{
              display: "inline-block",
              verticalAlign: "top",
            }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
