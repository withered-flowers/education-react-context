import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "../features/albums/album-slice.js";

const store = configureStore({
  reducer: {
    albums: albumReducer,
  }
});

export default store;
