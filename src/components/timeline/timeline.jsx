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
                <p className="headline">Work experience & Education</p>


                <div className="timeline-entry">
                    <Card expanded={this.state.expanded5}
                          onExpandChange={expanded => this.handleExpandChange(5, expanded)}>
                        <CardHeader title="Software Engineer" subtitle="Ministry Of Justice (2019 Jun - Now)"
                                    avatar={'MOJ-Logo.png'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            <h3 style={{margin:0}}>
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
                                    <Chip>Frontend Frameworks</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>DevOps Practices</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>DotNet Core</Chip>
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
                        <CardText expandable={true}>
                            We have started this start up in UK, Cardiff to provide intelligent business solutions
                            like chat-bots agents.
                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Managing Resources</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>React.js</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Product Planning</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Product Development</Chip>
                                </div>
                            </div>
                        </CardText>
                    </Card>
                </div>

                <div className="timeline-entry">
                    <Card expanded={this.state.expanded3}
                          onExpandChange={expanded => this.handleExpandChange(3, expanded)}>
                        <CardHeader title="COOP Trainee" subtitle="Saudi Aramco (2018 Jul - 2019 Jan)"
                                    avatar={'https://pbs.twimg.com/profile_images/588260736356352000/trH9Ymww_400x400.jpg'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            In 2018 Summer I started my Coop training for 7 months at Saudi Aramco with Petroleum
                            Engineering Application Services Department (PEASD). <br/>
                            The major tasks were about UI/UX designing, frontend web development using modern JS
                            Frameworks like Angular5+
                            <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                    <Chip>Angular 5+</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Software Analysis</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>UI/UX Designing</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                    <Chip>Soft skills courses</Chip>
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
                        <CardText expandable={true}>
                            In 2017 Summer I took the initiative to train at Saudi Aramco and I did my training
                            in the main data-center at Dhahran.
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
                        <CardHeader title="Computer Science Student" subtitle="Yanbu University College (Aug 2014 - May 2019)"
                                    avatar={'High-Res-YUC-Logo.jpg'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Bachelor of Computer Science with A grade
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
