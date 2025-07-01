import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  albums: [],
}

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    fetchAlbumsPending: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
      state.albums = [];
    },
    fetchAlbumsSuccess: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = null;
      state.albums = action.payload;
    },
    fetchAlbumsError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
      state.albums = [];
    }
  }
});

export const {
  fetchAlbumsPending,
  fetchAlbumsSuccess,
  fetchAlbumsError
} = albumSlice.actions;

export const fetchAlbums = () => async (dispatch) => {
  try {
    dispatch(fetchAlbumsPending());

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();

    if (!response.ok) {
      throw new Error(albums.message ?? "Something wicked happened");
    }

    dispatch(fetchAlbumsSuccess(albums));
  } catch (error) {
    dispatch(fetchAlbumsError(error.message));
  }
};

export default albumSlice.reducer;
