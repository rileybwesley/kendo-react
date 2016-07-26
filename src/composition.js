/*eslint-disable max-params, no-unused-expressions, no-console, brace-style, no-shadow */
import React, { PropTypes } from 'react';
import $ from 'jquery';
import kendoConfigs from './constants';
import 'kendo-ui-core/css/web/kendo.common.core.min.css';
import 'kendo-ui-core/css/web/kendo.bootstrap.min.css';

if(window.location.href.indexOf('debug') !== -1) { console.log($.fn.jquery); }

const propsEqual = (current, next) => JSON.stringify(current) !== JSON.stringify(next);

const requireComponent = (component) => require(`kendo-ui-core/js/${component}`);

const generateComponent = (kendoEl, options, composer, kendoComponentName) => {
  let component = $(kendoEl).data(composer);
  if (!component) {
    $(kendoEl)[composer](options);
    component = $(kendoEl).data(composer);
    options.generated && options.generated(component);
    options.debug && console.info(`${kendoComponentName} Generated`, kendoEl);
  }
  else {
    component.setOptions(options);
    options.rerendered && options.rerendered(component);
    options.debug && console.info(`${kendoComponentName} Rerendered`, kendoEl);
  }
};

export const component = (composer) => {
  let config;
  for (let i = 0; i < kendoConfigs.length; i++) {
    if (kendoConfigs[i].composer === composer) {
      config = kendoConfigs[i];
    }
  }

  const kendoComponent = class KendoComponent extends React.Component {

    componentWillMount() {
      requireComponent(config.namespace);
    }

    componentDidMount() {
      generateComponent(this.refs.kendoComponent, this.props, config.composer, config.name);
    }

    componentWillReceiveProps(nextProps) {
      if (!propsEqual(this.props, nextProps)) {
        generateComponent(this.refs.kendoComponent, nextProps, config.composer, config.name);
      }
    }

    render() {

      const opts = {
        children: this.props.children || [],
        className: this.props.className,
        'data-id': config.composer,
        'data-kendo': 'true',
        ref: 'kendoComponent',
        style: this.props.style
      };

      let result;
      switch (config.root) {
      case 'button':
        result = (<button {...opts} {...config.defaultAttributes}>{this.props.text}</button>);
        break;
      case 'input':
        opts.children && delete opts.children;
        result = (<input {...opts} {...config.defaultAttributes} />);
        break;
      case 'textarea':
        opts.children && delete opts.children;
        result = (<textarea {...opts} {...config.defaultAttributes} />);
        break;
      case 'ul':
        result = (<ul {...opts} {...config.defaultAttributes}>{opts.children}</ul>);
        break;
      case 'select':
        result = (<select {...opts} {...config.defaultAttributes}>{opts.children}</select>);
        break;
      default:
        result = (<div {...opts} {...config.defaultAttributes} />);
        break;
      }
      return result;
    }

  };

  kendoComponent.propTypes = {
    children: PropTypes.instanceOf(Array),
    className: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.string
  };

  return kendoComponent;

};
