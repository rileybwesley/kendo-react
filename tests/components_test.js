/*eslint-disable no-console */
import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import { createComponent, configs } from '../src';

configs.map((config) => {

  describe(`Kendo ${config.name} Component`, function() {

    it('should render container', function() {
      const KendoComponent = createComponent(config.composer);
      const component = renderIntoDocument(<KendoComponent {...config.demoProps}>{config.children}</KendoComponent>);
      const root = findRenderedDOMComponentWithTag(component, config.root);
      expect(root !== undefined).to.equal(true)
    });

  });

});
