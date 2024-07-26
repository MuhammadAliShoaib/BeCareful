import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {showToast} from '../../api/HelperFunction';
import {Register} from '../../redux/auth';
import {toggleLoading} from '../../redux/general';
import {validateEmail} from '../../utils/validation';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const registerUser = async ({name, email, password, confirmPassword}) => {
    try {
      if (name?.trim() === '') {
        return showToast('Please Enter Your Name');
      }
      if (email?.trim() === '') {
        return showToast('Please Enter Your Email');
      }
      if (!validateEmail(email)) {
        return showToast('Please Enter Valid Email');
      }
      if (password?.trim() === '') {
        return showToast('Please Enter Password');
      }
      if (password?.length < 8 || password?.length > 16) {
        return showToast(
          'Password must be atleast 8 characters long and less than 16 characters',
        );
      }
      if (confirmPassword?.trim() === '') {
        return showToast('Please Confirm Password');
      }
      if (confirmPassword?.length < 8 || confirmPassword?.length > 16) {
        return showToast(
          'Password must be atleast 8 characters long and less than 16 characters',
        );
      }
      if (confirmPassword?.trim() !== password.trim()) {
        return showToast('Passwords should be same!');
      }
      dispatch(toggleLoading(true));
      const response = await dispatch(
        Register({name, email, password, confirmPassword}),
      ).unwrap();
      console.log('RESPONSEEEEE=======>>>>>>>>>', response);
      dispatch(toggleLoading(false));
      navigation.goBack();
      return showToast(response.message);
    } catch (e) {
      console.log('EEERRRRRR IN REGISTERRRR', e);
      dispatch(toggleLoading(false));
      return showToast(e);
    }
  };
  return [registerUser];
};
