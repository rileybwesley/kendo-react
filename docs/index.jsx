/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';

import 'purecss/build/pure.css';
import 'react-ghfork/gh-fork-ribbon.ie.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import loadTests from './testLoader';
loadTests();

import { createComponent, configs, TabStrip } from '../src';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

// import 'kendo-ui-core/css/web/kendo.common.core.min.css';
// import 'kendo-ui-core/css/web/kendo.bootstrap.min.css';

const readme = require('../README.md');
const getReadMe = () => ({ __html: `<div>${readme}</div>` });

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <Toolbar className="toolbar">
        <ToolbarGroup firstChild>
          <ToolbarTitle style={{ marginLeft: '10px' }} text="Kendo Components - Facebook React" />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <RaisedButton href="https://github.com/rileybwesley/kendo-react" label="View on GitHub" />
        </ToolbarGroup>
      </Toolbar>
      <div style={{ display: 'block', margin: '20px' }}>
        <TabStrip animation={{ open: { effects: 'fadeIn' }}}>
          <ul>
            <li className="k-state-active">Documentation</li>
            <li>Demos</li>
          </ul>
          <div dangerouslySetInnerHTML={getReadMe()} />
          <div label="Demo">
            <div style={{ display: 'block', marginTop: '20px' }}>
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
          </div>
        </TabStrip>
      </div>
    </div>
  </MuiThemeProvider>,
  document.getElementById('app')
);
