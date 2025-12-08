import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from "@/assets/slider/1.jpg";
import Carousel2 from "@/assets/slider/2.jpg";
import Carousel3 from "@/assets/slider/3.jpg";
import Team from "@/assets/teams.png";
import { Link } from 'react-router-dom';

function Home() {

  const settings = {
    dots: true, // Menampilkan titik navigasi
    infinite: true, // Loop tak terbatas
    speed: 500, // Kecepatan transisi slide (ms)
    slidesToShow: 1, // Jumlah slide yang terlihat
    slidesToScroll: 1, // Jumlah slide yang digeser
    autoplay: true, // Otomatis berputar
    autoplaySpeed: 3000 // Interval waktu putar (ms)
  };

  const testimonials = [
    { quote: "Awalnya kami pesimis bisa punya rumah dengan gaji pas-pasan. Tapi tim [Nama Perusahaan] memandu kami mengurus KPR Subsidi dari A sampai Z. Rumahnya berkualitas dan prosesnya sungguh cepat! Impian keluarga kami terwujud.!", author: "Rina & Ahmad, Wiraswasta" },
    { quote: "Terima kasih [Nama Perusahaan] karena menyediakan rumah dengan cicilan yang sangat terjangkau. Lokasinya strategis dan lingkungannya sudah terbentuk. Kami merasa aman dan nyaman tinggal di sini.", author: "Ibu Siti, PT Persada" },
    { quote: "Tidak ada biaya tersembunyi, semua transparan. Inilah yang paling kami hargai. Pelayanannya ramah dan sangat membantu kami yang awam soal properti..", author: "Denny Kurniawan, PNS" },
  ];

  const products = [
    { name: "Perumahan Subsidi", description: "Kami berkomitmen membantu masyarakat mendapatkan hunian layak dengan harga terjangkau. Kami menyediakan rumah bersubsidi.berkualitas yang didukung penuh oleh program KPR Fasilitas Likuiditas Pembiayaan Perumahan (FLPP).", link: "/services" },
    { name: "Properti Komersial", description: "Membangun properti komersial premium, termasuk kompleks ruko, perkantoran, dan klaster eksklusif. Kami fokus pada lokasi strategis dan desain yang menjamin nilai investasi tinggi.", link: "/services" },
  ];

  return (
    <main>
      <div className="slider-container mt-20">
              <Slider {...settings}>
          <div className="p-4 flex items-center justify-center">
            <img 
                  src={Carousel1} 
                  alt="Nama Perusahaan Logo" 
                  className="" 
                  loading="lazy"
            />
          </div>
          <div className="p-4 flex items-center justify-center">
            <img 
                  src={Carousel2} 
                  alt="Nama Perusahaan Logo" 
                  className="" 
                  loading="lazy"
            />
          </div>
          <div className="p-4 flex items-center justify-center">
            <img 
                  src={Carousel3} 
                  alt="Nama Perusahaan Logo" 
                  className="" 
                  loading="lazy"
            />
          </div>
        </Slider>
      </div>
      <section className="py-20 bg-white mt-30" aria-labelledby="company-overview-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 id="company-overview-heading" className=" text-2xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                    Company Profile
                </h2>
                <div className="md:flex md:space-x-12">
                    <div className="md:w-1/2">
                        <p className="mt-4 text-md md:text-lg text-gray-600 text-justify">
                            Kami adalah Diamond Propertindo, sebuah perusahaan pengembang properti yang didirikan pada tahun 2010 dengan visi untuk membentuk komunitas hunian berkualitas, bukan sekadar membangun rumah.

                            Sejak didirikan, kami telah berkembang dari startup kecil menjadi pemimpin industri yang diakui dalam menyediakan solusi hunian yang inovatif, berkelanjutan, dan berorientasi pada masa depan.
                        </p>
                        <Link to="/about" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                            Pelajari Lebih Lanjut Tentang Tim Kami &rarr;
                        </Link>
                    </div>
                   
                    <div className="md:w-1/2 mt-8 md:mt-0 bg-gray-200 rounded-lg shadow-lg">
                        <img 
                              src={Team} 
                              alt="Team Perusahaan." 
                              className=" rounded-lg" 
                              loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-[#073F64]" aria-labelledby="products-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 id="products-heading" className="text-2xl md:text-5xl font-bold text-white text-center mb-12">
                    Layanan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-md md:text-xl font-semibold mb-3 text-blue-600">{product.name}</h3>
                            <p className="text-sm md:text-md text-gray-600 mb-4">{product.description}</p>
                            <Link to={product.link} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Lihat Detail &rarr;
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

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

    </main>
  );
}

export default Home