import React from "react";

export default class SingleSub extends React.Component {
  render() {
      return (
        <div>
            {this.props.sub.entries(a).map(([key, value]) => {
                key, value
            })}
        </div>
      )
  }
}
