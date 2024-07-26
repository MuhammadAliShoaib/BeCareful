import {emailReg, nameReg} from './regex';

export const validateEmail = (email) => {
  return emailReg.test(email);
};

export const validateName = (nameOnly) => {
  return nameReg.test(nameOnly);
};
