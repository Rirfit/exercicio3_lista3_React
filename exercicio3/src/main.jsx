import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Texto from './components/Texto'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Texto visivel = {true}/>
    <Texto/>

  </StrictMode>,
)
