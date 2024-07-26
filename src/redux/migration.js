import DeviceInfo from 'react-native-device-info';
import initial from './initial';

export const storeVersion = parseInt(
  DeviceInfo.getBuildNumber().split('.').join(''),
);
const getMergedStates = state => {
  var newStates = state;
  const stateEntries = Object.entries(initial);
  stateEntries.forEach(entry => {
    const storeKey = entry[0];
    const reducer = state[storeKey];
    if (reducer) {
      const reducerKeys = Object.entries(initial[storeKey]);
      reducerKeys.forEach(item => {
        if (reducer[item[0]]) {
        } else {
          newStates = {
            ...newStates,
            [storeKey]: {
              ...newStates[storeKey],
              ...initial[storeKey][item[0]],
            },
          };
        }
      });
    } else {
      newStates[storeKey] = initial[storeKey];
    }
  });

  return newStates;
};
const migration = state => {
  return Promise.resolve(getMergedStates(state));
};
export default migration;
