import React from 'react';
import { createRoot } from 'react-dom/client';
import StaffPanel from './page';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StaffPanel />
  </React.StrictMode>,
);
