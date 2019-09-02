import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import reducers from './createReducer';
import reduxPersist from '../config/reduxPersist';

const persistConfig = reduxPersist.storeConfig;
const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureStore() {
  const store = createStore(
    persistedReducer,
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
