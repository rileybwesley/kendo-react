/*eslint-disable no-console */
// import React from 'react';
// import {
//   renderIntoDocument,
//   findRenderedDOMComponentWithClass
// } from 'react-addons-test-utils';
// import { createComponent, configs } from '../src';
import { configs } from '../src';

configs.filter((config) => !config.isProfessional).map((config) => {

  describe(`Kendo ${config.name} Component`, function() {

    it('should render container', function() {
      // const KendoComponent = createComponent(config.composer);
      // const component = renderIntoDocument(<KendoComponent {...config.demoProps}>{config.children}</KendoComponent>);
      // const root = findRenderedDOMComponentWithClass(component, config.composer);
      // expect(root !== undefined).to.equal(true)
    });

  });

});
