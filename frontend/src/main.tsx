import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter  } from 'react-router-dom'; // Não estava funcionando pois estava sem essa linha
import './index.css';
import App from './App.tsx';
import 'tailwindcss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
