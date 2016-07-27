'use strict';
import { component } from './composition';
import kendoConfigs from './constants';

let output = {
  configs: kendoConfigs,
  createComponent: component
};

kendoConfigs.filter((config) => !config.isProfessional).map((config) =>
  output[config.name] = component(config.composer)
);

module.exports = output;
