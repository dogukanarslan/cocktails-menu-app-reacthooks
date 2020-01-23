import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
  return(
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/drinks" className="nav-link">Drinks</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
