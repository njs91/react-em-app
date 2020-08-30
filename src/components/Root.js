import React, {
    Component
} from "react";
import NavMenu from "./components/nav-menu";

export default class Root extends React.Component {
    render() {
        return (
            <div id="container">
                <div id="header">
                    <NavMenu />
                </div>
                <div id="body">

                </div>
            </div>
        )
    }
}