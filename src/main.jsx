import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route index></Route>
  </Routes>
  </BrowserRouter>,
)
