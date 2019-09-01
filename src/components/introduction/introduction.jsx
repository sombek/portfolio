import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';
import Typography from '@material-ui/core/Typography';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
              <Avatar src="avatar.jpg" size={150} style={{marginBottom: 20}}/>

              <Typography component="p" align={'justify'}>
                  I am a Developer freshly graduated, with professional software development experience.
                  The experience gained from actual work on projects at my full-time developer job, training, and
                  side-projects.
              </Typography>
              <br/>
              <Typography component="p" align={'justify'}>
                  My experience can be split across full-stack web development, image processing, and products designing.
                  And willing to explore more!
              </Typography>

              <br/>
              <Typography component="p" align={'justify'}>
                  I am obsessed with delivering extremely high quality products, and striving for feedback and learning
                  from mistakes.
                  Which makes a constant improver, looking for the maximum utilization of resource to attain the
                  requirements.
              </Typography>
          </div>
        );
    }
}

export default IntroductionComponent;
