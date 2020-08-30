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
    if (this.state.loading) {
        return <div>loading...</div>
    }

    if (!this.state.subs) {
        return <div>no data to load.</div>
    }

    return (
        <div id="users-grid-container">
            <h1 id="users-intro">Viewing Some Subscribers</h1>
            {<div id="users-grid">
                {this.state.subs.map((sub) => 
                    <div className="row">
                        <div className="user-col name">{sub.name}</div>
                        <div className="user-col email">{sub.email}</div>
                        <div className="user-col tag">{sub.tag}</div>
                        <div className="user-col date">{sub.subDate}</div>
                        <div className="user-col view">
                            <a href="#" className="view-sub">View</a>
                        </div>
                    </div>
                )}
            </div>}
        </div>
    )
  }
}
