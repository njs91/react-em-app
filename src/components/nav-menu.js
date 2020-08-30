import React from "react";

export default class navBar extends React.Component {
  render() {
    return (
      this.props.navLinks.map((link) => <a href={link.href} key = {link.href} > {link.name} </a>)
    )
  }
}
