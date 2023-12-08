import "../App.css"
import data from "../assets/data"

export default function ProjectsHome() {
  const truncData = data.slice(0, 3)

  return (
    <div className="home-grid">
      {truncData.map((item, key) => (
        <div key={key}>
          <div>
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
