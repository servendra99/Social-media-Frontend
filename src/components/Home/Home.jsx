import React, { useEffect } from "react";
import "./Home.css";
import User from "../User/User";
import shiva from "../../image/shiva.jpg";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getFollowingPosts } from "../../Actions/User";
import Loader from "../Loader/Loading";
import { Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );

  const { users, loading: usersLoading } = useSelector(
    (state) => state.allUsers
  );

  useEffect(() => {
    console.log("hello");
    dispatch(getFollowingPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  return loading == true || usersLoading == true ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="homeleft">
        {posts && posts.length > 0 ? (
          posts.map((post) => {
            <Post
              key={post._id}
              postId={post._id}
              caption={post.caption}
              postImage={post.image.url}
              likes={post.likes}
              comments={post.comments}
              ownerImage={post.owner.avatar.url}
              ownername={post.owner.name}
              ownerId={post.owner._id}
            />;
          })
        ) : (
          <Typography variants="h6"> No Posts yet</Typography>
        )}
      </div>
      <div className="homeright">
        {users && users.length > 0 ? (
          users.map((user) => (
            <User
              key={user._id}
              userId={user._id}
              name={user.name}
              avatar={user.avatar.url}
            />
          ))
        ) : (
          <Typography>No Users Yet</Typography>
        )}
      </div>
    </div>
  );
};

export default Home;
