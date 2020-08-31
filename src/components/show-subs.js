import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
                <div class="row">
                    <div class="user-col">Name</div>
                    <div class="user-col">Email</div>
                    <div class="user-col">Tag</div>
                    <div class="user-col">Subscription Date</div>
                    <div class="user-col view"></div>
                </div>
                {this.state.subs.map((sub, i) => 
                    <div className="row" key={i}>
                        <div className="user-col name">{sub.name}</div>
                        <div className="user-col email">{sub.email}</div>
                        <div className="user-col tag">{sub.tag}</div>
                        <div className="user-col date">{sub.subDate}</div>
                        <div className="user-col view">
                            <Link to={`/sub/${sub._id}`} className="view-sub">View</Link>
                        </div>
                    </div>
                )}
            </div>}
        </div>
    )
  }
}