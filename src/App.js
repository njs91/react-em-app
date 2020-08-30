import React, {Component} from "react";
import {navLinks} from "./components/nav-links";
import Root from "./components/Root";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {SubPage} from "./components/subPage";
import ShowSubs from "./components/show-subs";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navLinks: navLinks,
      intro: "hello world",
      url: "someurl"
    }
  }

  updateURL = (newUrl) => {
    this.setState({
      url: newUrl
    })
  }

  render() {
    return (
      <Router>
        <Root navLinks={this.state.navLinks} intro={this.state.intro}></Root>

        <Switch>
          <Route path="/subs">
            <p>subs page</p>
            {/*this.updateURL('/subs') fails presumably because it causes the rerender infinitely - but how to solve?*/}
            <ShowSubs />
          </Route>
          <Route path="/">
            <p>homepage</p>
          </Route>
          <Route path={"/sub/:_id"} component={SubPage} />
        </Switch>
      
        <p>the url: {this.state.url}</p>
      </Router>
    );
  } 
}
