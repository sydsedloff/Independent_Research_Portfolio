import "../App.css";
import "../components/ProjectsHome";
import ProjectsHome from "../components/ProjectsHome";

function HomePage() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div>
          <img
            src="https://placehold.co/150x150"
            alt="Mariah Profile"
            className="profile-picture-circle"
          ></img>
        </div>
        <div style={{ textAlign: "left" }}>
          <h1 style={{ paddingLeft: "1rem" }}>
            Hi, I'm Mariah. I'm an animation designer.
          </h1>
          <a
            href="/about"
            style={{ paddingLeft: "1rem", textDecoration: "underline" }}
          >
            Learn more about me{" "}
          </a>
        </div>
      </div>

      <ProjectsHome />
    </div>
  );
}

export default HomePage;
