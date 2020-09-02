import React, {Component} from "react";
import {navLinks} from "./util/nav-links";
import Root from "./components/Root";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {SubPage} from "./pages/sub";
import ShowSubs from "./components/show-subs";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navLinks: navLinks
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
        <Root navLinks={this.state.navLinks} intro='hello world' />

        <Switch>
          <Route exact path="/subs">
            <p>subs page</p>
            {/*this.updateURL('/subs') fails presumably because it causes the rerender infinitely - but how to solve?*/}
            <ShowSubs />
          </Route>
          <Route exact path="/">
            <p>homepage</p>
          </Route>
          <Route path={"/sub/:_id"} component={SubPage} />
        </Switch>
      </Router>
    );
  } 
}
