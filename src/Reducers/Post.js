import { createReducer } from "@reduxjs/toolkit";
const intitialState = {};
export const likeReducer = createReducer(
  {},
  {
    likeRequest: (state) => {
      state.loading = true;
    },

    likeSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },

    likeFailure: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    clearErrors: (state, action) => {
      state.error = null;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
  }
);
