
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink
}) => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            {subtitle}
          </p>
          <Link
            to={ctaLink}
            className="btn-primary shadow-md"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
