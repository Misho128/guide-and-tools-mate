
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-base md:text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
