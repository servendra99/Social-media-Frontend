import { configureStore } from "@reduxjs/toolkit";
import { likeReducer } from "./Reducers/Post";
import {
  allUsersReducer,
  postofFollowingReducer,
  userReducer,
} from "./Reducers/User";

const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postofFollowingReducer,
    allUsers: allUsersReducer,
    like: likeReducer,
  },
});
export default store;
