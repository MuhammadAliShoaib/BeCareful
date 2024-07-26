import {useDispatch} from 'react-redux';

import {showToast} from '../../api/HelperFunction';
import {Login, setToken, setRememberData} from '../../redux/auth';
import {toggleLoading} from '../../redux/general';
import {validateEmail} from '../../utils/validation';

export default () => {
  const dispatch = useDispatch();
  const loginUser = async ({email, password, remember}) => {
    try {
      if (!email?.trim()) {
        return showToast('Please Enter Your Email');
      }
      if (!validateEmail(email)) {
        return showToast('Please Enter Valid Email');
      }
      if (!password?.trim()) {
        return showToast('Please Enter Your Password');
      }
      if (password?.length < 8 || password?.length > 16) {
        return showToast(
          'Password must be atleast 8 characters long and less than 16 characters',
        );
      }
      dispatch(toggleLoading(true));
      const response = await dispatch(Login({email, password})).unwrap();
      console.log('RESPONSEEEEE=======>>>>>>>>>', response);
      dispatch(setToken(response.token));
      dispatch(toggleLoading(false));
      console.log('REMEMBERRRR========>>>>>>>>>>>', remember);
      if (remember) {
        dispatch(setRememberData({email, password}));
      } else {
        dispatch(setRememberData(null));
      }
    } catch (e) {
      console.log('EEERRRRRR IN USEE LOGIN', e);
      dispatch(toggleLoading(false));
      return showToast(e);
    }
  };
  return [loginUser];
};
