import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-npm-webfont';
import './App.css';

import ProgressComponent from './components/progress/progress';
import BrowserDetectComponent from './components/browser-detect/browser-detect';
import HeaderComponent from './components/header/header';
import IntroductionComponent from './components/introduction/introduction';
import TimelineComponent from './components/timeline/timeline';
import ProgrammingComponent from './components/programming/programming';
import AgileComponent from './components/agile/agile';
import ProjectsComponent from './components/projects/projects';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-108447545-2');

class App extends Component {

    componentDidMount = () => ReactGA.pageview('/home');

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <BrowserDetectComponent/>
                    <ProgressComponent/>

                    <div className="section blue">
                        <div className="section-container header-component">
                            <HeaderComponent/>
                        </div>
                    </div>

                    <div className="section"
                         style={{backgroundImage: 'linear-gradient(to bottom, #fbd748, #fdd450, #fed257, #ffcf5e, #ffcd65)'}}>
                        <div className="section-container">
                            <IntroductionComponent/>
                        </div>
                    </div>

                    <div className="section gray">
                        <div className="section-container-timeline">
                            <TimelineComponent/>
                        </div>
                    </div>

                    <div className="section">
                        <div className="section-container-projects">
                            <ProjectsComponent/>
                        </div>
                    </div>

                    <div className="section gray">
                        <div className="section-container">
                            <ProgrammingComponent/>
                        </div>
                    </div>

                    <div className="section">
                        <div className="section-container">
                            <AgileComponent/>
                        </div>
                    </div>

                    <div className="section gray">
                        <div className="section-container" style={{paddingTop: 0}}>
                            <ContactComponent/>
                        </div>
                    </div>

                    <div className="section">
                        <div className="section-container footer-component">
                            <FooterComponent/>
                        </div>
                    </div>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
