import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Fullscreen from '@material-ui/icons/Fullscreen';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import ReactGA from 'react-ga';


import IconButton from 'material-ui/IconButton';

import './projects.css';
import MakeAwesomeComponent from "../make-awesome/make-awesome";


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
        margin: '0 2px',
        height: 26
    }
});


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ProjectsComponent extends Component {

    state = {
        expanded1: false,
        expanded2: false,
        expanded3: false,
        expanded4: false
    };

    handleExpandChange = key => {
        switch (key) {
            case 1:
                ReactGA.event({
                    category: 'OpenCard',
                    action: 'Open REOnline'
                });
                break;
            case 2:
                ReactGA.event({
                    category: 'OpenCard',
                    action: 'Open TSB'
                });
                break;
            case 3:
                ReactGA.event({
                    category: 'OpenCard',
                    action: 'Open DODA Tracking'
                });
                break;
            case 4:
                ReactGA.event({
                    category: 'OpenCard',
                    action: 'Open REPark'
                });
                break;
            default:
        }

        this.setState({[`expanded${key}`]: !this.state[`expanded${key}`]})
    };


    render() {
        const {classes} = this.props;

        return (
            <div className="code-github">
                <MakeAwesomeComponent/>
                <p className="headline">Look at my projects!</p>
                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={16}>
                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                action={
                                    <IconButton onClick={() => this.handleExpandChange(1)}>
                                        <Fullscreen/>
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
                                    I worked on this project while my COOP training at Saudi Aramco Dhahran,
                                    It includes several tasks and assignments such as developing Angular components
                                    using different libraries. Designing UI/UX prototypes and discuss it with the team.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Dialog fullScreen open={this.state.expanded1} onClose={() => this.handleExpandChange(1)}
                            TransitionComponent={Transition}>
                        <AppBar position="static" color="secondary">
                            <Toolbar>
                                <IconButton color="inherit" onClick={() => this.handleExpandChange(1)}
                                            aria-label="Close">
                                    <CloseIcon/>
                                </IconButton>

                                <Typography variant="h6" color="inherit">
                                    REOnline
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <Grid container direction="row" justify="center">
                            <Grid item md={10}>
                                <Paper className={classes.root} elevation={5}>
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
                                            <img src={'./REO-Sketch.jpg'} alt="REO-Sketch" width={'100%'}/>
                                            <Typography component="p" align={'center'}>
                                                Starting the sketches
                                            </Typography>
                                        </Grid>
                                        <Grid item md={6}>
                                            <img src={'./REO-Interface.png'} alt="REO-Interface" width={'100%'}/>
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

                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                action={
                                    <IconButton onClick={() => this.handleExpandChange(2)}>
                                        <Fullscreen/>
                                    </IconButton>
                                }
                                title="TheSearchBase"
                                subheader="Software Developer"
                            />
                            <CardMedia
                                className={classes.media}
                                style={{
                                    backgroundSize: 'contain',
                                    padding: '59px'
                                }}
                                image={'TSB.png'}
                                title="TheSearchBase"
                            />
                            <CardContent>
                                <a href="https://TheSearchBase.com" rel="noopener noreferrer"
                                   target={'_blank'}>TheSearchBase.com</a>
                                <Typography component="p">
                                    TheSearchBase is project started in Summer 2018, its aim to provide
                                    intelligent chat bots services to businesses.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Dialog fullScreen open={this.state.expanded2} onClose={() => this.handleExpandChange(2)}
                            TransitionComponent={Transition}>
                        <AppBar position="static" style={{backgroundColor: '#7b1fa2'}}>
                            <Toolbar>
                                <IconButton color="default" onClick={() => this.handleExpandChange(2)}
                                            aria-label="Close">
                                    <CloseIcon/>
                                </IconButton>

                                <Typography variant="h6" color="inherit">
                                    TheSearchBase
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <Grid container direction="row" justify="center">
                            <Grid item md={10}>
                                <Paper className={classes.root} elevation={5}>
                                    <Typography variant="h5" component="h3">
                                        TheSearchBase Project
                                    </Typography>
                                    <Typography component="p">
                                        It is software as services projects providing intelligent services for
                                        businesses,
                                        where it gives the ability to build a chat bots and scenarios to be shown to the
                                        business websites.
                                        Currently, the main focus market is the recruitment companies with the ability
                                        to extend the focus in future.
                                    </Typography>
                                    <Typography component="p">
                                        The team and I worked heavily on the product where I acted as the frontend
                                        developer using
                                        <Chip label="React Framework" className={classes.chip}
                                              style={{
                                                  backgroundColor: '#7b1fa2',
                                                  color: 'white'
                                              }}/>
                                        also worked as <Chip label="Python Flask"
                                                             className={classes.chip}
                                                             style={{
                                                                 backgroundColor: '#7b1fa2',
                                                                 color: 'white'
                                                             }}/> developer to do some of the backend services features.
                                    </Typography>
                                    <Typography component="p">
                                        Also the product included several prototypes and flowcharts designing to deliver
                                        the best user experience.
                                    </Typography>

                                    <br/>

                                    <Typography component="p">
                                        You can visit the link and register to have demo here: <br/>
                                        <a href="https://TheSearchBase.com"
                                           rel="noopener noreferrer"
                                           target={'_blank'}>https://TheSearchBase.com</a>
                                    </Typography>

                                    <br/><Divider variant="middle"/><br/>

                                    <Grid container direction="row" justify="center" spacing={16}>
                                        <Grid item md={6}>
                                            <img src={'./TSB-Flowchart.png'} alt="TSB-Flowchart" width={'100%'}/>
                                            <Typography component="p" align={'center'}>
                                                Flowcharts sketch
                                            </Typography>
                                        </Grid>
                                        <Grid item md={6}>
                                            <img src={'./TSB-GIF.gif'} alt="TSB-GIF" width={'100%'}/>
                                            <Typography component="p" align={'center'}>
                                                Demo over the dashboard page
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <br/><Divider variant="middle"/><br/>

                                    <Grid container direction="row" justify="center">
                                        <Grid item>
                                            <Button variant="contained"
                                                    onClick={() => this.handleExpandChange(2)}
                                                    style={{backgroundColor: '#7b1fa2', color: 'white'}}
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

                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                action={
                                    <IconButton onClick={() => this.handleExpandChange(3)}>
                                        <Fullscreen/>
                                    </IconButton>
                                }
                                title="DODA Tracking"
                                subheader="Image processing project"
                            />
                            <CardMedia
                                className={classes.media}
                                style={{
                                    backgroundSize: 'contain',
                                    padding: '59px'
                                }}
                                image={'DODA.png'}
                                title="DODA Tracking"
                            />
                            <CardContent>
                                <Typography component="p">
                                    DODA or Worm Tracking project is the winner project at Upstream Saudi Aramco
                                    Hackathon which
                                    I participate in while my COOP training at Saudi Aramco Dhahran 2018.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Dialog fullScreen open={this.state.expanded3} onClose={() => this.handleExpandChange(3)}
                            TransitionComponent={Transition}>
                        <AppBar position="static" style={{backgroundColor: '#79BD8F'}}>
                            <Toolbar>
                                <IconButton color="inherit" onClick={() => this.handleExpandChange(3)}
                                            aria-label="Close">
                                    <CloseIcon/>
                                </IconButton>

                                <Typography variant="h6" color="inherit">
                                    DODA Tracking Project
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <Grid container direction="row" justify="center">
                            <Grid item md={10}>
                                <Paper className={classes.root} elevation={5}>
                                    <Typography variant="h5" component="h3">
                                        DODA Tracking Project
                                    </Typography>
                                    <Typography component="p">
                                        It provides solution for geologies engineers to interpret the seismic data
                                        intelligently using modern image analysis technologies.
                                    </Typography>

                                    <Typography component="p">
                                        By selecting the starting point and ending point, the algorithm checks each
                                        and every pixel in order to choose the optimal next pixel until it reach the
                                        selected goal.
                                    </Typography>

                                    <Typography component="p">
                                        The technologies used here is<Chip label="Python"
                                                                           className={classes.chip}
                                                                           style={{
                                                                               backgroundColor: '#79BD8F',
                                                                               color: 'white'
                                                                           }}/>
                                        with<Chip label="OpenCV"
                                                  className={classes.chip}
                                                  style={{backgroundColor: '#79BD8F', color: 'white'}}/>
                                        library to check every pixel in the provided image.
                                    </Typography>

                                    <br/><Divider variant="middle"/><br/>

                                    <Grid container direction="row" justify="center" spacing={16}>
                                        <Grid item md={6}>
                                            <img src={'./DODA-Challenge.png'} alt="DODA-Challenge" width={'100%'}/>
                                            <Typography component="p" align={'center'}>
                                                The challenge showing the points to be matched
                                            </Typography>
                                        </Grid>
                                        <Grid item md={6}>
                                            <img src={'./DODA-Solution.gif'} alt="DODA-Solution" width={'100%'}/>
                                            <Typography component="p" align={'center'}>
                                                Image shows the pixel level analysis
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <br/><Divider variant="middle"/><br/>


                                    <Grid container direction="row" justify="center">
                                        <Grid item>
                                            <Button variant="contained"
                                                    style={{backgroundColor: '#79BD8F', color: 'white'}}
                                                    onClick={() => this.handleExpandChange(3)}
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

                    <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                action={
                                    <IconButton onClick={() => this.handleExpandChange(4)}>
                                        <Fullscreen/>
                                    </IconButton>
                                }
                                title="REPark Application"
                                subheader="UI/UX Designer"
                            />
                            <CardMedia
                                className={classes.media}
                                style={{
                                    backgroundSize: 'contain',
                                    padding: '59px'
                                }}
                                image={'REPark.png'}
                                title="REPark"
                            />
                            <CardContent>
                                <Typography component="p">
                                    REPark is a winning product in Wa'ed Hackathon in parking solution challenge.
                                    Where it gives the hosts to show their parking lots and rent it to the parking lot
                                    finders.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Dialog fullScreen open={this.state.expanded4} onClose={() => this.handleExpandChange(4)}
                            TransitionComponent={Transition}>
                        <AppBar position="static" style={{backgroundColor: '#49558f'}}>
                            <Toolbar>
                                <IconButton color="inherit" onClick={() => this.handleExpandChange(4)}
                                            aria-label="Close">
                                    <CloseIcon/>
                                </IconButton>

                                <Typography variant="h6" color="inherit">
                                    REPark
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <Grid container direction="row" justify="center">
                            <Grid item md={10}>
                                <Paper className={classes.root} elevation={5}>
                                    <Typography variant="h5" component="h3">
                                        REPark Project
                                    </Typography>
                                    <Typography component="p">
                                        Wa’ed Flagship Hackathon is the first hackathon has been conducted in Eastern
                                        Province. We competed over 150
                                        team members over developers, entrepreneurs, and young Saudi innovators.
                                        I Led the team during the hackathon in the parking solutions challenge.
                                    </Typography>

                                    <Typography component="p">
                                        The application object is to tackle the challenges raised from the increasing
                                        demand in parking spaces due to lifting the ban on women driving.
                                        It will enable individuals (parking owners) to lease extra
                                        parking lots for the public which will offer additional revenue, and save time
                                        for drivers.
                                    </Typography>

                                    <br/>

                                    <Typography component="p">
                                        The technologies used here for prototyping is <Chip label="Adobe XD"
                                                                                            className={classes.chip}
                                                                                            style={{
                                                                                                backgroundColor: '#49558f',
                                                                                                color: 'white'
                                                                                            }}/>
                                        with combination of <Chip label="Adobe Photoshop"
                                                                  className={classes.chip}
                                                                  style={{backgroundColor: '#49558f', color: 'white'}}/>
                                        To design the logo and some of the templates. <br/>
                                        Also we developed a business models and market estimation as part of
                                        judging criteria in the hackathon.
                                    </Typography>

                                    <br/><Divider variant="middle"/><br/>

                                    <Grid container direction="row" justify="center" spacing={16}>
                                        <Grid item md={4}>
                                            <img src={'./REPark-Logo.png'} alt="REPark-Logo" width={'100%'}/>
                                            <Typography component="p" align={'center'}>
                                                Splash Page
                                            </Typography>
                                        </Grid>
                                        <Grid item md={4}>
                                            <img src={'./REPark-Host.png'} alt="REPark-Host" width={'100%'}/>
                                            <Typography component="p" align={'center'}>
                                                Host form interface
                                            </Typography>
                                        </Grid>
                                        <Grid item md={4}>
                                            <img src={'./REPark-Client.png'} alt="REPark-Client" width={'100%'}/>
                                            <Typography component="p" align={'center'}>
                                                Client interface
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <br/><Divider variant="middle"/><br/>


                                    <Grid container direction="row" justify="center">
                                        <Grid item>
                                            <Button variant="contained"
                                                    style={{backgroundColor: '#49558f', color: 'white'}}
                                                    onClick={() => this.handleExpandChange(4)}
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
                </Grid>

                <br/>

            </div>
        );
    }
}

export default withStyles(styles)(ProjectsComponent);
