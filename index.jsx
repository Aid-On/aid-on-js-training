import React from 'react';
import { createRoot } from 'react-dom/client';
import { Knock60 } from './src060_079_react/Knock60.jsx';

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Aid-On JS Training Dev</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl mb-2">Knock60 (will be Knock060)</h2>
          <Knock60 />
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
