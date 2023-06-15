import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import albumsReducer from "../reducers/albumsReducer";

const rootReducer = combineReducers({
  albums: albumsReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
