import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  configure,
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
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alphaSpaces', alphaSpaces);
    defineRule('email', email);
    defineRule('minValue', minValue);
    defineRule('maxValue', maxValue);
    defineRule('passwordsMismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('countryExcluded', excluded);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `This field ${ctx.field} required`,
          tos: `You must accept the Terms of Service`,
          min: `This field ${ctx.field} too short`,
          max: `This field ${ctx.field} too long`,
          alphaSpaces: `This field ${ctx.field} may only contain letters and spaces`,
          email: `This field ${ctx.field} must be a valid email`,
          minValue: `This field ${ctx.field} is too low`,
          maxValue: `This field ${ctx.field} is too high`,
          passwordsMismatch: `This passwords don't match`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}`,
          countryExcluded: `Due to restrictions, we do not accept users from this location`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `This field ${ctx.field} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
