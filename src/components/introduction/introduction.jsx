import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';
import Typography from '@material-ui/core/Typography';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
              <Typography component="p" align={'left'}>
                  I am a Computer Science fresh grads, with professional software development experience gained from
                  actual working on projects while the training, and side-projects. My experience is split
                  across Fullstack web development, image processing, and products designing.
              </Typography>
              <br/>
              <Typography component="p" align={'left'}>
                  I am obsessed with delivering extremely high quality products, and striving for feedback and learning
                  from mistakes. Which makes a constant improver, looking for the maximum utilization of resource to
                  attain the requirements.
              </Typography>
          </div>
        );
    }
}

export default IntroductionComponent;
