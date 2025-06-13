import React, { useEffect } from "react";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Blog = ({ blog }) => {
  const { id, title, author, date, image, content, tags } = blog;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2.3,
        ease: "easeInOut",
      }}
      viewport={{ once: true, amount: 0.05 }}
      className="bg-cwhite shadow-md rounded-2xl overflow-hidden flex flex-col"
    >
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-cdark mb-2">{title}</h2>
        <p className="text-sm text-cdark/70 mb-2">
          By {author} • {new Date(date).toDateString()}
        </p>
        <p className="text-cdark text-sm flex-grow">
          {content.slice(0, 120)}...
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-corange text-white px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <Link
          to={`/blogs/${id}`}
          className="mt-4 inline-block text-sm font-semibold text-corange hover:underline"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
};

export default Blog;
