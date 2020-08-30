import React from "react";

export default class navBar extends React.Component {
  render() {
    return (
      <div id="navbar">
        <ul>
          {this.props.navLinks.map((link) => <li><a href={link.href} key = {link.href} > {link.name} </a></li>)}
        </ul>
      </div>
    )
  }
}
