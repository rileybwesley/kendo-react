/*eslint-disable no-alert */
import React from 'react';

export default [
  {
    composer: 'kendoAutoComplete',
    root: 'input',
    name: 'AutoComplete',
    namespace: 'kendo.autocomplete',
    demoProps: {
      dataSource: {
        data: ['One', 'Two', 'Three', 'Four']
      }
    }
  },
  {
    composer: 'kendoButton',
    root: 'button',
    name: 'Button',
    namespace: 'kendo.button',
    defaultAttributes: { type: 'button' },
    demoProps: {
      text: 'Cancel Button',
      click: () => alert('Button clicked!'),
      icon: 'cancel'
    }
  },
  {
    composer: 'kendoCalendar',
    root: 'div',
    name: 'Calendar',
    namespace: 'kendo.calendar'
  },
  {
    composer: 'kendoColorPalette',
    root: 'div',
    name: 'ColorPalette',
    namespace: 'kendo.colorpicker',
    demoProps: {
      palette: 'websafe'
    }
  },
  {
    composer: 'kendoColorPicker',
    root: 'input',
    name: 'ColorPicker',
    namespace: 'kendo.colorpicker',
    demoProps: {
      buttons: false
    }
  },
  {
    composer: 'kendoComboBox',
    root: 'input',
    name: 'ComboBox',
    namespace: 'kendo.combobox',
    demoProps: {
      dataSource: {
        data: ['One', 'Two', 'Three', 'Four']
      }
    }
  },
  {
    composer: 'kendoDatePicker',
    root: 'input',
    name: 'DatePicker',
    namespace: 'kendo.datepicker'
  },
  {
    composer: 'kendoDateTimePicker',
    root: 'input',
    name: 'DateTimePicker',
    namespace: 'kendo.datetimepicker'
  },
  {
    composer: 'kendoDropDownList',
    root: 'input',
    name: 'DropDownList',
    namespace: 'kendo.dropdownlist',
    demoProps: {
      dataSource: {
        data: ['One', 'Two', 'Three', 'Four']
      }
    }
  },
  {
    composer: 'kendoFlatColorPicker',
    root: 'div',
    name: 'FlatColorPicker',
    namespace: 'kendo.colorpicker'
  },
  {
    composer: 'kendoListView',
    root: 'div',
    name: 'ListView',
    namespace: 'kendo.listview',
    demoProps: {
      dataSource: {
        data: [
          { name: 'Jane Doe' },
          { name: 'John Doe' }
        ]
      },
      selectable: 'multiple',
      template: '<div>#:name#</div>'
    }
  },
  {
    composer: 'kendoMaskedTextBox',
    root: 'input',
    name: 'MaskedTextBox',
    namespace: 'kendo.maskedtextbox',
    demoProps: {
      mask: '000000',
      clearPromptChar: true
    }
  },
  {
    composer: 'kendoMenu',
    root: 'ul',
    name: 'Menu',
    namespace: 'kendo.menu',
    demoProps: {
      animation: {
        open: {
          effects: 'fadeIn'
        }
      }
    },
    children: [
      <li key="0">
        <ul>
          <li>Menu Item 1</li>
        </ul>
      </li>
    ]
  },
  {
    composer: 'kendoMultiSelect',
    root: 'select',
    name: 'MultiSelect',
    namespace: 'kendo.multiselect',
    children: [
      <option key="0">Item 1</option>,
      <option key="1">Item 2</option>,
      <option key="2">Item 3</option>
    ]
  },
  {
    composer: 'kendoNumericTextBox',
    root: 'input',
    name: 'NumericTextBox',
    namespace: 'kendo.numerictextbox'
  },
  {
    composer: 'kendoPager',
    root: 'div',
    name: 'Pager',
    namespace: 'kendo.pager'
  },
  {
    composer: 'kendoPanelBar',
    root: 'ul',
    name: 'PanelBar',
    namespace: 'kendo.panelbar'
  },
  {
    composer: 'kendoProgressBar',
    root: 'div',
    name: 'ProgressBar',
    namespace: 'kendo.progressbar',
    demoProps: {
      max: 100,
      value: 50
    }
  }
];
