import React from "react";

export default class BodyCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}; // boolean for event listener alternative
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      } // bind is saying make the ‘this’ keyword bind(this), where the 2nd ‘this’ is the ‘this’ of the constructor
    
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn // sets state to the opposite of whatever it is
        }));
      }
      
  render() {
    return (
      <div id="body">
          <p>some body text</p>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
      </div>
    )
  }
}
