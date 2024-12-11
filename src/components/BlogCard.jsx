import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-md rounded-lg shadow-lg border border-gray-200 p-4 bg-white">
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
      <div className="mt-4">
        <p className="text-sm text-gray-500">{blog.date_published}</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">{blog.title}</h2>
        <h3 className="text-xl font-semibold text-gray-800 mt-2">{blog.headline}</h3>
        <p className="text-gray-700 mt-2">{blog.description}</p>
      </div>
      <div className="flex flex-wrap mt-4 gap-4">
        {blog.sub_images && blog.sub_images.length > 0 &&
          blog.sub_images.map((image, index) => (
            <img key={index} src={image} alt={`sub-image-${index}`} className="w-1/2 h-32 object-cover rounded-lg" />
          ))
        }
      </div>
    </div>
  );
};

export default BlogCard;
