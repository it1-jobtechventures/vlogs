import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <>
        <div className=" max-w-md  rounded-lg shadow-lg border border-gray-200 p-4 bg-gray-100">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg border" />
            <div className="mt-4">
                <h2 className="text-2xl font-bold text-gray-900 mt-2">{blog.title}</h2>
            </div>
        </div>
    </>
  );
};

export default BlogCard;
