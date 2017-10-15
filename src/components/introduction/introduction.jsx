import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves Javascript, geek and health.<br></br>
              Professional Stake-Eater.<br></br>
              Software Developer, Coding from Yanbu, Saudi Arabia.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
