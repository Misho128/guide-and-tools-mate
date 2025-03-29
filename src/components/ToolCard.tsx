
import React from 'react';
import { Link } from 'react-router-dom';

export interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  type: 'free' | 'paid' | 'affiliate';
  category: string;
  ctaText: string;
  image?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  id,
  name,
  description,
  type,
  category,
  ctaText,
  image
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden card-hover border border-gray-100">
      {image && (
        <div className="h-48 bg-gray-100 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <span className={`tag ${type === 'free' ? 'tag-free' : type === 'paid' ? 'tag-paid' : 'tag-affiliate'}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </div>
        <span className="text-xs font-medium text-gray-500 mb-3 block">{category}</span>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <Link 
          to={`/tools/${id}`} 
          className="btn-primary w-full text-center"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default ToolCard;
