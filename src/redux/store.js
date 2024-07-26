import thunk from 'redux-thunk';
import { persistReducer, persistStore, createMigrate, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import migration, { storeVersion } from './migration';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import general from './general';
import auth from './auth';
import profile from './profile';

export const persistConfig = {
  key: 'lookout-storage-root',
  storage: AsyncStorage,
  // version: storeVersion,
  // debug: __DEV__,
  blacklist: ['general'],
  // stateReconciler: autoMergeLevel2,
  // migrate: createMigrate(
  //   {
  //     [storeVersion]: migration,
  //   },
  //   { debug: __DEV__ },
  // ),
};

const reducers = combineReducers({
  general: general,
  auth: auth,
  profile: profile,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) => {
//     return getDefaultMiddleware({serializableCheck: false}).concat([thunk]);
//   },
//   devTools: process.env.NODE_ENV !== 'production',
// });
// export const store = configureStore({
//   reducer: persistedReducer,
//   // middleware: (getDefaultMiddleware) => {
//   //   return getDefaultMiddleware({ serializableCheck: false }).concat([thunk]);
//   // },
//   // middleware: () => new Tuple(additionalMiddleware, logger),
// })
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
