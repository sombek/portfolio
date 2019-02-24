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
import AgileQuoteComponent from './components/agile-quote/agile-quote';
import AgileComponent from './components/agile/agile';
import DesignComponent from './components/design/design';
import CodeGithubComponent from './components/code-github/code-github';
import ContactComponent from './components/contact/contact';
import FooterComponent from './components/footer/footer';

class App extends Component {
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

          <div className="section">
            <div className="section-container">
              <IntroductionComponent/>
            </div>
          </div>

          <div className="section gray">
            <div className="section-container">
              <TimelineComponent/>
            </div>
          </div>

          <div className="section">
            <div className="section-container">
              <CodeGithubComponent/>
            </div>
          </div>

          <div className="section gray">
            <div className="section-container">
              <ProgrammingComponent/>
            </div>
          </div>

          <div className="section">
            <div className="section-container">
              <DesignComponent/>
            </div>
          </div>


          <div className="section gray">
            <div className="section-container">
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
