import moment from 'moment';
import Toast from 'react-native-toast-message';
import { REGEX } from './constant';

function ToastMessage() {
  this.success = message => {
    if (typeof message !== 'string') {
      message = 'An error occured. Please try again later';
    }

    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Success',
      text2: message,
      props: {
        style: {
          backgroundColor: 'green',
        },
      },
    });
  };

  this.error = message => {
    if (typeof message !== 'string') {
      message = 'An error occured. Please try again later';
    }

    ReactNativeToastMessage.show({
      type: 'error',
      position: 'top',
      text1: 'Error',
      text2: message,
      props: {
        style: {
          backgroundColor: 'red',
        },
      },
    });
  };
}

export const Toast = new ToastMessage();

export const isEmpty = value => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

export const isEmailValid = email => {
  return REGEX.email.test(email);
};

export const isPhoneNumberValid = phone => {
  return REGEX.phone.test(phone);
};

export const isCardNumberValid = card => {
  return REGEX.card.test(card);
};

export const isExpiryDateValid = date => {
  console.log("Expiry Date ", date);

  if (date?.length < 7) {
    return false;
  }

  let [month, year] = date.split("/");
  let currentMonth = `${moment().month() + 1}`.padStart(2, "0");
  let currentYear = moment().year().toString();


  if ((year > "2050" || year < currentYear) || (year == currentYear && month < currentMonth)) {
    console.log("fasdfhjsadflsadf", {
      month,
      year,
      currentMonth,
      currentYear,
      contion: (year > "2050" || year < currentYear) || (year == currentYear && month < currentMonth)
    });

    return false
  }


  return true;
};