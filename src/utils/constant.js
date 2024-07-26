export const REGEX = {
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  alphabets: /^[a-zA-Z ]*$/,
  phone:
    /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm,
  numbers: /^[0-9]+$/,
  card: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
};

export const LANGUAGE_CODE = {
  SP: 'SP',
  ENG: 'ENG',
};

export const rejection_reasons = [
  {
    id: 1,
    name: 'Driver was too late',
  },

  {
    id: 2,
    name: 'Slow service',
  },
];

export const categories_data = [
  {
    id: 1,
    name: 'Category 1',
  },

  {
    id: 2,
    name: 'Category 2',
  },

  {
    id: 3,
    name: 'Category 3',
  },
];

export const size_data = [
  {
    id: 1,
    name: '10 yards',
  },

  {
    id: 2,
    name: '15 yards',
  },

  {
    id: 3,
    name: '20 yards',
  },
];

export const duration_data = [
  {
    id: 1,
    name: '0 - 0.5 Month',
  },

  {
    id: 2,
    name: '0.5 - 1 Month',
  },

  {
    id: 3,
    name: '1 - 3 Months',
  },

  {
    id: 4,
    name: '3 - 6 Months',
  },

  {
    id: 5,
    name: '6 - 9 Months',
  },

  {
    id: 6,
    name: '9 - 12 Months',
  },
];
