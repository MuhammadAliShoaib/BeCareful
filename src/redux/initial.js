const general = {
  state: {
    loading: false,
  },
  name: 'general',
};

const auth = {
  state: {
    token: null,
    rememberData: null,
  },
  name: 'auth',
};

const profile = {
  state: {
    user: null,
  },
  name: 'profile',
};

const initial = {
  general,
  auth,
  profile,
};
export default initial;
