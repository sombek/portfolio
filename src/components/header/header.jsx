import React, {Component} from 'react';

import SquareAnimationComponent from '../square-animation/square-animation';
const scrollTo = require('scroll-to');
import './header.css';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        return (
          <div className="header-wrapper" style={{"height": this.state.height}}>
            <SquareAnimationComponent></SquareAnimationComponent>
            <div className="header">
                <h3>Abdullah Hashim</h3>
                <h6>Software Developer</h6>
            </div>

          </div>
        );
    }
}

export default HeaderComponent;
