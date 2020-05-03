import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';


class DesignComponent extends Component {

    render() {
        return (
            <div className="design">
                <p className="headline">User Experience and Design</p>
                <p className="text-justify">
                    Since I was young I fell in love with Photoshop.
                    Ever since, I tried to make everything fancy.
                    Nowadays, with a user-centered mindset, I try to develop intuitive, mobile and content first
                    applications.
                </p>

                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<ActionFavorite/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        iconStyle={{"fill": "#A80202"}}
                        label="UX-Consulting"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<ActionFavorite/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        iconStyle={{"fill": "#A80202"}}
                        label="Adobe XD"
                    />
                </div>
                <div className="design-checkbox">
                    <Checkbox
                        checkedIcon={<ActionFavorite/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        iconStyle={{"fill": "#A80202"}}
                        label="Figma"
                    />
                </div>

            </div>
        );
    }
}

export default DesignComponent;
