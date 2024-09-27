import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
      </NextUIProvider>
    </StrictMode>
  </BrowserRouter>
);
