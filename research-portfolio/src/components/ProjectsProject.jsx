import "../App.css";
import data from "../assets/data";

export default function ProjectsProject() {
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
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
