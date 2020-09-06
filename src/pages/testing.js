import React from 'react'

export class ChangeClassTest extends React.Component {
    state = {
        loading: true
    };

    render() {
        return (
            <div className="change-class-test">
                <div class="projects-grid-item">
                    <img src="http://www.tsaservices.co.uk/images/projects/building-services-design/small/arytza-production.jpg" />
                    <span class="grid-caption">Arytza, Dunstable</span>
                    <div class="projects-grid-overview">
                        <span class="project-title">Arytza, Dunstable</span>
                        <span class="project-description">Food processing production plant making buns for McDonalds. Design &amp; construction drawings of all Building Services installation.</span>
                    </div>
                </div>
            </div>
        )
    }
}
