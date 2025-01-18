import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "Fetch Status",
  initialState: { fetchDone: false, currentlyFetching: false },
  reducers: {
    markFetchDone: (state, action) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state, action) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state, action) => {
      state.currentlyFetching = false;
    },
  },
});

export const { markFetchDone, markFetchingStarted, markFetchingFinished } =
  fetchStatusSlice.actions;

export default fetchStatusSlice;
