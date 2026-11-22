import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/overlayStyles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
