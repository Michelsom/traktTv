import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers =  compose;

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  // middlewares.push(logger);
}

export default () => {
  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));
  const persistor = persistStore(store);
  return { store, persistor };
};
