import React from "react";

export default class SingleSub extends React.Component {
  render() {
      return (
        <div>
            {Object.entries(this.props.sub).map(([key, value]) => 
                `<div class="sub-spec">
                    <div class="sub-spec-detail">
                        ${key}
                    </div>
                    <div class="sub-spec-value">
                        ${value}
                    </div>
                </div> `
            )}
        </div>
      )
  }
}
