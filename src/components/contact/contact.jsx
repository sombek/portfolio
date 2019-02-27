import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import CloudDownload from '@material-ui/icons/CloudDownload';
import MobileFriendly from '@material-ui/icons/MobileFriendly';

const styles = {
  card: {},
  margin: 10,
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class ContactComponent extends Component {

  render() {
    const {classes} = this.props;

    return (
      <div className="contact">
        <p className="headline">Contact</p>

        <Card className={classes.card}>
          <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              height="140"
              image="Abdullah.jpg"
              title="Abdullah Hashim"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              Abdullah Hashim
            </Typography>

            <FormControl fullWidth style={{marginBottom: '20px'}}>
              <InputLabel htmlFor="input-with-icon-adornment">Mobile Number</InputLabel>
              <Input
                  readOnly
                  defaultValue="+966-595585131"
                  variant="outlined"
                  startAdornment={
                    <InputAdornment position="start">
                      <MobileFriendly/>
                    </InputAdornment>
                  }
              />
            </FormControl>


            <FormControl fullWidth style={{marginBottom: '20px'}}>
              <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
              <Input
                  readOnly
                  defaultValue="abdullah97hashim@gmail.com"
                  variant="outlined"
                  startAdornment={
                    <InputAdornment position="start">
                      <Email/>
                    </InputAdornment>
                  }
              />
            </FormControl>
          </CardContent>

          <CardActions>
            <Button color="default" onClick={() => window.open('mailto:abdullah97hashim@gmail.com')}>
              <Email/> Send Email
            </Button>
            <Button color="primary" onClick={() => window.open('abdullah_hashim_cv.pdf')}>
              <CloudDownload/> Download CV
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ContactComponent);
