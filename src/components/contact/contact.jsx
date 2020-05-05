import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Email from '@material-ui/icons/Email';
import CloudDownload from '@material-ui/icons/CloudDownload';
import AccountBox from '@material-ui/icons/AccountBox';
import MobileFriendly from '@material-ui/icons/MobileFriendly';
import Lottie from 'react-lottie';
import * as animationData from './pineapple.json'
import Avatar from "material-ui/Avatar";
import './contact.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Divider from '@material-ui/core/Divider';

class ContactComponent extends Component {

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className={'myContact'}>
                <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                    <Lottie options={defaultOptions} height={150} width={150} style={{marginRight: 0}}/>
                    <p className="headline">Contact Me</p>
                </div>

                <div className="contact">
                    <div style={{marginBottom: 20}}>
                        <Avatar src="abdullah.jpeg" size={150}
                                style={{objectFit: 'cover', margin: '0 auto', display: 'block'}}/>
                    </div>

                    <div style={{display: 'flex', marginBottom: 15}}>
                        <AccountBox/> <h2 style={{margin: '0 0 0 5px'}}>Abdullah Hashim</h2>
                    </div>

                    <div style={{display: 'flex', marginBottom: 10}}>
                        <MobileFriendly/> <h3 style={{margin: '0 0 0 5px'}}><a
                        href="tel:+966595585131">+966-595585131</a></h3>
                    </div>

                    <div style={{display: 'flex'}}>
                        <Email/>
                        <h3 style={{margin: '0 0 0 5px'}}>
                            <a href="mailto:Abdullah97Hashim@gmail.com" role="button">Abdullah97Hashim@gmail.com</a>
                        </h3>
                    </div>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                        <Button variant="outlined" color="secondary" style={{margin: '0 10px 0 0'}}
                                onClick={() => window.open('mailto:abdullah97hashim@gmail.com')}>
                            <Email style={{marginRight: 5}}/> Email me
                        </Button>

                        <Button variant="contained" color="secondary"
                                onClick={() => window.open('abdullah_hashim_cv.pdf')}>
                            <CloudDownload style={{marginRight: 5}}/> Download CV
                        </Button>
                    </div>

                    <Divider style={{margin: '28px 0'}}/>

                    <div style={{textCenter: 'center'}}>
                        <a href="https://www.linkedin.com/in/Abdullah-hashim"
                           target="_blank" rel="noopener noreferrer"
                           className="social-buttons"
                           aria-label="Linkedin">
                            <FontAwesomeIcon color={'#0077b5'} icon={faLinkedin}/>
                        </a>

                        <a href="https://twitter.com/sombekcs"
                           target="_blank" rel="noopener noreferrer"
                           className="social-buttons"
                           aria-label="Twitter">
                            <FontAwesomeIcon color={'#1DA1F2'} icon={faTwitter}/>
                        </a>

                        <a href="https://github.com/sombek"
                           target="_blank" rel="noopener noreferrer"
                           className="social-buttons"
                           aria-label="Github">
                            <FontAwesomeIcon color={'#24292e'} icon={faGithub}/>
                        </a>
                    </div>
                </div>


            </div>
        );
    }
}

export default ContactComponent;
