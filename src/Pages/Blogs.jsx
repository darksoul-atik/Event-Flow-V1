import React from "react";
import { useLoaderData } from "react-router";
import Blog from "../Components/Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="py-10 lg:px-10 md:px-5 max-sm:px-2 bg-cwhite/10 rounded-2xl my-10 ">
        <h1 className="font-bold text-xl lg:text-3xl text-cwhite text-center mb-5">Stories from our Clients</h1>
      <div className="max-sm:grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3  gap-5">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
