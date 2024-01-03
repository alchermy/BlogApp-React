import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// Data Blog
import blogs from "../Data/blogs";

// Css
import "./Blogs.css";


function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog, setFilterBlog] = useState([]);

  useEffect(() => {
    const result = blogs.filter((item) => item.title.includes(search));
    setFilterBlog(result);
  }, [search]);

  return (
    <div className="blogs-container">
      <h2 className="title">บทความทั้งหมด</h2>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="ค้นหาบทความ"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <article>
        {filterBlog.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id}>
            <div className="card">
              <h2>{item.title}</h2>
              <p>{item.content.substring(0, 300)}</p>

            </div>
          </Link>
        ))}
      </article>
    </div>
  );
}

export default Blogs;
