import "../App.css"
import "../components/ProjectsHome"
import { Link } from "react-router-dom"
import ProjectsHome from "../components/ProjectsHome"
import profileImg from "../assets/images/MariahProfile.jpg"

function HomePage() {
  return (
    <>
      <div className="Home-Heading">
        <div className="profile-picture-circle">
          <img src={profileImg} alt="Mariah Profile"></img>
        </div>
        <div className="Page-Heading">
          <h1>Hi, I'm Mariah. I'm an animation designer.</h1>
          <Link to="/About">Learn more about me </Link>
        </div>
      </div>
      <ProjectsHome />
    </>
  )
}

export default HomePage
