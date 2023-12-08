import { NavLink } from "react-router-dom"
import profileImg from "../assets/images/MariahProfile.jpg"

function AboutPage() {
  return (
    <div className="single-column">
      <div className="about-image">
        <img
          src={profileImg}
          alt="Mariah Profile"
          className="profile-picture-rectangle"></img>
      </div>

      <h1>Here's a little about me.</h1>
      <div className="article-body">
        <p>
          Hello! My name is Mariah Aviles, and I am a Junior Animation Designer
          specializing in 3D modeling and motion graphics. I am pursuing my
          B.F.A. in Emerging Media (Experimental Animation) and am expected to
          graduate in May 2024. Feel free to check out my links & DM me about
          any art-related opportunities! I desire to assist in narratives that
          open the conversation about mental health to all generations
        </p>
        <p>Skills:</p>
        <ul>
          <li>
            Experienced with Adobe Illustrator, Adobe Photoshop, Autodesk Maya,
            Adobe After Effects etc.
          </li>
          <li>
            Knowledgeable video editing software such as Adobe Premiere Pro &
            iMovie.
          </li>
          <li>
            Trained in Live Production skills such as operating Propresenter 7 &
            Camera Directing.
          </li>
        </ul>
        <p>Interests:</p>
        <ul>
          <li>2D/3D Character Creation</li>
          <li>Graphic Design</li>
          <li>Social Media Design</li>
        </ul>
      </div>
      <NavLink to="/Contact">
        <button className="button">Let's Work Together</button>
      </NavLink>
    </div>
  )
}

export default AboutPage
