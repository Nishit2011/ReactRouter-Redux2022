import React, { useState, useEffect, useContext } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Photos = () => {
  const { photoId, setPhotoId } = useState(0);
  const userVal = useContext(UserContext);
  const navigate = useNavigate();
  const handlerFn = (e) => {
    e.preventDefault();
    setPhotoId(e.target.value);
  };

  useEffect(() => {
    if (userVal.uname.length === 0) navigate("/login");
  }, []);
  return (
    <div>
      <h3>Photos</h3>
      <Search
        placeholder="Enter photoId"
        value={photoId}
        handler={(e) => handlerFn(e)}
        name="photos"
      />
    </div>
  );
};

export default Photos;
