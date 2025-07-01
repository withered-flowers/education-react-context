import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import albumsReducer from "../reducers/albumsReducer";

const rootReducer = combineReducers({
	albums: albumsReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
