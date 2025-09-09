
import React, { useState, useEffect } from 'react';
import { PHASES_DATA } from './constants';
import { Phase } from './types';
import PhaseRow from './components/PhaseRow';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 font-sans p-4 sm:p-8 flex flex-col items-center justify-center">
      <main className="w-full max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h1 className="text-4xl font-bold text-slate-800 text-center mb-4">Plan de Recursos del Proyecto</h1>
            <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                
            </p>
        </div>

        <div className="space-y-16">
          {PHASES_DATA.map((phase: Phase, index: number) => (
            <div
              key={phase.number}
              className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${150 * (index + 1)}ms` }}
            >
              <PhaseRow phase={phase} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
