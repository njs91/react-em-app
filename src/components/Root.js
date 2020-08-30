import React from "react";
import NavMenu from "./nav-menu";
import BodyCode from "./body-code";

export default class Root extends React.Component {
    render() {
        return (
            <div id="container">
                <div id="header">
                    <NavMenu navLinks={this.props.navLinks} />
                </div>
                <div id="body">
                    <BodyCode />
                </div>
            </div>
        )
    }
}