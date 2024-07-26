import {useDispatch} from 'react-redux';

import {ResetPassword, VerifyCode, VerifyEmail} from '../../redux/auth';
import {toggleLoading} from '../../redux/general';
import {validateEmail} from '../../utils/validation';

export default () => {
  const dispatch = useDispatch();
  const verifyEmail = async ({email}) => {
    if (email.trim() === '') {
      throw new Error('Please Enter Your Email');
    }
    if (!validateEmail(email)) {
      throw new Error('Please Enter Valid Email');
    }
    try {
      dispatch(toggleLoading(true));
      const response = await dispatch(VerifyEmail({email})).unwrap();
      console.log('RESPONSEEEEE=======>>>>>>>>>', response);
      dispatch(toggleLoading(false));
      return Promise.resolve(response);
    } catch (e) {
      console.log('EEERRRRRR IN USEE FOPRGOTTTT', e);
      dispatch(toggleLoading(false));
      //   showToast(e);
      return Promise.reject(e.message);
    }
  };

  const verifyCode = async ({email, code}) => {
    if (code.trim() === '') {
      throw new Error('Please Enter Code Sent on your Email');
    }
    try {
      dispatch(toggleLoading(true));
      const response = await dispatch(VerifyCode({email, code})).unwrap();
      console.log('RESPONSEEEEE VERIFY CODE=======>>>>>>>>>', response);
      dispatch(toggleLoading(false));
      return Promise.resolve(response);
    } catch (e) {
      console.log('EEERRRRRR IN VERIFY CODE', e);
      dispatch(toggleLoading(false));
      //   showToast(e);
      return Promise.reject(e.message);
    }
  };

  const resetPassword = async ({
    email,
    code,
    password,
    password_confirmation,
  }) => {
    if (password.trim() === '') {
      throw new Error('Please enter new password');
    }
    if (password?.length < 8 || password?.length > 16) {
      throw new Error(
        'Password must be atleast 8 characters long and less than 16 characters',
      );
    }
    if (password_confirmation.trim() === '') {
      throw new Error('Please confirm your password');
    }
    if (
      password_confirmation?.length < 8 ||
      password_confirmation?.length > 16
    ) {
      throw new Error(
        'Password must be atleast 8 characters long and less than 16 characters',
      );
    }
    if (password_confirmation.trim() !== password.trim()) {
      throw new Error('Passwords are not same');
    }
    try {
      dispatch(toggleLoading(true));
      const response = await dispatch(
        ResetPassword({email, code, password, password_confirmation}),
      ).unwrap();
      console.log('RESPONSEEEEE=======>>>>>>>>>', response);
      dispatch(toggleLoading(false));
      return Promise.resolve(response);
    } catch (e) {
      console.log('EEERRRRRR IN USEE FOPRGOTTTT', e);
      dispatch(toggleLoading(false));
      //   showToast(e);
      return Promise.reject(e.message);
    }
  };

  return [verifyEmail, verifyCode, resetPassword];
};
