import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedEnhancers);
