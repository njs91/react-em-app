import React from "react";

export default class SingleSub extends React.Component {
  render() {
      return (
        <div className="sub-specs-inner">
            {Object.entries(this.props.sub).map(([key, value]) => 
                <div class="sub-spec">
                    <span class="sub-spec-detail">{key}: </span>
                    <span class="sub-spec-value">{value}</span>
                </div> 
            )}
        </div>
      )
  }
}
