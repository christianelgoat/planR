
import React from 'react';
import { Phase } from '../types';
import ResourceCard from './ResourceCard';

interface PhaseRowProps {
  phase: Phase;
}

const PhaseLabel: React.FC<{ phase: Phase }> = ({ phase }) => (
    <div className="relative w-48 h-32 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 transform -skew-x-12 rounded-lg shadow-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-2">
            <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-2 border-2 border-white/50">
                <span className="text-2xl font-bold text-white">{phase.number}</span>
            </div>
            <h2 className="font-bold text-sm leading-tight">{phase.title}</h2>
            <p className="text-xs font-light">{phase.description}</p>
        </div>
    </div>
);


const PhaseRow: React.FC<PhaseRowProps> = ({ phase }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
      <div className="lg:w-1/5 flex justify-center lg:justify-start lg:-mr-12 z-10">
        <PhaseLabel phase={phase} />
      </div>
      <div className="w-full lg:w-4/5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {phase.categories.map((category) => (
          <ResourceCard key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
};

export default PhaseRow;
