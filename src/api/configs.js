export const endpoints = {
  auth: {
    login: 'login',
    register: 'user-register',
    verifyEmail: 'verify-email',
    resetPassword: 'reset-password',
    verifyCode: 'verify-code',
  },
  profile: {
    getProfile: 'user-profile',
    editProfile: 'edit-profile',
    changePassword: 'change-password',
  },
};

export const base_url = 'https://dev74.onlinetestingserver.com:8049/user/api/';
