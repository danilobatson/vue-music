import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from 'vee-validate';
import {
  required,
  email,
  min,
  min_value as minValue,
  max_value as maxValue,
  max,
  confirmed,
  not_one_of as excluded,
  alpha_spaces as alphaSpaces,
} from '@vee-validate/rules';

export default {
  install(app, options) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('minValue', minValue);
    defineRule('maxValue', maxValue);
    defineRule('confirmed', confirmed);
    defineRule('excluded', excluded);
  },
};
