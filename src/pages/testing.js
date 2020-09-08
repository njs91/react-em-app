import React from 'react'

export class ChangeClassTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            src: "http://www.tsaservices.co.uk/images/projects/building-services-design/small/arytza-production.jpg"
        };
        
        // This binding is necessary to make `this` work in the callback
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
      }

      onMouseEnterHandler(e) {
        this.setState({
            hover: true,
            src: e.target.getAttribute('src')
        });
        console.log('enter', e.target.getAttribute('src'));
        e.target.classList.add('hovered');
    }
    
    onMouseLeaveHandler(e) {
        this.setState({
            hover: false
        });
        console.log('leave');
        e.target.classList.remove('hovered');
    }

    clickTest() {
        console.log('click');
    }

    render() {
        return (
            <div className="change-class-test">
                <div class="projects-grid-item">
                    <img src={this.state.src} />
                    <span class="grid-caption">Arytza, Dunstable</span>
                    <div class="projects-grid-overview">
                        <span class="project-title">Arytza, Dunstable</span>
                        <span class="project-description">Food processing production plant making buns for McDonalds. Design &amp; construction drawings of all Building Services installation.</span>
                    </div>
                    <p onClick={this.clickTest}>test 1</p>
                    <p>test 2</p>
                    <p>test 3</p>
                    <img onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} style={{'max-width': '100px'}} src="http://tsaservices.co.uk/images/projects/record-information/jcoss.jpg" />
                    <img onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} style={{'max-width': '100px'}} src="http://tsaservices.co.uk/images/projects/authorising-engineers/AELTC-Plantroom-Roof.jpg" />
                </div>
            </div>
        )
    }
}
