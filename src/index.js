'use strict';
import { component } from './composition';
import kendoConfigs from './constants';

module.exports = {
  configs: kendoConfigs,
  createComponent: component,
  AutoComplete: component('kendoAutoComplete'),
  Button: component('kendoButton'),
  Calendar: component('kendoCalendar'),
  ColorPalette: component('kendoColorPalette'),
  ColorPicker: component('kendoColorPicker'),
  ComboBox: component('kendoComboBox'),
  DatPicker: component('kendoDatePicker'),
  DateTimePicker: component('kendoDateTimePicker'),
  DropDownList: component('kendoDropDownList'),
  FlatColorPicker: component('kendoFlatColorPicker'),
  ListView: component('kendoListView'),
  MaskedTextBox: component('kendoMaskedTextBox'),
  Menu: component('kendoMenu'),
  MultiSelect: component('kendoMultiSelect'),
  NumericTextBox: component('kendoNumericTextBox'),
  Pager: component('kendoPager'),
  PanelBar: component('kendoPanelBar'),
  ProgressBar: component('kendoProgressBar')
};
