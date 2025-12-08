import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from "@/assets/logo.png";

 const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    
  return (
        <header className={`bg-white h-20 flex justify-between items-center text-black
        text-xs w-full  fixed left-1/2 -translate-x-1/2 z-40
        ${active ? "top-0 opacity-100" : "-top-0"}
        `}>
          
            <Link to="/" className="logo block"> 
                <img 
                src={Logo} 
                alt="Nama Perusahaan Logo" 
                className="w-15 ml-5" 
                loading="lazy"
                />
            </Link>
            
            <nav className="flex flex-row gap-4 mr-4 text-[10px] md:text-lg" aria-label="Main Navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/login">Login</Link>
            </nav>
            
        </header>
  )
}

export default Navbar