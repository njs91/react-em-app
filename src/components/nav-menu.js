import React from "react";
import {Link} from "react-router-dom";
import {navLinks} from "../util/nav-links";

export const NavMenu = () => {
  const lis = navLinks.map(link => (
        <li>
          <Link to={link.href} key={link.href}>{link.name}</Link>
        </li>
        )
      )

  return (
    <div id="navbar">
        <ul>
          {lis}
        </ul>
      </div>
  )
}