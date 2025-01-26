import React from 'react';
import { createRoot } from 'react-dom/client';
import { Knock060 } from './src060_079_react/Knock060.jsx';
import { Knock061 } from './src060_079_react/Knock061.jsx';
import { Knock062 } from './src060_079_react/Knock062.jsx';
import { Knock063 } from './src060_079_react/Knock063.jsx';
import { Knock064 } from './src060_079_react/Knock064.jsx';
import { Knock065 } from './src060_079_react/Knock065.jsx';
import { Knock066 } from './src060_079_react/Knock066.jsx';
import { Knock067 } from './src060_079_react/Knock067.jsx';
import { Knock068 } from './src060_079_react/Knock068.jsx';
import { Knock069 } from './src060_079_react/Knock069.jsx';

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Aid-On JS Training Dev</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl mb-2">Knock060</h2>
          <Knock060 />
        </div>
        <div>
          <h2 className="text-xl mb-2">Knock061</h2>
          <Knock061 />
        </div>
        <div>
          <h2 className="text-xl mb-2">Knock062</h2>
          <Knock062 />
        </div>
        <div>
          <h2 className="text-xl mb-2">Knock063</h2>
          <Knock063 />
        </div>
        <div>
          <h2 className="text-xl mb-2">Knock064</h2>
          <Knock064 />
        </div>
        <div>
          <h2 className="text-xl mb-2">Knock065</h2>
          <Knock065 />
        </div>
        <div>
          <h2 className="text-xl mb-2">Knock066</h2>
          <Knock066 />
        </div>
        <div>
          <h2 className="text-xl mb-2">Knock067</h2>
          <Knock067 />
        </div>
        <div>
          <h2 className="text-xl mb-2">Knock068</h2>
          <Knock068 />
        </div>
        <div>
          <h2 className="text-xl mb-2">Knock069</h2>
          <Knock069 />
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
