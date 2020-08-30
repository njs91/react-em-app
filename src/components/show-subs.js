import React from "react";

export default class showSubs extends React.Component {
    state = {
        loading: true,
        subs: null
    };

    async componentDidMount() {
        const url = 'https://em-app-basic.herokuapp.com/emails-api';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            subs: data.subs,
            loading: false
        })
    }

  render() {
    return (
        <div>
            {this.state.loading || !this.state.subs ? <div>loading...</div> :
            <div>
                {this.state.subs.map((sub) => sub.name)}
            </div>}
        </div>
    )
  }
}
