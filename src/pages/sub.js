import React from 'react'
import SingleSub from '../components/sub.js'

export class SubPage extends React.Component {
    state = {
        loading: true,
        sub: null
    };

    async componentDidMount() {
        const url = 'https://em-app-basic.herokuapp.com/emails-api';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            loading: false,
            sub: data.subs.find(sub => sub._id === this.props.match.params._id)
        })
    }

    render() {
        if (this.state.loading) {
            return <div>loading sub...</div>
        }
    
        if (!this.state.sub) {
            return <div>no sub to load.</div>
        }

        return (
            <div className="sub-details-individual">
                <h1 class="std-intro">Viewing a Single Subscriber</h1>
                <div className="sub-specs">
                    <SingleSub sub={this.state.sub} />
                </div>
            </div>
        )
    }
}
