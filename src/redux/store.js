import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let middleware = [ thunkMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  middleware = [ ...middleware ]
}

const store = createStore(
    rootReducer,
    composeEnhancer(
    applyMiddleware(...middleware))
);

export default store;