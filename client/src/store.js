import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const initialState = [];

const middleWare = [thunk];

const store = createStore(
	rootReducers,
	initialState,
	compose(applyMiddleware(...middleWare),
	),
);

export default store;
