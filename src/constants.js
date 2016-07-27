/*eslint-disable no-alert */
import React from 'react';
import kendo from 'kendo-ui-core';

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
      buttons: false,
      value: '#BA3737'
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
    composer: 'kendoEditor',
    root: 'textarea',
    name: 'Editor',
    namespace: 'kendo.editor',
    isProfessional: true,
    demoProps: {
      content: true,
      toolbar: true
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
    composer: 'kendoMultiSelect',
    root: 'select',
    name: 'MultiSelect',
    namespace: 'kendo.multiselect',
    children: [
      <option key={0}>Item 1</option>,
      <option key={1}>Item 2</option>,
      <option key={2}>Item 3</option>
    ]
  },
  {
    composer: 'kendoNumericTextBox',
    root: 'input',
    name: 'NumericTextBox',
    namespace: 'kendo.numerictextbox'
  },
  {
    composer: 'kendoSlider',
    root: 'input',
    name: 'Slider',
    namespace: 'kendo.slider',
    demoProps: {
      increaseButtonTitle: 'Right',
      decreaseButtonTitle: 'Left',
      min: -10,
      max: 10,
      smallStep: 2,
      largeStep: 1,
      value: 0
    }
  },
  {
    composer: 'kendoTimePicker',
    root: 'input',
    name: 'TimePicker',
    namespace: 'kendo.timepicker',
    demoProps: {
      value: '10:00 AM'
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
    composer: 'kendoUpload',
    root: 'input',
    name: 'Upload',
    namespace: 'kendo.upload',
    defaultAttributes: { type: 'file' },
    isProfessional: true
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
      <li key={0}>Item 1
        <ul>
            <li>Sub Item 1</li>
            <li>Sub Item 2</li>
            <li>Sub Item 3</li>
        </ul>
      </li>,
      <li key={1}>Item 2
          <ul>
              <li>Sub Item 1</li>
              <li>Sub Item 2</li>
              <li>Sub Item 3</li>
          </ul>
      </li>
    ]
  },
  {
    composer: 'kendoPager',
    root: 'div',
    name: 'Pager',
    namespace: 'kendo.pager',
    demoProps: {
      buttonCount: 1,
      dataSource: new kendo.data.DataSource({
        data: [
          { productName: 'Tea', category: 'Beverages' },
          { productName: 'Coffee', category: 'Beverages' },
          { productName: 'Ham', category: 'Food' },
          { productName: 'Bread', category: 'Food' }
        ],
        pageSize: 2
      })
    }
  },
  {
    composer: 'kendoPanelBar',
    root: 'ul',
    name: 'PanelBar',
    namespace: 'kendo.panelbar',
    demoProps: {
      expandMode: 'single'
    },
    children: [
      <li className="k-state-active" key={0}>
        <span className="k-link k-state-selected">Panel Bar Title 1</span>
        <div style={{padding: '10px'}}>
          <h2>Panel Title</h2>
          <p>Panel Content</p>
        </div>
      </li>,
      <li key={1}>
        <span>Panel Bar Title 2</span>
        <div style={{padding: '10px'}}>
          <h2>Panel Title</h2>
          <p>Panel Content</p>
        </div>
      </li>,
      <li disabled="disabled" key={2}>
        Communication
      </li>
    ]
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
  },
  {
    composer: 'kendoMobileSwitch',
    root: 'input',
    name: 'Switch',
    namespace: 'kendo.mobile.switch'
  },
  {
    composer: 'kendoMobileButtonGroup',
    root: 'ul',
    name: 'ButtonGroup',
    namespace: 'kendo.mobile.buttongroup',
    demoProps: {
      select: (e) => alert('selected index:' + e.index),
      index: 0
    },
    children: [
      <li key={0}>Month</li>,
      <li key={1}>Quarter</li>,
      <li key={2}>Year</li>
    ]
  },
  {
    composer: 'kendoValidator',
    root: 'div',
    name: 'Validator',
    namespace: 'kendo.validator',
    notDemoable: true
  },
  {
    composer: 'kendoTabStrip',
    root: 'div',
    name: 'TabStrip',
    namespace: 'kendo.tabstrip',
    demoProps: {
      animation:  {
        open: {
          effects: 'fadeIn'
        }
      }
    },
    children: [
      <ul key={0}>
        <li className="k-state-active">Paris</li>
        <li>New York</li>
      </ul>,
      <div key={1}>
        <span className="rainy">&nbsp;</span>
        <div className="weather">
          <h2>17<span>&ordm;C</span></h2>
          <p>Rainy weather in Paris.</p>
        </div>
      </div>,
      <div key={2}>
        <span className="sunny">&nbsp;</span>
        <div className="weather">
          <h2>29<span>&ordm;C</span></h2>
          <p>Sunny weather in New York.</p>
        </div>
      </div>
    ]
  },
  {
    composer: 'kendoTreeView',
    root: 'ul',
    name: 'TreeView',
    namespace: 'kendo.treeview',
    isProfessional: true,
    children: [
      <li data-expanded="true" key={0}>
        <span className="k-sprite folder"></span>
        My Web Site
        <ul>
          <li data-expanded="true">
            <span className="k-sprite folder"></span>images
            <ul>
              <li><span className="k-sprite image"></span>logo.png</li>
              <li><span className="k-sprite image"></span>body-back.png</li>
              <li><span className="k-sprite image"></span>my-photo.jpg</li>
            </ul>
          </li>
          <li data-expanded="true">
            <span className="k-sprite folder"></span>resources
            <ul>
              <li data-expanded="true">
                <span className="k-sprite folder"></span>pdf
                <ul>
                  <li><span className="k-sprite pdf"></span>brochure.pdf</li>
                  <li><span className="k-sprite pdf"></span>prices.pdf</li>
                </ul>
              </li>
              <li><span className="k-sprite folder"></span>zip</li>
            </ul>
          </li>
          <li><span className="k-sprite html"></span>about.html</li>
          <li><span className="k-sprite html"></span>contacts.html</li>
          <li><span className="k-sprite html"></span>index.html</li>
          <li><span className="k-sprite html"></span>portfolio.html</li>
        </ul>
      </li>
    ]
  },
  {
    composer: 'kendoGrid',
    root: 'div',
    name: 'Grid',
    namespace: 'kendo.pdf,kendo.grid',
    isProfessional: true,
    demoProps: {
      dataSource: {
          type: 'odata',
          transport: {
              read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
          },
          pageSize: 20
      },
      height: 550,
      groupable: true,
      sortable: true,
      pageable: {
          refresh: true,
          pageSizes: true,
          buttonCount: 5
      },
      columns: [{
          template: '<div class=\'customer-photo\'' +
                          'style=\'background-image: url(../content/web/Customers/#:data.CustomerID#.jpg);\'></div>' +
                      '<div class=\'customer-name\'>#: ContactName #</div>',
          field: 'ContactName',
          title: 'Contact Name',
          width: 240
      }, {
          field: 'ContactTitle',
          title: 'Contact Title'
      }, {
          field: 'CompanyName',
          title: 'Company Name'
      }, {
          field: 'Country',
          width: 150
      }]
    }
  }
];
