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
                    I am a Developer freshly graduated, with professional software development experience.
                    The experience gained from actual work on projects at my full-time developer job, training, and
                    side-projects.
                </p>
                <p>
                    My experience can be split across full-stack web development, image processing, and products
                    designing.
                    And willing to explore more!
                </p>
                <p>
                    I am obsessed with delivering extremely high quality products, and striving for feedback and
                    learning
                    from mistakes.
                    Which makes a constant improver, looking for the maximum utilization of resource to attain the
                    requirements.
                </p>
            </div>
        );
    }
}

export default IntroductionComponent;
