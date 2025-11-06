import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FetchSimpsonsAPI from './pages/FetchSimpsonsAPI'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchSimpsonsAPI />
  </StrictMode>,
)
