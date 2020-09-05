import React from "react";
import {Link} from "react-router-dom";

export default class ShowSubs extends React.Component {
    state = {
        loading: true,
        subs: null,
        subCount: null
    };

    async componentDidMount() {
        const url = 'https://em-app-basic.herokuapp.com/emails-api';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            subs: data.subs,
            loading: false,
            subCount: data.subs.length
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
    <div>
        {this.state.subCount ?
        <div class="inner-details">
            <div class="recent-details">
                Total Subs: <span class="sub-count">{this.state.subCount}</span>
            </div>
        </div>
        : null}
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
        </div>
    )
  }
}
