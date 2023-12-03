import "../App.css";
import data from "../assets/data";

export default function ProjectsHome() {
  return (
    <div style={{ display: "flex" }}>
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={item.images[0].image1}
            alt="Mariah Profile"
            className="project-pictures"
          ></img>
          <div style={{ textAlign: "left" }}>
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
