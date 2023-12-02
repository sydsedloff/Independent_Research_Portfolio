import "../App.css";

function HomePage() {
  return (
    <div className="App">
      <img
        src="https://placehold.co/150x150"
        alt="Mariah Profile"
        className="profile-picture"
      ></img>
      <div>
        <h1>Hi, I'm Mariah. I'm an animation designer.</h1>
      </div>
      <div style={{ display: "flex" }}>
        <img
          src="https://placehold.co/300x200"
          alt="Mariah Profile"
          className="profile-picture"
        ></img>
        <div style={{ textAlign: "left" }}>
          <h2>Project Name</h2>
          <p style={{ textAlign: "left", padding: "0px", maxWidth: "40rem" }}>
            Put more stuff here, like a summary of who you are, what kind of
            work you do, a bit about your background, and maybe give a little of
            your personality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
