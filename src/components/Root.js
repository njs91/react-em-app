import React from "react";
import NavMenu from "./nav-menu";
import Intro from "./intro";
import BodyCode from "./body-code";

export default function Root(props) {
        return (
            <div id="container">
                <div id="container-inner">
                    <NavMenu navLinks={props.navLinks} />
                    <Intro intro={props.intro} />
                     <BodyCode />
                </div>
            </div>
        )
}

{
    /*
    export default class Root extends React.Component {
    render() {
        return (
            <div id="container">
                <div id="container-inner">
                    <NavMenu navLinks={this.props.navLinks} />
                    <Intro intro={this.props.intro} />
                 <div id="body">
                     <BodyCode />
                  </div>
                </div>
            </div>
        )
    }
}
*/
}