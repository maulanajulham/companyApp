import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#073F64] text-white">
      
      <div className="max-w-7xl mx-auto px-4 py-8"> 
        
        <div className="
          grid 
          grid-cols-1 
          gap-10 
          md:grid-cols-2 
          lg:grid-cols-3 
          lg:gap-20
        ">

          <section className="footer-info ml-10">
            <h3 className='text-xl font-bold mb-3'>Informasi</h3>
            <h2 className='text-xl mb-1'>PT. Diamond Propertindo</h2>
            <div className='flex flex-row item-center gap-3'>
                <i className="ri-map-pin-add-line ri-2x"></i>
                <p className='text-md'>Jl. Ruko Sinpasa Blok B-22 
                    <br/> Summarecon Kec Bekasi Utara
                    <br/> Kota Bekasi - 14743</p>
            </div>
          </section>

          <div className="footer-Menu flex flex-col gap-2 ml-10" aria-label="Footer Navigation">
            <h3 className='text-xl font-bold mb-3'>Menu</h3>
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/services" className="hover:underline">Services</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
          </div>

          <section className="footer-Logo md:col-span-2 lg:col-span-1">
            <p className='text-justify text-md'>PT. Diamond Propertindo is an esteemed property company that upholds the principles of good corporate governance in its operations. With a strong commitment to corporate sustainability.</p>
            <div className='h-20 w-full flex items-center justify-center text-sm rounded gap-10'>
                <a href="https://www.instagram.com/maulanajulham_/" className="ri-instagram-fill ri-2x md:ri-3x"></a>
                <a href="https://x.com/Maulanajulham_" className="ri-twitter-fill ri-2x md:ri-3x"></a>
                <a href="https://www.linkedin.com/in/maulanajulham/" className="ri-linkedin-fill ri-2x md:ri-3x"></a>
            </div>
          </section>
          
        </div>

        <div className="text-center border-t-2 border-white pt-5 text-sm">
            <p>&copy; {new Date().getFullYear()} PT. Diamond Propertindo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;