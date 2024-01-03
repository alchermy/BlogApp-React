import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../Data/blogs";

import "./Detail.css"
function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    // ดึงข้อมูลบทความ

    const result = blogs.find((item) => item.id === parseInt(id));
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
  }, []);
  return (
    <div className="container">
      <h2 className="title">บทความ : {title}</h2>
      <div>
      <img src={image} alt={title} className="blog-image" />
      </div>
      
      <div className="blog-detail">
        <strong>ผู้เขียน {author} </strong>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Detail;
