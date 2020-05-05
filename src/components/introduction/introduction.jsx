import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {

    render() {
        return (
            <div className="introduction">
                <div className='tetrominos'>
                    <div className='tetromino box1'/>
                    <div className='tetromino box2'/>
                    <div className='tetromino box3'/>
                    <div className='tetromino box4'/>
                </div>
                <Avatar src="avatar.jpg" size={150} style={{marginBottom: 20, marginTop: 80}}/>

                <p>
                    In the world of 1000 frameworks, I'm fighting for the cause of
                    clean and well structured code. No bug can stop me. No build-tool will dominate me.
                    When the tests fail and the linting breaks, I will remain <span role="img" aria-label="emoji"
                                                                                    style={{fontSize: 24}}>🦸🏻‍♂</span>️
                </p>

                <p>
                    My experience can be split across full-stack web development, image processing, and products
                    designing.
                    And willing to explore more!
                </p>
            </div>
        );
    }
}

export default IntroductionComponent;
