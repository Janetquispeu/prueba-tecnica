import * as Yup from 'yup';

export const REGEX_VALIDATION  = {
  string: '^[a-zA-ZñÑáéíóúÁÉÍÓÚàèìòùÀÈÌÒÙäöüÄÖÜ ]+$',
  number:'^[0-9]+$'
}

export const ERROR_MESSAGES = {
  common: 'Ingrese un campo válido',
  required: 'Este campo es obligatorio',
  min: (num: number) => `Ingrese como mínimo ${num} carácter(es)`,
  max: (num: number) => `Ingrese como máximo ${num} carácter(es)`
};


export const validations = Yup.object().shape({
  name: Yup.string()
    .matches(new RegExp(REGEX_VALIDATION.string), ERROR_MESSAGES.common)
    .min(2, ERROR_MESSAGES.min(2))
    .max(25, ERROR_MESSAGES.max(25))
    .required(ERROR_MESSAGES.required),
  lastName: Yup.string()
    .matches(new RegExp(REGEX_VALIDATION.string), ERROR_MESSAGES.common)
    .min(2, ERROR_MESSAGES.min(2))
    .max(45, ERROR_MESSAGES.max(45))
    .required(ERROR_MESSAGES.required),
  age: Yup.string()
    .matches(new RegExp(REGEX_VALIDATION.number), ERROR_MESSAGES.common)
    .required(ERROR_MESSAGES.required)
    .test('age', 'Edad incorrecta', (value) => {
      if(Number(value) === 0 || Number(value) >= 104) {
        return false
      }
      return true
    }),
  birthday: Yup.string()
    .min(10, ERROR_MESSAGES.required)
    .required(ERROR_MESSAGES.required),
});