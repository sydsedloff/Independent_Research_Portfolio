import "../App.css"
import "../components/ProjectsHome"
import ProjectsHome from "../components/ProjectsHome"

function HomePage() {
  return (
    <div className="App">
      <main>
        <div>
          <img
            src="https://placehold.co/150x150"
            alt="Mariah Profile"
            className="profile-picture-circle"></img>
        </div>
        <div>
          <h1>Hi, I'm Mariah. I'm an animation designer.</h1>
          <a href="/about">Learn more about me </a>
        </div>
        <ProjectsHome />
      </main>
    </div>
  )
}

export default HomePage
