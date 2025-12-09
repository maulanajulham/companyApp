import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/GLobal.css'
import 'remixicon/fonts/remixicon.css';
import App from './App.tsx'


import Navbar from './components/Navbar.tsx';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer.tsx';

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
