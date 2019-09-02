import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: false,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    blacklist: ['navigation'],
    whitelist: ['simpleData'],
  },
};

export default REDUX_PERSIST;
