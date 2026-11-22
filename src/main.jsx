import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/base.css'
import './styles/components.css'
import './styles/animations.css'
import './styles/responsive.css'
import './styles/overlayStyles.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
