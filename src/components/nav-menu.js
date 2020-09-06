import React from "react";
import {NavLink} from "react-router-dom";
import {navLinks} from "../util/nav-links";

export default class NavMenu extends React.Component {
  render() {
    const lis = navLinks.map(link => (
      <li key={link.href}>
        <NavLink exact activeClassName="active" to={link.href}>{link.name}</NavLink>
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
}

{
  /*
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
*/
}