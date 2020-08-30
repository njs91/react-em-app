import React, {Component} from "react";
import NavMenu from "./components/nav-menu";
import navLinks from "/components/nav-links";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navLinks: navLinks
    }
  }

  render() {
    return (
      <div id="container">
        <NavMenu navLinks={this.state.navLinks} />
      </div>
    );
  } 
}
