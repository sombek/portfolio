import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Summer Intern" subtitle="Saudi Aramco"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Since	Jul	2017 - Aug 2017
                            <br/><br/>
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
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Student" subtitle="Yanbu University College"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Aug 2014 - May 2019. Bachelor of Computer Science, process automation and management, web and software development. 

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
