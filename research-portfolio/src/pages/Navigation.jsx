import { Outlet, Link } from "react-router-dom"

function NavBar() {
  return (
    <>
      <header>
        <Link to="/Home">Mariah Aviles</Link>
      </header>
      <div className="Container">
        <nav className="Nav">
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  )
}

export default NavBar
