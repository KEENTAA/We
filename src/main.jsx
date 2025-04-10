import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Importa BrowserRouter
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/We"> {/* 2. Envuelve App con BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
)