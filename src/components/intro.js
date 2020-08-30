import React from "react";

export default class intro extends React.Component {
  render() {
    return (
    <div class="intros">
        {this.props.intro}
    </div>
    )
  }
}
