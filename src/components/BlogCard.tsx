
import React from 'react';
import { Link } from 'react-router-dom';

export interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  date,
  category,
  image
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden card-hover border border-gray-100 h-full flex flex-col">
      {image && (
        <Link to={`/blog/${id}`} className="block h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      )}
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-2 flex items-center">
          <span className="text-xs font-medium text-gray-500">{date}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-xs font-medium text-primary">{category}</span>
        </div>
        <Link to={`/blog/${id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">{title}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{excerpt}</p>
        <Link 
          to={`/blog/${id}`} 
          className="text-primary font-medium text-sm hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
