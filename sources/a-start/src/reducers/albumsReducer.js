import {
  ALBUMS_FETCH_ERROR,
  ALBUMS_FETCH_PENDING,
  ALBUMS_FETCH_SUCCESS,
} from "../actions/actionType";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  albums: [],
};

const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALBUMS_FETCH_PENDING:
      return {
        ...initialState,
        isLoading: true,
      };

    case ALBUMS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        albums: action.payload,
      };

    case ALBUMS_FETCH_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default albumsReducer;
