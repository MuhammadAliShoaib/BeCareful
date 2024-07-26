import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {get, post} from '../api';
import {endpoints} from '../api/configs';
import initial from './initial';

export const GetProfile = createAsyncThunk('profile/get', async () => {
  try {
    const response = await get(endpoints.profile.getProfile);
    console.log('RESULTTTT==============>>>>>>>>>>> GET PROFILEEE', response);
    return Promise.resolve(response);
  } catch (error) {
    console.log('ERROR IN GET PROFILEEE', error);
    throw new Error(error);
  }
});

export const EditProfile = createAsyncThunk(
  'profile/edit',
  async ({name, image}) => {
    try {
      const response = await post(
        endpoints.profile.editProfile,
        {
          name,
          image,
        },
        true,
      );
      console.log('RESULTTTT==============>>>>>>>>>>> EDIT PROFILE', response);
      return response;
    } catch (error) {
      console.log('ERROR IN EDIT PROFILE', error);
      throw new Error(error);
    }
  },
);

export const ChangePassword = createAsyncThunk(
  'profile/changePassword',
  async ({current_password, password, password_confirmation}) => {
    try {
      const response = await post(endpoints.profile.changePassword, {
        current_password,
        password,
        password_confirmation,
      });
      console.log(
        'RESULTTTT==============>>>>>>>>>>> CHANGGEEE PASSWORD',
        response,
      );
      return response;
    } catch (error) {
      console.log('ERROR IN CHANGGEEE PASSWORD', error);
      throw new Error(error);
    }
  },
);

export const profileSlice = createSlice({
  name: initial.profile.name,
  initialState: initial.profile.state,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
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
export const {setUser} = profileSlice.actions;
export default profileSlice.reducer;
