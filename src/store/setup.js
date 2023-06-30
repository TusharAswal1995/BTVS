import {storage} from 'helpers/secureStorage';
import {applyMiddleware, createStore} from 'redux';
// import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {combinedReducers} from 'reducers/rootReducer';
import array from './array';
import promise from './promise';
import whitelist from './whitelist';

export const storeObj = {};
const persistConfig = {
  timeout: 15000,
  whitelist,
  key: 'root',
  storage: storage,
};

const middlewares = [];

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  // persistedReducer,
  combinedReducers,
  undefined,
  applyMiddleware(...middlewares, ...[thunk, promise, array]),
);

// export const persistor = persistStore(store, {}, () => {
//   return store;
// });

export const persistor = store;
