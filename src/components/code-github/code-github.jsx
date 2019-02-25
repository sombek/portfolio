import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';


import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';

import './code-github.css';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    chip: {
        margin: theme.spacing.unit,
    }
});


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class CodeGithubComponent extends Component {

    state = {
        expanded1: false,
        expanded2: false,
        expanded3: false,
        expanded4: false
    };

    handleExpandChange = (key) => this.setState({[`expanded${key}`]: !this.state[`expanded${key}`]});


    render() {
        const {classes} = this.props;

        return (
            <div className="code-github">
                <p className="headline">Look at my projects!</p>
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={16}>
                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton onClick={() => this.handleExpandChange(1)}>
                                        <ExpandMoreIcon/>
                                    </IconButton>
                                }
                                title="REOnline Project"
                                subheader="UI/UX Designer & Developer"
                            />
                            <CardMedia
                                className={classes.media}
                                style={{
                                    backgroundSize: 'contain',
                                    padding: '59px'
                                }}
                                image={'REOnline.png'}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/paella.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton aria-label="Add to favorites">
                                    <FavoriteIcon/>
                                </IconButton>
                                <IconButton aria-label="Share">
                                    <ShareIcon/>
                                </IconButton>
                                <IconButton
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                    })}
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                                        for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until
                                        lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                        chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                                        onion,
                                        salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                        minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                                        boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers,
                                        and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                        heat
                                        to medium-low, add reserved shrimp and mussels, tucking them down into the rice,
                                        and
                                        cook again without stirring, until mussels have opened and rice is just tender,
                                        5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/paella.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton aria-label="Add to favorites">
                                    <FavoriteIcon/>
                                </IconButton>
                                <IconButton aria-label="Share">
                                    <ShareIcon/>
                                </IconButton>
                                <IconButton
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                    })}
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                                        for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until
                                        lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                        chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                                        onion,
                                        salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                        minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                                        boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers,
                                        and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                        heat
                                        to medium-low, add reserved shrimp and mussels, tucking them down into the rice,
                                        and
                                        cook again without stirring, until mussels have opened and rice is just tender,
                                        5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>

                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="Recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton>
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/paella.jpg"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton aria-label="Add to favorites">
                                    <FavoriteIcon/>
                                </IconButton>
                                <IconButton aria-label="Share">
                                    <ShareIcon/>
                                </IconButton>
                                <IconButton
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                    })}
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                                        for 10
                                        minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until
                                        lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                        chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                                        onion,
                                        salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                        minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                                        boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers,
                                        and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce
                                        heat
                                        to medium-low, add reserved shrimp and mussels, tucking them down into the rice,
                                        and
                                        cook again without stirring, until mussels have opened and rice is just tender,
                                        5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                </Grid>
                <br/>


                <Dialog fullScreen
                        open={this.state.expanded1}
                        onClose={() => this.handleExpandChange(1)}
                        TransitionComponent={Transition}>

                    <AppBar position="static" color="secondary">
                        <Toolbar>
                            <IconButton color="inherit" onClick={() => this.handleExpandChange(1)} aria-label="Close">
                                <CloseIcon/>
                            </IconButton>

                            <Typography variant="h6" color="inherit">
                                REOnline
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Grid container direction="row" justify="center">
                        <Grid item md={10}>
                            <Paper className={classes.root} elevation={1}>
                                <Typography variant="h5" component="h3">
                                    REOnline Project
                                </Typography>
                                <Typography component="p">
                                    Is a project worked heavily on it while my training in Saudi Aramco,
                                    starting from the usability tests to User Interfaces designing to components
                                    development.
                                </Typography>

                                <Typography component="p">
                                    The frontend development technology used here is<Chip label="Angular 5"
                                                                                          className={classes.chip}
                                                                                          color={'secondary'}/>
                                    with combination of<Chip label="Adobe Illustrator"
                                                             className={classes.chip} color={"secondary"}/>
                                    and <Chip label="Adobe Photoshop"
                                              className={classes.chip} color={"secondary"}/>
                                    to deliver best user interface proposals.
                                </Typography>

                                <br/><Divider variant="middle"/><br/>

                                <Grid container direction="row" justify="center" spacing={16}>
                                    <Grid item md={6}>
                                        <img src={'REO-Sketch.jpg'} alt="REO-Sketch" width={'100%'}/>
                                        <Typography component="p" align={'center'}>
                                            Starting the sketches
                                        </Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <img src={'REO-Interface.png'} alt="REO-Interface" width={'100%'}/>
                                        <Typography component="p" align={'center'}>
                                            Implementing the sketches
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <br/><Divider variant="middle"/><br/>


                                <Grid container direction="row" justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="secondary"
                                                onClick={() => this.handleExpandChange(1)}
                                                className={classes.button}>
                                            Back
                                        </Button>
                                    </Grid>
                                </Grid>
                                <br/><br/>
                            </Paper>
                        </Grid>
                    </Grid>


                </Dialog>

            </div>
        );
    }
}

export default withStyles(styles)(CodeGithubComponent);
