import { createRoot } from 'react-dom/client';

import { App } from './app/App.tsx';
import { ErrorBoundary } from './app/providers/ErrorBoundary.tsx';

import './styles/index.css';
/* eslint-disable  @typescript-eslint/no-non-null-assertion */
createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
