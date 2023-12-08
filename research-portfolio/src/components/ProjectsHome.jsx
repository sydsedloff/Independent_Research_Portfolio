import "../App.css"
import data from "../assets/data"

export default function ProjectsHome() {
  return (
    <div className="home-grid">
      {data
        .filter((item, key) => (key < 3 ? (item, key) : []))
        .map((item, key) => (
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
