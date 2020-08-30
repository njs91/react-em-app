import React, {Component} from "react";
import {navLinks} from "./components/nav-links";
import Root from "./components/Root";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navLinks: navLinks,
      intro: "hello world"
    }
  }

  render() {
    return (
        <Root navLinks={this.state.navLinks} intro={this.state.intro}></Root>
    );
  } 
}
