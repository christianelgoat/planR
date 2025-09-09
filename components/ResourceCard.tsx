
import React from 'react';
import { ResourceCategory } from '../types';

interface ResourceCardProps {
  category: ResourceCategory;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ category }) => {
  return (
    <div className="transform -skew-x-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="transform skew-x-6 p-6">
        <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
                 {category.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
        </div>
        <ul className="space-y-3 text-slate-600">
          {category.items.map((item) => (
            <li key={item.text} className="flex items-start gap-3">
              <span className="text-indigo-500 mt-1">&#9679;</span>
              <div>
                <span className="font-semibold text-slate-700">{item.text}</span>
                {item.subtext && <span className="text-sm text-slate-500 ml-2">({item.subtext})</span>}
                <p className="text-sm text-slate-500">{item.details}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResourceCard;
