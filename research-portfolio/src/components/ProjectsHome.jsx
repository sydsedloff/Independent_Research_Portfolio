import "../App.css";
import data from "../assets/data";

export default function ProjectsHome() {
  return (
    <div className="project-grid">
      {data.map((item) => (
        <div key={item.id}>
          <div style={{ display: "inline-block" }}>
            <img
              src={item.images[0].image1}
              alt="Mariah Profile"
              className="project-pictures"
            ></img>
          </div>

          <div
            style={{
              textAlign: "left",
              display: "inline-block",
              verticalAlign: "top",
            }}
          >
            <h2>{item.title}</h2>
            <p style={{ textAlign: "left", padding: "0px", maxWidth: "40rem" }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
