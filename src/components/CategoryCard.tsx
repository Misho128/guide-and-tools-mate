
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  icon,
  description,
  link,
  color
}) => {
  return (
    <Link 
      to={link}
      className="bg-white rounded-xl shadow-sm overflow-hidden card-hover border border-gray-100 p-6 flex flex-col h-full"
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
    </Link>
  );
};

export default CategoryCard;
