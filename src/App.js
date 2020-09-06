import React from "react";
import {navLinks} from "./util/nav-links";
import Root from "./components/Root";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {SubPage} from "./pages/sub";
import {ChangeClassTest} from "./pages/testing";
import ShowSubs from "./components/show-subs";

export default function App() {
    return (
      <Router>
        <Root navLinks={navLinks} intro='hello world' />
        <Switch>
          <Route exact path="/subs">
            <p>subs page</p>
            <ShowSubs />
          </Route>
          <Route exact path="/">
            <p>homepage</p>
          </Route>
          <Route exact path="/testing" component={ChangeClassTest} />
          <Route path={"/sub/:_id"} component={SubPage} />
        </Switch>
      </Router>
    );
}



{
  /*
  export default class App extends Component {
  constructor() {
    super();

    this.state = {
      navLinks: navLinks
    }
  }

  render() {
    return (
      <Router>
        <Root navLinks={this.state.navLinks} intro='hello world' />

        <Switch>
          <Route exact path="/subs">
            <p>subs page</p>
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
*/
}
