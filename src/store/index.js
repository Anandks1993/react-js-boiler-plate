import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    formReducer,
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk)),
);

export default store;