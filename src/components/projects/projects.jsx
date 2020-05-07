import React, {Component} from 'react';
import './projects.css';
import MakeAwesomeComponent from "../make-awesome/make-awesome";


// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import Chip from '@material-ui/core/Chip';
// import Divider from '@material-ui/core/Divider';
// import Paper from '@material-ui/core/Paper';

class CardHeader extends React.Component {
    render() {
        const {image} = this.props;
        return (
            <header style={{
                backgroundImage: 'url(' + image + ')',
                height: this.props.height
            }} id={image} className="card-header"/>
        )
    }
}

class CardBody extends React.Component {
    render() {
        return (
            <div className="card-body">
                <h2 className="title">{this.props.title}</h2>
                <p className="date">{this.props.position}</p>

                <p className="body-content">{this.props.text}</p>

                {/*<button className="button button-primary">*/}
                {/*    <FontAwesomeIcon icon={faChevronRight}/> Find out more*/}
                {/*</button>*/}
            </div>
        )
    }
}


class ProjectsComponent extends Component {


    render() {
        return (
            <div>
                <MakeAwesomeComponent/>

                <p className="headline text-center">Look at my projects!</p>

                <div className="rows">
                    <div className={'cards-row'}>

                        <div className="card">
                            <CardHeader image={'REOnline.png'}/>
                            <CardBody title={'REOnline'}
                                      position={'UI/UX Intern'}
                                      text={'I worked on this project while my COOP training at Saudi Aramco Dhahran,\n' +
                                      '                                    It includes several tasks and assignments such as developing Angular components\n' +
                                      '                                    using...'}/>
                        </div>

                        <div className="card">
                            <CardHeader image={'ept.png'}/>
                            <CardBody title={'E-Property Transfer'}
                                      position={'Full-stack developer'}
                                      text={'My first public project with MOJ. This project helps the users to transfer the deeds with 0 human interaction.' +
                                      ' And it impacted the users by make their life easier by saving time and automate manual processes 📝'}/>
                        </div>

                        <div className="card">
                            <CardHeader image={'TSB.png'}/>
                            <CardBody title={'TheSearchBase'}
                                      position={'Software Engineer & Co-Founder'}
                                      text={'TheSearchBase is project started in Summer 2018, its aim to provide intelligent chat bots services to businesses.'}/>
                        </div>


                    </div>
                    <div className={'cards-row'}>

                        <div className="card">
                            <CardHeader image={'DODA.png'}/>
                            <CardBody title={'DODA Tracking'}
                                      position={'Hackathon Project'}
                                      text={'DODA or Worm Tracking project is the winner project at Upstream Saudi Aramco Hackathon which I participate in while my COOP training at Saudi Aramco Dhahran 2018. Which is implemented by using Image processing technologies using Python🐍 language'}/>
                        </div>

                        <div className="card">
                            <CardHeader image={'REPark.png'}/>
                            <CardBody title={'REPark Application'}
                                      position={'Hackathon Project'}
                                      text={' REPark is a winning product in Wa\'ed Hackathon in parking solution challenge.\n' +
                                      '                                    Where it gives the hosts to show their parking lots and rent it to the parking lot\n' +
                                      '                                    finders.'}/>
                        </div>

                    </div>
                </div>

                {/*<Paper elevation={5}>*/}
                {/*    <Typography variant="h5" component="h3">*/}
                {/*        TheSearchBase Project*/}
                {/*    </Typography>*/}
                {/*    <Typography component="p">*/}
                {/*        It is software as services projects providing intelligent services for*/}
                {/*        businesses,*/}
                {/*        where it gives the ability to build a chat bots and scenarios to be shown to the*/}
                {/*        business websites.*/}
                {/*        Currently, the main focus market is the recruitment companies with the ability*/}
                {/*        to extend the focus in future.*/}
                {/*    </Typography>*/}
                {/*    <Typography component="p">*/}
                {/*        The team and I worked heavily on the product where I acted as the frontend*/}
                {/*        developer using*/}
                {/*        <Chip label="React Framework"*/}
                {/*              style={{*/}
                {/*                  backgroundColor: '#7b1fa2',*/}
                {/*                  color: 'white'*/}
                {/*              }}/>*/}
                {/*        also worked as <Chip label="Python Flask"*/}

                {/*                             style={{*/}
                {/*                                 backgroundColor: '#7b1fa2',*/}
                {/*                                 color: 'white'*/}
                {/*                             }}/> developer to do some of the backend services features.*/}
                {/*    </Typography>*/}
                {/*    <Typography component="p">*/}
                {/*        Also the product included several prototypes and flowcharts designing to deliver*/}
                {/*        the best user experience.*/}
                {/*    </Typography>*/}

                {/*    <br/>*/}

                {/*    <Typography component="p">*/}
                {/*        You can visit the link and register to have demo here: <br/>*/}
                {/*        <a href="https://TheSearchBase.com"*/}
                {/*           rel="noopener noreferrer"*/}
                {/*           target={'_blank'}>https://TheSearchBase.com</a>*/}
                {/*    </Typography>*/}

                {/*    <br/><Divider variant="middle"/><br/>*/}

                {/*    <Grid container direction="row" justify="center" spacing={16}>*/}
                {/*        <Grid item md={6}>*/}
                {/*            <img src={'./TSB-Flowchart.png'} alt="TSB-Flowchart" width={'100%'}/>*/}
                {/*            <Typography component="p" align={'center'}>*/}
                {/*                Flowcharts sketch*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid item md={6}>*/}
                {/*            <img src={'./TSB-GIF.gif'} alt="TSB-GIF" width={'100%'}/>*/}
                {/*            <Typography component="p" align={'center'}>*/}
                {/*                Demo over the dashboard page*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}

                {/*    <br/><Divider variant="middle"/><br/>*/}

                {/*    <Grid container direction="row" justify="center">*/}
                {/*        <Grid item>*/}
                {/*            <Button variant="contained"*/}
                {/*                    onClick={() => this.handleExpandChange(2)}*/}
                {/*                    style={{backgroundColor: '#7b1fa2', color: 'white'}}>*/}
                {/*                Back*/}
                {/*            </Button>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}

                {/*    <br/><br/>*/}
                {/*</Paper>*/}
                {/*<Paper elevation={5}>*/}
                {/*    <Typography variant="h5" component="h3">*/}
                {/*        REOnline Project*/}
                {/*    </Typography>*/}
                {/*    <Typography component="p">*/}
                {/*        Is a project worked heavily on it while my training in Saudi Aramco,*/}
                {/*        starting from the usability tests to User Interfaces designing to components*/}
                {/*        development.*/}
                {/*    </Typography>*/}

                {/*    <Typography component="p">*/}
                {/*        The frontend development technology used here is<Chip label="Angular 5"*/}

                {/*                                                              color={'secondary'}/>*/}
                {/*        with combination of<Chip label="Adobe Illustrator"*/}
                {/*                                 color={"secondary"}/>*/}
                {/*        and <Chip label="Adobe Photoshop"*/}
                {/*                  color={"secondary"}/>*/}
                {/*        to deliver best user interface proposals.*/}
                {/*    </Typography>*/}

                {/*    <br/><Divider variant="middle"/><br/>*/}

                {/*    <Grid container direction="row" justify="center" spacing={16}>*/}
                {/*        <Grid item md={6}>*/}
                {/*            <img src={'./REO-Sketch.jpg'} alt="REO-Sketch" width={'100%'}/>*/}
                {/*            <Typography component="p" align={'center'}>*/}
                {/*                Starting the sketches*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid item md={6}>*/}
                {/*            <img src={'./REO-Interface.png'} alt="REO-Interface" width={'100%'}/>*/}
                {/*            <Typography component="p" align={'center'}>*/}
                {/*                Implementing the sketches*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}

                {/*    <br/><Divider variant="middle"/><br/>*/}


                {/*    <Grid container direction="row" justify="center">*/}
                {/*        <Grid item>*/}
                {/*            <Button variant="contained" color="secondary"*/}
                {/*                    onClick={() => this.handleExpandChange(1)}>*/}
                {/*                Back*/}
                {/*            </Button>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*    <br/><br/>*/}
                {/*</Paper>*/}
                {/*<Paper elevation={5}>*/}
                {/*    <Typography variant="h5" component="h3">*/}
                {/*        DODA Tracking Project*/}
                {/*    </Typography>*/}
                {/*    <Typography component="p">*/}
                {/*        It provides solution for geologies engineers to interpret the seismic data*/}
                {/*        intelligently using modern image analysis technologies.*/}
                {/*    </Typography>*/}

                {/*    <Typography component="p">*/}
                {/*        By selecting the starting point and ending point, the algorithm checks each*/}
                {/*        and every pixel in order to choose the optimal next pixel until it reach the*/}
                {/*        selected goal.*/}
                {/*    </Typography>*/}

                {/*    <Typography component="p">*/}
                {/*        The technologies used here is<Chip label="Python"*/}

                {/*                                           style={{*/}
                {/*                                               backgroundColor: '#79BD8F',*/}
                {/*                                               color: 'white'*/}
                {/*                                           }}/>*/}
                {/*        with<Chip label="OpenCV"*/}

                {/*                  style={{backgroundColor: '#79BD8F', color: 'white'}}/>*/}
                {/*        library to check every pixel in the provided image.*/}
                {/*    </Typography>*/}

                {/*    <br/><Divider variant="middle"/><br/>*/}

                {/*    <Grid container direction="row" justify="center" spacing={16}>*/}
                {/*        <Grid item md={6}>*/}
                {/*            <img src={'./DODA-Challenge.png'} alt="DODA-Challenge" width={'100%'}/>*/}
                {/*            <Typography component="p" align={'center'}>*/}
                {/*                The challenge showing the points to be matched*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid item md={6}>*/}
                {/*            <img src={'./DODA-Solution.gif'} alt="DODA-Solution" width={'100%'}/>*/}
                {/*            <Typography component="p" align={'center'}>*/}
                {/*                Image shows the pixel level analysis*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}

                {/*    <br/><Divider variant="middle"/><br/>*/}


                {/*    <Grid container direction="row" justify="center">*/}
                {/*        <Grid item>*/}
                {/*            <Button variant="contained"*/}
                {/*                    style={{backgroundColor: '#79BD8F', color: 'white'}}*/}
                {/*                    onClick={() => this.handleExpandChange(3)}>*/}
                {/*                Back*/}
                {/*            </Button>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*    <br/><br/>*/}
                {/*</Paper>*/}
                {/*<Paper elevation={5}>*/}
                {/*    <Typography variant="h5" component="h3">*/}
                {/*        REPark Project*/}
                {/*    </Typography>*/}
                {/*    <Typography component="p">*/}
                {/*        Wa’ed Flagship Hackathon is the first hackathon has been conducted in Eastern*/}
                {/*        Province. We competed over 150*/}
                {/*        team members over developers, entrepreneurs, and young Saudi innovators.*/}
                {/*        I Led the team during the hackathon in the parking solutions challenge.*/}
                {/*    </Typography>*/}

                {/*    <Typography component="p">*/}
                {/*        The application object is to tackle the challenges raised from the increasing*/}
                {/*        demand in parking spaces due to lifting the ban on women driving.*/}
                {/*        It will enable individuals (parking owners) to lease extra*/}
                {/*        parking lots for the public which will offer additional revenue, and save time*/}
                {/*        for drivers.*/}
                {/*    </Typography>*/}

                {/*    <br/>*/}

                {/*    <Typography component="p">*/}
                {/*        The technologies used here for prototyping is <Chip label="Adobe XD"*/}

                {/*                                                            style={{*/}
                {/*                                                                backgroundColor: '#49558f',*/}
                {/*                                                                color: 'white'*/}
                {/*                                                            }}/>*/}
                {/*        with combination of <Chip label="Adobe Photoshop"*/}

                {/*                                  style={{backgroundColor: '#49558f', color: 'white'}}/>*/}
                {/*        To design the logo and some of the templates. <br/>*/}
                {/*        Also we developed a business models and market estimation as part of*/}
                {/*        judging criteria in the hackathon.*/}
                {/*    </Typography>*/}

                {/*    <br/><Divider variant="middle"/><br/>*/}

                {/*    <Grid container direction="row" justify="center" spacing={16}>*/}
                {/*        <Grid item md={4}>*/}
                {/*            <img src={'./REPark-Logo.png'} alt="REPark-Logo" width={'100%'}/>*/}
                {/*            <Typography component="p" align={'center'}>*/}
                {/*                Splash Page*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid item md={4}>*/}
                {/*            <img src={'./REPark-Host.png'} alt="REPark-Host" width={'100%'}/>*/}
                {/*            <Typography component="p" align={'center'}>*/}
                {/*                Host form interface*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid item md={4}>*/}
                {/*            <img src={'./REPark-Client.png'} alt="REPark-Client" width={'100%'}/>*/}
                {/*            <Typography component="p" align={'center'}>*/}
                {/*                Client interface*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}

                {/*    <br/><Divider variant="middle"/><br/>*/}


                {/*    <Grid container direction="row" justify="center">*/}
                {/*        <Grid item>*/}
                {/*            <Button variant="contained"*/}
                {/*                    style={{backgroundColor: '#49558f', color: 'white'}}*/}
                {/*                    onClick={() => this.handleExpandChange(4)}>*/}
                {/*                Back*/}
                {/*            </Button>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*    <br/><br/>*/}
                {/*</Paper>*/}


            </div>
        );
    }
}

export default ProjectsComponent;
