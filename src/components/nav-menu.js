import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <ul>
          {this.props.navLinks.map((link) => <li><Link to={link.href} key = {link.href} > {link.name} </Link></li>)}
        </ul>
      </div>
    )
  }
}
