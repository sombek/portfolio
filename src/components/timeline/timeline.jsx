import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {

    state = {
        expanded1: false,
        expanded2: false,
        expanded3: false,
        expanded4: false
    };

    handleExpandChange = (key, expanded) => this.setState({[`expanded${key}`]: expanded});


    render() {
        return (
            <div className="timeline">
                <p className="headline">Work experience</p>

                <div className="timeline-entry">
                    <Card expanded={this.state.expanded4}
                          onExpandChange={expanded => this.handleExpandChange(4, expanded)}>
                        <CardHeader title="Co-Founder & Software Developer" subtitle="The Search Base (2018 Nov - Now)"
                                    avatar={'https://www.thesearchbase.com/static/img/core-img/android-icon-72x72.png'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            My training was with resd and we did a lot of stuff here
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
                    <Card expanded={this.state.expanded3}
                          onExpandChange={expanded => this.handleExpandChange(3, expanded)}>
                        <CardHeader title="COOP Trainee" subtitle="Saudi Aramco (2018 Jul - 2019 Jan)"
                                    avatar={'https://pbs.twimg.com/profile_images/588260736356352000/trH9Ymww_400x400.jpg'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            My training was with resd and we did a lot of stuff here
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
                    <Card expanded={this.state.expanded2}
                          onExpandChange={expanded => this.handleExpandChange(2, expanded)}>
                        <CardHeader title="Summer Intern" subtitle="Saudi Aramco (2017 Jul - 2017 Aug)"
                                    avatar={'https://pbs.twimg.com/profile_images/588260736356352000/trH9Ymww_400x400.jpg'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
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
                        <CardHeader title="Student" subtitle="Yanbu University College"
                                    avatar={'http://www.rcyci.edu.sa/en/wp-content/uploads/2017/03/High-Res-YUC-Logo.jpg'}
                                    actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Aug 2014 - May 2019. Bachelor of Computer Science, process automation and management, web
                            and software development.

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
                            </div>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
