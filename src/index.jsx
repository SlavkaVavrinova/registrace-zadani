import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Registration from './components/Registration';

import './style.css';

const App = () => {
  return (
    <div className="container">
      <Registration />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
