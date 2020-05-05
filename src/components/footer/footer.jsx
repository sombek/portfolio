import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';

const scrollTo = require('scroll-to');

class FooterComponent extends Component {

    onScrollToTop() {
        scrollTo(0, 0);
    }

    render() {
        return (
            <div className="footer">
                <FlatButton labelStyle={{
                    "color": "rgba(0, 0, 0, 0.65)"
                }} label="Back to top" onClick={this.onScrollToTop}/>
            </div>
        );
    }
}

export default FooterComponent;
