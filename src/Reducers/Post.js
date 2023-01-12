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
    addCommentRequest: (state) => {
      state.loading = true;
    },
    addCommentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addCommentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteCommentRequest: (state) => {
      state.loading = true;
    },
    deleteCommentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCommentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
