import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { endPoints } from "../../utils";
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {
    getMovies: (state) => {
      state.loading = true;
    },
    setMoviesSuccess: (state, { payload }) => {
      console.log("payload", payload);
      state.data = payload.data;
      state.loading = false;
    },
    setMoviesFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getMovies, setMoviesSuccess, setMoviesFailure } =
  moviesSlice.actions;

export function getMoviesAsync() {
  return async (dispatch) => {
    dispatch(getMovies());
    try {
      const response = await axios.get(endPoints.getMovies);
      dispatch(setMoviesSuccess({ data: response.data.results }));
    } catch (error) {
      dispatch(setMoviesFailure());
    }
  };
}

export function searchMoviesAsync({ searchTerm }) {
  return async (dispatch) => {
    dispatch(getMovies());

    try {
      const response = await axios.get(endPoints.searchMovies(searchTerm));
      dispatch(setMoviesSuccess({ data: response.data.results }));
    } catch (error) {
      dispatch(setMoviesFailure());
    }
  };
}

export default moviesSlice.reducer;
