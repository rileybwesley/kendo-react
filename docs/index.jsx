/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';

import 'purecss/build/pure.css';
import 'react-ghfork/gh-fork-ribbon.ie.css';
import 'react-ghfork/gh-fork-ribbon.css';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import loadTests from './testLoader';
loadTests();

import { createComponent, configs } from '../src';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <AppBar iconStyleLeft={{ display: 'none' }} title="Kendo Components - Facebook React" />
      { configs.map((config, i) => {

        const KendoComponent = !config.isProfessional && !config.isDemoable && createComponent(config.composer) || null;
        return (
          <Card key={i}>
            <CardHeader
              avatar="http://bestwindows8apps.s3.amazonaws.com/icons/Icon.396777.png"
              subtitle={config.namespace}
              title={config.name}
            />
            <CardText>
              {KendoComponent !== null &&
                <KendoComponent {...config.demoProps}>{config.children}</KendoComponent>
              || null}
              {config.isProfessional &&
                <span>Professional Version Only (See Documentation)</span>
              || null}
              {config.notDemoable &&
                <span>No Demo (N/A)</span>
              || null}
            </CardText>
          </Card>
        );

      }) }
    </div>
  </MuiThemeProvider>,
  document.getElementById('app')
);
