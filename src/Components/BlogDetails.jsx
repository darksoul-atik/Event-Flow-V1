import React from "react";
import { useParams, useLoaderData, useNavigate } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useLoaderData();
  const navigate = useNavigate();

  const selectedBlog = blogs.find((blog) => blog.id === parseInt(id));

  if (!selectedBlog) {
    return <div className="text-center py-10 text-cdark">Blog not found.</div>;
  }

  const { title, author, date, image, content, tags } = selectedBlog;

  return (
    <div className="bg-cwhite max-sm:mx-3 md:mx-10 my-10 rounded-2xl text-cdark px-4 py-10 md:px-16 lg:px-32 min-h-screen">
      <div className="max-w-4xl py-10 mx-auto">
        <img
          src={image}
          alt={title}
          className="w-full lg:h-[500px] lg:mb-10 h-64 object-cover rounded-2xl shadow-lg mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-cdark/60 mb-6">
          By <span className="font-medium text-cdark">{author}</span> •{" "}
          {new Date(date).toDateString()}
        </p>
        <div className="prose prose-lg max-w-none text-cdark">
          {content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-corange text-white text-xs font-medium shadow-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-9">
          <button
            onClick={() => {
              navigate("/blogs");
            }}
            className="btn rounded-2xl bg-black text-corange "
          >
            Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
