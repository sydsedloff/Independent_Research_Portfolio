import { Outlet, NavLink, Link } from "react-router-dom"

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
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default NavBar
