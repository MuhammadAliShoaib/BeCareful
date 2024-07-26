import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {showToast} from '../../api/HelperFunction';
import {toggleLoading} from '../../redux/general';
import {
  ChangePassword,
  EditProfile,
  GetProfile,
  setUser,
} from '../../redux/profile';

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getProfile = async (noLoader) => {
    try {
      if (!noLoader) {
        dispatch(toggleLoading(true));
      }
      const response = await dispatch(GetProfile()).unwrap();
      console.log('RESPONSEEEEE IN GET PROFILEEE=======>>>>>>>>>', response);
      dispatch(setUser(response?.detail));
      dispatch(toggleLoading(false));
      return Promise.resolve(response);
    } catch (e) {
      console.log('EEERRRRRR IN GET PROFILEEE', e);
      dispatch(toggleLoading(false));
      throw new Error(e);
    }
  };

  const editProfile = async ({name, image}) => {
    try {
      if (name.trim() === '') {
        return showToast('Please enter your name');
      }
      // if (image == null) {
      //   return showToast('Please upload your image');
      // }
      dispatch(toggleLoading(true));
      const response = await dispatch(EditProfile({name, image})).unwrap();
      console.log('RESPONSEEEEE=======>>>>>>>>>', response);
      showToast(response.message);
      dispatch(toggleLoading(false));
      navigation.goBack();
    } catch (e) {
      console.log('EEERRRRRR IN USEE PROFILE EDIT PROFILE', e);
      dispatch(toggleLoading(false));
      return showToast(e);
    }
  };

  const changePassword = async ({
    current_password,
    password,
    password_confirmation,
  }) => {
    try {
      if (current_password.trim() === '') {
        return showToast('Please enter your current password');
      }
      if (password.trim() === '') {
        return showToast('Please enter new password');
      }
      if (password?.length < 8 || password?.length > 16) {
        return showToast(
          'Password must be atleast 8 characters long and less than 16 characters',
        );
      }
      if (password_confirmation.trim() === '') {
        return showToast('Please confirm your password');
      }
      if (
        password_confirmation?.length < 8 ||
        password_confirmation?.length > 16
      ) {
        return showToast(
          'Password must be atleast 8 characters long and less than 16 characters',
        );
      }
      if (password_confirmation.trim() !== password.trim()) {
        return showToast('Passwords must be same!');
      }
      dispatch(toggleLoading(true));
      const response = await dispatch(
        ChangePassword({current_password, password, password_confirmation}),
      ).unwrap();
      console.log('RESPONSEEEEE=======>>>>>>>>>', response);
      showToast(response.message);
      dispatch(toggleLoading(false));
      navigation.goBack();
    } catch (e) {
      console.log('EEERRRRRR IN USEE LOGIN', e);
      dispatch(toggleLoading(false));
      return showToast(e);
    }
  };

  return {getProfile, changePassword, editProfile};
};
