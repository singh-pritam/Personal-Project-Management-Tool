import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { projectReducer } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  projectReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
