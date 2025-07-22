import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes,Route } from 'react-router'
import Home from './pages/home'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>,
)
