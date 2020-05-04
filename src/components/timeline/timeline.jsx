import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {

    state = {
        expanded1: false,
        expanded2: false,
        expanded3: false,
        expanded4: false,
        expanded5: false
    };

    handleExpandChange = (key, expanded) => this.setState({[`expanded${key}`]: expanded});


    render() {
        return (
            <div className="timeline">
                <div id="container">
                    Make
                    <div id="flip">
                        <div>
                            <div>wOrK</div>
                        </div>
                        <div>
                            <div>lifeStyle</div>
                        </div>
                        <div>
                            <div>Everything</div>
                        </div>
                    </div>
                    AweSoMe!
                </div>

                <p className="headline">Work experience & Education</p>

                <div className="timeline-entry">
                    <Card expanded={this.state.expanded5}
                          onExpandChange={expanded => this.handleExpandChange(5, expanded)}>
                        <CardHeader title="Software Engineer" subtitle="Ministry Of Justice (2019 Jun - Now)"
                                    avatar={'https://cdn6.aptoide.com/imgs/8/f/6/8f66d8559e9623fbb45b3ca9c96e52c6_icon.png'}

                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true} style={{paddingTop: 0}}>
                            <h3>
                                Vision Realization Office - Real Estate Digitization
                            </h3>
                            <p>
                                Working on special projects, working from ideas to production ready products
                            </p>
                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Agile practices</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip style={{backgroundColor: '#9BC1AF'}}>Vue.js</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip style={{backgroundColor: '#CBA38F'}}>DevOps Practices</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip style={{backgroundColor: '#FBD748'}}>DotNet Core</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>


                <div className="timeline-entry">
                    <Card expanded={this.state.expanded4}
                          onExpandChange={expanded => this.handleExpandChange(4, expanded)}>
                        <CardHeader title="Co-Founder & Software Developer" subtitle="Search Base (2018 Nov - 2019 Dec)"
                                    avatar={'TSB-Logo.png'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true} style={{paddingTop: 0}}>
                            <p>
                                We have started this start up in UK, Cardiff to provide intelligent business solutions
                                like chat-bots agents.
                            </p>

                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Managing Resources</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip style={{backgroundColor: '#FBD748'}}>React.js</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip style={{backgroundColor: '#9BC1AF'}}>Product Planning</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip style={{backgroundColor: '#CBA38F'}}>Product Development</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>

                <div className="timeline-entry">
                    <Card expanded={this.state.expanded3}
                          onExpandChange={expanded => this.handleExpandChange(3, expanded)}>
                        <CardHeader title="COOP Training" subtitle="Saudi Aramco (2018 Jul - 2019 Jan)"
                                    avatar={'https://pbs.twimg.com/profile_images/588260736356352000/trH9Ymww_400x400.jpg'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true} style={{paddingTop: 0}}>
                            <h3>
                                Petroleum Engineering & Development - Application Services Department
                            </h3>
                            <p>
                                In 2018 Summer I started my Coop training for 7 months at Saudi Aramco with Petroleum
                                Engineering Application Services Department (PEASD). <br/>
                                The major tasks were about UI/UX designing, frontend web development using modern JS
                                Frameworks like Angular5+
                            </p>
                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip style={{backgroundColor: '#FBD748'}}>
                                        Angular 5
                                    </Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Software Analysis</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip style={{backgroundColor: '#9BC1AF'}}>UI/UX Designing</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip style={{backgroundColor: '#CBA38F'}}>Soft skills courses</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>

                <div className="timeline-entry">
                    <Card expanded={this.state.expanded2}
                          onExpandChange={expanded => this.handleExpandChange(2, expanded)}>
                        <CardHeader title="Summer Intern" subtitle="Saudi Aramco (2017 Jul - 2017 Aug)"
                                    avatar={'https://pbs.twimg.com/profile_images/588260736356352000/trH9Ymww_400x400.jpg'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true} style={{paddingTop: 0}}>
                            <h3>
                                EXPEC Computer Center Department
                            </h3>
                            <p>
                                In 2017 Summer I took the initiative to train at Saudi Aramco and I did my training
                                in the main data-center at Dhahran.
                            </p>

                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Loss-Prevention drills</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Operational-Excellence Documentations</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>BAT scripts Automation</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Conducting Shutdown Database</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>

                <div className="timeline-entry">
                    <Card expanded={this.state.expanded1}
                          onExpandChange={expanded => this.handleExpandChange(1, expanded)}>
                        <CardHeader title="Computer Science Student"
                                    subtitle="Yanbu University College (Aug 2014 - May 2019)"
                                    avatar={'High-Res-YUC-Logo.jpg'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true} style={{paddingTop: 0}}>
                            <h3>
                                Bachelor of Computer Science with A grade
                            </h3>
                            <p>
                                First point in my journey from my first line of code to the sky
                            </p>


                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>NodeJS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Java SE</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Data Structures</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Web Developing</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Computer Architecture</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
