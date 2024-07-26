import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {post} from '../api';
import {endpoints} from '../api/configs';
import initial from './initial';

export const Login = createAsyncThunk(
  'auth/login',
  async ({email, password}) => {
    try {
      const response = await post(endpoints.auth.login, {
        email,
        password,
      });
      console.log('RESULTTTT==============>>>>>>>>>>> LOGIN', response);
      return response;
    } catch (error) {
      console.log('ERROR IN LOGGINNN', error);
      throw new Error(error);
    }
  },
);

export const Register = createAsyncThunk(
  'auth/register',
  async ({name, email, password, confirmPassword}) => {
    try {
      const response = await post(endpoints.auth.register, {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      console.log('RESULTTTT==============>>>>>>>>>> REGISTERRRR', response);
      return response;
    } catch (error) {
      console.log('ERROR IN REGISTERRR', error);
      throw new Error(error);
    }
  },
);

export const VerifyEmail = createAsyncThunk(
  'auth/verifyEmail',
  async ({email}) => {
    try {
      const response = await post(endpoints.auth.verifyEmail, {
        email,
      });
      console.log('RESULTTTT==============>>>>>>>>>>> VERIFY EMAIL', response);
      return Promise.resolve(response);
    } catch (error) {
      console.log('ERROR IN VERIFY EMAIL', error);
      // return Promise.reject(error);
      throw new Error(error);
    }
  },
);

export const VerifyCode = createAsyncThunk(
  'auth/verifyCode',
  async ({email, code}) => {
    try {
      const response = await post(endpoints.auth.verifyCode, {
        email,
        code,
      });
      console.log('RESULTTTT==============>>>>>>>>>>> VERIFY CODE', response);
      return Promise.resolve(response);
    } catch (error) {
      console.log('ERROR IN VERIFY CODE', error);
      // return Promise.reject(error);
      throw new Error(error);
    }
  },
);

export const ResetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({email, code, password, password_confirmation}) => {
    try {
      const response = await post(endpoints.auth.resetPassword, {
        email,
        code,
        password,
        password_confirmation,
      });
      console.log(
        'RESULTTTT==============>>>>>>>>>>> RESET PASSWORD',
        response,
      );
      return Promise.resolve(response);
    } catch (error) {
      console.log('ERROR IN RESET PASSWORD', error);
      // return Promise.reject(error);
      throw new Error(error);
    }
  },
);

export const authSlice = createSlice({
  name: initial.auth.name,
  initialState: initial.auth.state,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRememberData: (state, action) => {
      state.rememberData = action.payload;
    },
  },
  //   extraReducers: {
  //     [Login.fulfilled]: (state, action) => {
  //       const {payload} = action;
  //       state.token = payload;
  //     },
  //     [Logout.fulfilled]: state => {
  //       state.token = null;
  //     },
  //   },
});
export const {setToken, setRememberData} = authSlice.actions;
export default authSlice.reducer;
