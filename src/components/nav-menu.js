import React, {Component} from "react";
import {Link} from "react-router-dom";
import {navLinks} from "../util/nav-links";

export default class NavMenu extends React.Component {
  render() {
    var isActive = this.context.router.route.location.pathname === this.props.to;
    var className = isActive ? 'active' : '';

    const lis = navLinks.map(link => (
      <li>
        <Link className={className} to={link.href} key={link.href}>{link.name}</Link>
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