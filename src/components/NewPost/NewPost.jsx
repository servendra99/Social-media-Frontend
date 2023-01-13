import React, { useEffect, useState } from "react";
import "./NewPost.css";
import { Typography, Button } from "@mui/material";
import { createNewPost } from "../../Actions/Post";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { loadUser } from "../../Actions/User";

const NewPost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, message } = useSelector((state) => state.like);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message, alert]);

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(createNewPost(caption, image));
    dispatch(loadUser());
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.onload = () => {
      if (Reader.readyState == 2) {
        setImage(Reader.result);
      }
    };
    Reader.readAsDataURL(file);
  };

  return (
    <div className="newPost">
      <form action="" className="newPostForm" onSubmit={submitHandler}>
        <Typography variant="h3">New Post</Typography>

        {image && <img src={image} alt="post" />}

        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          placeholder="Caption.."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <Button disabled={loading} type="submit">
          {" "}
          Post{" "}
        </Button>
      </form>
    </div>
  );
};

export default NewPost;
