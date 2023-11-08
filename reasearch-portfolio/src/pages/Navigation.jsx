import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="Header">
        <h1>
          <img src="https://placehold.co/50" alt="logo"></img>
          Mariah Aviles
        </h1>
      </div>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
