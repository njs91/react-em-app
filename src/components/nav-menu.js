import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {navLinks} from "../util/nav-links";

export const NavMenu = () => {
  return (
    <div id="navbar">
        <ul>
          {navLinks.map(link => {
            return (
              <li>
                <Link to={link.href} key={link.href}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
  )
}