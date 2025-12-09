import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'

import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

import 'remixicon/fonts/remixicon.css';

import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto px-4'>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer/>
      </BrowserRouter>
      

      
    </div>
  </StrictMode>,
)
