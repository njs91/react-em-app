import React from 'react'

export class SubPage extends React.Component {
    render() {
        return (
            <div className="sub-details-individual">
                <h1 class="std-intro">Viewing a Single Subscriber</h1>
                <div className="sub-specs">
                    <div className="sub-specs-inner">
                        id: {this.props.params._id}
                    </div>
                </div>
            </div>
        )
    }
}
