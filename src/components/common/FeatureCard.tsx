import React from 'react';
import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  icon: ReactNode; // To support any icon or React component
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-center shadow-md p-4 border rounded-lg">
      <div className="mb-4">
        <div className="text-4xl">{icon}</div>
      </div>
      <h3 className="mb-2 font-bold text-xl">{title}</h3>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
