import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav container">

          <Link to="/" className="nav__logo">Mouden</Link>

          {/* menu */}
          <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
            <ul className="nav__list">
              <li><Link to="/" className="nav__link">Home</Link></li>
              <li><Link to="/about" className="nav__link">About</Link></li>
              <li><Link to="/projects" className="nav__link">Projects</Link></li>
              <li><Link to="/resume" className="nav__link">Resume</Link></li>
              <li><Link to="/contact" className="nav__link">Contact</Link></li>
            </ul>

            {/* close button */}
            <div className="nav__close" onClick={() => setShowMenu(false)}>
              <i className="ri-close-large-line"></i>
            </div>
          </div>

          {/* toggle button */}
          <div className="nav__toggle" onClick={() => setShowMenu(true)}>
            <i className="ri-menu-line"></i>
          </div>

        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default NavBar;