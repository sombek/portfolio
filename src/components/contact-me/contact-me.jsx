import React, {Component} from 'react';
import './contact-me.css';

const scrollTo = require('scroll-to');


class ContactMeComponent extends Component {
    onScrollToIntro() {
        scrollTo(0, 7500, {duration: 2500});
    }

    render() {
        return (
            <div className="content" onClick={this.onScrollToIntro.bind(this)}>
                <div className="content__container">
                    <p className="content__container__text">
                        {/*eslint-disable-next-line*/}
                        👉🏼 Contact me to
                    </p>
                    <ul className="content__container__list">
                        {/*eslint-disable-next-line*/}
                        <li className="content__container__list__item">Work 💼️</li>
                        {/*eslint-disable-next-line*/}
                        <li className="content__container__list__item">Chat 💬️</li>
                        {/*eslint-disable-next-line*/}
                        <li className="content__container__list__item">Code 👨🏻‍💻️</li>
                        {/*eslint-disable-next-line*/}
                        <li className="content__container__list__item">Design 🎨️</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContactMeComponent;
