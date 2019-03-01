import React, {Component} from 'react';
import './progress.css';
import ScrollProgress from 'scrollprogress';


class ProgressComponent extends Component {

    state = {
        completed: 0,
    };

    async componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll = () => new ScrollProgress((x, y) => this.setState({completed: y * 100 + '%'}));



    render() {
        let progress = this.state.completed;
        return (
            <div className="progress">
                <div
                    className="progress-bar"
                    style={{"width": progress}}>
                </div>
            </div>
        );
    }
}

export default ProgressComponent;
