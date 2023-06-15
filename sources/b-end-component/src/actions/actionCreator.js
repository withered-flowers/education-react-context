import {
  ALBUMS_FETCH_PENDING,
  ALBUMS_FETCH_SUCCESS,
  ALBUMS_FETCH_ERROR,
} from "./actionType";

export const albumsFetchPending = () => ({
  type: ALBUMS_FETCH_PENDING,
});

export const albumsFetchSuccess = (albums) => ({
  type: ALBUMS_FETCH_SUCCESS,
  payload: albums,
});

export const albumsFetchError = (errorMessage) => ({
  type: ALBUMS_FETCH_ERROR,
  payload: errorMessage,
});

export const fetchAlbums = () => async (dispatch) => {
  try {
    dispatch(albumsFetchPending());

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();

    if (!response.ok) {
      throw new Error(albums.message ?? "Something wicked happened");
    }

    dispatch(albumsFetchSuccess(albums));
  } catch (error) {
    dispatch(albumsFetchError(error.message));
  }
};
