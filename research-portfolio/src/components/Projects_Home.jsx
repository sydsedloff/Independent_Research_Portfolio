import "../App.css";

export default function ProjectsHome() {
  return (
    <div style={{ display: "flex" }}>
      <img
        src="https://placehold.co/300x200"
        alt="Mariah Profile"
        className="project-pictures"
      ></img>
      <div style={{ textAlign: "left" }}>
        <h2>Project Name</h2>
        <p style={{ textAlign: "left", padding: "0px", maxWidth: "40rem" }}>
          Put more stuff here, like a summary of who you are, what kind of work
          you do, a bit about your background, and maybe give a little of your
          personality.
        </p>
      </div>
    </div>
  );
}
