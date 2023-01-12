import React from "react";
import "./Post.css";
import {
  MoreVert,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  DeleteOutline,
  Chat,
  TrendingUpRounded,
} from "@mui/icons-material";
import { Avatar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { likePost } from "../../Actions/Post";

const Post = ({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  ownerImage,
  ownername,
  ownerId,
  isDelete = false,
  isAccount = false,
}) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
    dispatch(likePost(postId));
  };

  return (
    <div className="post">
      <div className="postHeader">
        {isAccount && (
          <Button>
            <MoreVert />
          </Button>
        )}
      </div>
      <img src={postImage} alt="Post" />
      <div className="postDetails">
        <Avatar
          src={ownerImage}
          alt="User"
          sx={{ height: "3vmax", width: "3vmax" }}
        />
        <Link to={`/user/${ownerId}`}>
          <Typography fontWeight={700}> {ownername}</Typography>
        </Link>
        <Typography
          fontWeight={100}
          color="rgba(0,0,0,0.582)"
          style={{ alignSelf: "center" }}
        >
          {caption}
        </Typography>
      </div>

      <button
        style={{
          background: "white",
          border: "none",
          cursor: "pointer",
          margin: "1vmax 2vmax",
        }}
      >
        <Typography>5 Likes</Typography>
      </button>

      <div className="postFooter">
        <Button onClick={handleLike}>
          {liked ? <Favorite style={{ color: "red" }} /> : <FavoriteBorder />}
        </Button>
        <Button>
          {" "}
          <ChatBubbleOutline />
        </Button>

        {isDelete && (
          <Button>
            <DeleteOutline />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Post;
