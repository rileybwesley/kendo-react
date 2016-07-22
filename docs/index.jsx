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

import { createComponent, configs } from '../src';
import AppBar from 'material-ui/AppBar';
import {Card, CardHeader, CardText} from 'material-ui/Card';

// const title = `${NAME} v${VERSION}`; // eslint-disable-line no-undef
// const project = `${USER}/${NAME}`; // eslint-disable-line no-undef

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <AppBar iconStyleLeft={{ display: 'none' }} title="Kendo Components - A Simpler Approach" />
      { configs.map((config, i) => {

        const KendoComponent = createComponent(config.composer);
        return (
          <Card key={i}>
            <CardHeader
              avatar="http://bestwindows8apps.s3.amazonaws.com/icons/Icon.396777.png"
              subtitle={config.namespace}
              title={config.name}
            />
            <CardText>
              <KendoComponent {...config.demoProps}>{config.children}</KendoComponent>
            </CardText>
          </Card>
        );

      }) }
    </div>
  </MuiThemeProvider>,
  document.getElementById('app')
);
