import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';

const scrollTo = require('scroll-to');

class IntroductionComponent extends Component {
    onScrollToIntro() {
        scrollTo(0, 7500, {duration: 2500});
    }

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
                    When the tests fail and the linting breaks, I will remain <span role="img"
                                                                                    aria-label="emoji">🦸🏻‍♂</span>️
                </p>
                <p>
                    My experience can be split across full-stack web development, image processing, and products
                    designing.
                    And willing to explore more!
                </p>

                <div className="content" onClick={this.onScrollToIntro.bind(this)}>
                    <div className="content__container">
                        <p className="content__container__text">
                            <span role="img" aria-label="emoji">⬇️</span>️
                            Click To
                        </p>
                        <ul className="content__container__list">
                            <li className="content__container__list__item">
                                Work <span role="img" aria-label="emoji">💼</span>️
                            </li>
                            <li className="content__container__list__item">
                                Chat <span role="img" aria-label="emoji">💬</span>️
                            </li>
                            <li className="content__container__list__item">
                                Code <span role="img" aria-label="emoji">👨🏻‍💻</span>️
                            </li>
                            <li className="content__container__list__item">
                                Design <span role="img" aria-label="emoji">🎨</span>️
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default IntroductionComponent;
