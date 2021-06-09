import { createStore, applyMiddleware } from "redux";
import thunkMiddleware  from "redux-thunk";
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer  } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from '../Reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['authReducer']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
const Store = createStore(persistedReducer, {}, middleware);

let persistor = persistStore(Store);
const dispatch = Store.dispatch;

export { Store, dispatch, persistor };
