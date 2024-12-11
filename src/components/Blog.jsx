import React from 'react';
import blogData from '../assets/blogData';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className="grid grid-cols-2">
            {
                blogData.map((blog, id) => (
                    <BlogCard key={id} blog={blog} />
                ))
            }
        </div>
    </div>
  );
};

export default Blog;
