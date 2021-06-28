import React, { useEffect, useState } from "react";

const PopularPost = () => {
  const [popularPost, setPopularPost] = useState();
  useEffect(() => {
    fetch("https://blogdi.pythonanywhere.com/api/blog/posts/popular/")
      .then((response) => response.json())
      .then((data) => {
        setPopularPost(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      {popularPost?.map((data) => {
        return (
          <div>
            <img
              src={`https://blogdi.pythonanywhere.com/media/${data.author__profile_picture}`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default PopularPost;
