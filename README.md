[comment]: <> ([![build status](https://secure.travis-ci.org/rileybwesley/kendo-react.svg)](http://travis-ci.org/rileybwesley/kendo-react))
 [![bitHound Score](https://www.bithound.io/github/rileybwesley/kendo-react/badges/score.svg)](https://www.bithound.io/github/rileybwesley/kendo-react) [![Dependency Status](https://david-dm.org/rileybwesley/kendo-react.svg)](https://david-dm.org/rileybwesley/kendo-react)

# Kendo Components for React

This is a React implementation for kendo components. Each Kendo UI component has been wrapped in a React shell and can be configured via standard React component attributes. The attributes for the Kendo widgets are passed through the KendoComponent React component into the setOptions and generation methods of the Kendo component.

## Basic Usage

To use theses components in your application, import the various components into your jsx/js container or component and instantiate the Kendo components just like you would any other. Refer to Kendo Documentation for property and configuration references.

[Kendo Component Documentation](http://demos.telerik.com/kendo-ui/)

## Installation

The easiest way to use kendo-react is to install it from NPM and include it in your own React build process (using [WebPack](https://webpack.github.io/), etc).

```javascript
npm install kendo-react --save;
```

At this point you can import react-select and its styles in your application as follows:

```javascript
import { Button } from 'kendo-react';

// Be sure to include styles at some point, probably during your bootstrapping
import 'kendo-ui-core/css/web/kendo.bootstrap.min.css';
```

```html
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2016.2.714/styles/kendo.common.min.css" />
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2016.2.714/styles/kendo.bootstrap.min.css" />
<link rel="stylesheet" href="//kendo.cdn.telerik.com/2016.2.714/styles/kendo.default.mobile.min.css" />
```

### Kendo Professional

Since Kendo Professional is a commercial product, I could not publish professional libraries here. If you do want to use professional components, you can clone this library and pick out the parts you want. Generally these are the steps to get it going:

* Install Kendo Professional and jQuery.2:

```javascript
npm install --save git+https://username%40emaildomain.com:password@bower.telerik.com/npm-kendo-ui.git

// Replace username and password with your Kendo credentials
npm install --save jquery.2;
```
* Clone this library
* Create a new React Component called "KendoComponent"
* Copy index.js, constants.js, and composition.js into the component folder
* Modify the "requireComponent" function in composition.js:

```javascript
// Change:
require(`kendo-ui-core/js/${comp}`));

// TO:
require(`kendo/js/${comp}`));
```

* TaDa! You should have a working generic KendoComponent

### All Widgets

Because of the shear number of Kendo Widgets, I did not create configuration for all of them. If you would like to use a component that is not currently included in the current configuration you can call the "createComponent" function manually passing the required configuration:

```javascript
import { createComponent } from 'kendo-react';

const Button = createdComponent(null, {
  composer: 'kendoButton', // Kendo composition method
  root: 'button', // Root component to render the widget
  name: 'Button', // Pretty name of the newly created component
  namespace: 'kendo.button', // Namespace containing the composer method
  defaultAttributes: { type: 'button' } // Button is particular requires certain attributes on the button dom element
});

render() {
  return <Button text="Foo" />;
}
```

## License

*kendo-react* is available under MIT. See LICENSE for more details.
