import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Perum1 from "@/assets/perumahan/agung-city.jpg";
import Perum2 from "@/assets/perumahan/gunung-sari.webp";
import Perum4 from "@/assets/perumahan/sukamahi-damai.jpeg";

function Services() {
  const settings = {
    dots: true, // Menampilkan titik navigasi
    infinite: true, // Loop tak terbatas
    speed: 500, // Kecepatan transisi slide (ms)
    slidesToShow: 1, // Jumlah slide yang terlihat
    slidesToScroll: 1, // Jumlah slide yang digeser
    autoplay: true, // Otomatis berputar
    autoplaySpeed: 3000 // Interval waktu putar (ms)
  };


const propertyData = {
  name: "Perum Gunung Sari",
  imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganti dengan 
  location: "Jl. Harmoni Utama No. 45, Dekat Tol JORR",
  price: "Rp 750.000.000",
  };
const propertyData1 = {
  name: "Agung City Land",
  imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Contoh URL gambar apartemen
  location: "Karawang, Jawa Barat",
  price: "Rp 1.500.000.000",
};

const propertyData2 = {
  name: "Sukamahi Damai",
  imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Contoh URL gambar villa
  location: "Bekasi, Jawa Barat",
  price: "Rp 200.000.000",
};

  const testimonials = [
    { quote: "Awalnya kami pesimis bisa punya rumah dengan gaji pas-pasan. Tapi tim [Nama Perusahaan] memandu kami mengurus KPR Subsidi dari A sampai Z. Rumahnya berkualitas dan prosesnya sungguh cepat! Impian keluarga kami terwujud.!", author: "Rina & Ahmad, Wiraswasta" },
    { quote: "Terima kasih [Nama Perusahaan] karena menyediakan rumah dengan cicilan yang sangat terjangkau. Lokasinya strategis dan lingkungannya sudah terbentuk. Kami merasa aman dan nyaman tinggal di sini.", author: "Ibu Siti, PT Persada" },
    { quote: "Tidak ada biaya tersembunyi, semua transparan. Inilah yang paling kami hargai. Pelayanannya ramah dan sangat membantu kami yang awam soal properti..", author: "Denny Kurniawan, PNS" },
  ];


  
  return (
    <section>
          <div className="slider-container mt-20 mb-40">
              <Slider {...settings}>
                <div className="p-20 flex items-center justify-center">
                  <img 
                        src={Perum1} 
                        alt="Agung City" 
                        className="" 
                        loading="lazy"
                  />
                  <h3 className='text-4xl font-bold text-black mt-4 text-center'>Perumahan Agung City</h3>
                </div>
                <div className="p-20 flex items-center justify-center">
                  <img 
                        src={Perum2} 
                        alt="Gunung Sari" 
                        className="" 
                        loading="lazy"
                  />
                  <h3 className='text-4xl font-bold text-black mt-4 text-center'>Perumahan Gunung Sari</h3>
                </div>
                <div className="p-20 flex items-center justify-center">
                  <img 
                        src={Perum4} 
                        alt="Sukamahi Damai" 
                        className="" 
                        loading="lazy"
                  />
                  <h3 className='text-4xl font-bold text-black mt-4 text-center'>Perumahan Sukamahi Damai</h3>
                </div>
        </Slider>
      </div>

    {/* Iklan Rumah */}
    {/* 1 */}
      <div className='flex flex-col xl:flex-row justify-center mb-10'>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 mb-10">
                <div className="relative h-48 sm:h-64">
                  <img 
                    className="w-full h-full object-cover" 
                    src={propertyData.imageUrl} 
                    alt={propertyData.name} 
                  />
                  <div className="absolute top-0 right-0 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-bl-lg">
                    DIJUAL
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {propertyData.name}
                  </h2>
                  
                  <p className="text-3xl font-extrabold text-indigo-600 mb-4">
                    {propertyData.price}
                  </p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg 
                      className="w-5 h-5 mr-2 text-red-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-sm">{propertyData.location}</span>
                  </div>
                  <a href="https://wa.me/6281297308567?text=Boleh%20bertanya%20tentang%20Perumahan%3F%20" className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"> Hubungi
                  </a>
              </div>

              {/* 2 */}
            </div>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 mb-10">
            
                <div className="relative h-48 sm:h-64">
                  <img 
                    className="w-full h-full object-cover" 
                    src={propertyData1.imageUrl} 
                    alt={propertyData1.name} 
                  />
                  <div className="absolute top-0 right-0 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-bl-lg">
                    DIJUAL
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {propertyData1.name}
                  </h2>
                  
                  <p className="text-3xl font-extrabold text-indigo-600 mb-4">
                    {propertyData1.price}
                  </p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg 
                      className="w-5 h-5 mr-2 text-red-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-sm">{propertyData1.location}</span>
                  </div>
                  <a href="https://wa.me/6281297308567?text=Boleh%20bertanya%20tentang%20Perumahan%3F%20" className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"> Hubungi
                  </a>
              </div>
            </div>

            {/* 3 */}
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300 mb-10">
            
                <div className="relative h-48 sm:h-64">
                  <img 
                    className="w-full h-full object-cover" 
                    src={propertyData2.imageUrl} 
                    alt={propertyData2.name} 
                  />
                  <div className="absolute top-0 right-0 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-bl-lg">
                    DIJUAL
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {propertyData2.name}
                  </h2>
                  
                  <p className="text-3xl font-extrabold text-indigo-600 mb-4">
                    {propertyData2.price}
                  </p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg 
                      className="w-5 h-5 mr-2 text-red-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-sm">{propertyData2.location}</span>
                  </div>
                  <a href="https://wa.me/6281297308567?text=Boleh%20bertanya%20tentang%20Perumahan%3F%20" className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"> Hubungi
                  </a>
              </div>
            </div>
      </div>
      <div>
        <section className="py-20 bg-[#073F64] mb-20" aria-labelledby="testimonials-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 id="testimonials-heading" className="text-2xl md:text-5xl font-bold text-white mb-12">
                    Tentang kami dari mereka
                </h2>
                <div className="space-y-10">
                    {testimonials.map((t, index) => (
                        <blockquote key={index} className="italic text-xl text-white border-l-4 border-blue-500 pl-4 text-[14px] md:text-[18px]">
                            "{t.quote}"
                            <footer className="mt-4 text-white not-italic font-semibold">
                                - {t.author}
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
      </div>
    </section>
  )
}

export default Services