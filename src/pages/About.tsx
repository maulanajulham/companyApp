import Direksi from "@/assets/direksi.png";
function About() {
  const direksi = [
      { 
          nama: "Slamet Santoso", 
          jabatan: "Direktur Utama (CEO)",
          foto: "./direksi/1.jpg" 
      },
      { 
          nama: "Dewi Puspita", 
          jabatan: "Direktur Keuangan (CFO)",
          foto: "./direksi/2.jpg"
      },
      { 
          nama: "Bambang Wijaya", 
          jabatan: "Direktur Operasional (COO)",
          foto: "./direksi/3.jpg"
      },
      { 
          nama: "Rizky Firmansyah", 
          jabatan: "Direktur Pemasaran",
          foto: "./direksi/4.jpg"
      },
      { 
          nama: "Andi Saputra", 
          jabatan: "Komisaris Utama",
          foto: "./direksi/5.jpg" 
      },
      { 
          nama: "Rina Kartika", 
          jabatan: "Komisaris",
          foto: "./direksi/6.jpg" 
      },
      { 
          nama: "Faisal Rahman", 
          jabatan: "Kepala Legalitas & Perizinan",
          foto: "./direksi/7.jpg" 
      },
      { 
          nama: "Prof. Dr. Haris", 
          jabatan: "Penasihat / Advisor",
          foto: "./direksi/8.jpg" 
      },
  ];
  return (
    <section id="teams" className="About mt-20 mb-20 scroll-mt-20" >
      <div  className="bg-black/90 h-60 flex justify-center items-center">
        <h3 className="font-bold text-5xl text-white">Company Profile</h3>
      </div>
      <div className="mt-30">
        <h3 className="font-bold text-center text-4xl mb-10">PT. Diamond Propertindo</h3>
        <p>Kami adalah Diamond Propertindo, sebuah perusahaan pengembang properti yang didirikan pada tahun 2010 dengan visi untuk membentuk komunitas hunian berkualitas, bukan sekadar membangun rumah. Sejak didirikan, kami telah berkembang dari startup kecil menjadi pemimpin industri yang diakui dalam menyediakan solusi hunian yang inovatif, berkelanjutan, dan berorientasi pada masa depan.</p> <br/>
        <p>Diamond Propertindo adalah perusahaan pengembang properti yang berkembang pesat menjalankan bisnisnya dalam proyek perumahan subsidi maupun komersil yang tersebar di Jabodetabek dan Subang Area. Didirikan pertama kali oleh founder Slamet Santoso di tahun 2004 Diamond Propertindo telah mengakuisisi 18 proyek perumahan di beberapa wilayah Jabodetabek dan Subang area.<br/>
        <br/>
        Sebagai perusahaan yang berkembang pesat Diamond Propertindo terus bertekad memajukan dan meningkatkan kualitas hidup masyarakat melalui produk-produk perumahannya, yang dimana saat ini persaingan developer sangat ketat, akan tetapi Diamond Propertindo tetap unggul dan dipilih konsumen sebagai hunian yang asri dan inovatif.<br/>
        <br/>
        Dengan kombinasi pengetahuan, keterampilan pelaksanaan, personel yang berdedikasi dan komitmen terhadap pelanggan dan pemasok yang terus berkomitmen, Diamond Propertindo dikenal karena kegigihan, keahlian dan kemampuan dalam melaksanakan dan menyelesaikan proyek pengembangan properti di Subang, Serang, dan Bogor.</p>
        <br/>
      </div>
        <div className="gambar-container">
          <img 
                    src={Direksi} 
                    alt="Direksi Perusahaan" 
                    className="w-full p-10" 
                    loading="lazy"
              />
        </div>
        <div className="bg-red-400 p-4 text-white">
          <h3 className="text-xl font-bold p-2 text-center">Nilai Inti Kami</h3>
          <p className="p-2 text-md">Dengan dedikasi yang tak tergoyahkan terhadap nilai-nilai inti ini, kami dengan sepenuh hati berkomitmen untuk memupuk kepercayaan tak tergoyahkan dari para pelanggan dan pemangku kepentingan kami yang berharga.</p>
          <h2 className="bg-[#1F727B] text-xl font-bold p-2">Visi</h2>
          <p className="bg-[#045384] p-2 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repellendus hic eligendi, in distinctio ut placeat cum. Minus quis libero cumque non corrupti voluptatem optio omnis, laudantium, ad, molestiae commodi.</p>
          <h2 className="bg-[#1F727B] text-xl font-bold p-2">Misi</h2>
          <p className="bg-[#045384] p-2 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident maxime rerum, delectus accusamus, id similique voluptate perferendis repellendus placeat incidunt, nulla dolorem. Eveniet molestiae beatae at. Sint harum asperiores enim.</p>
          <h2 className="bg-[#1F727B] text-xl font-bold p-2">Budaya Perusahaan</h2>
          <p className=" bg-[#045384] p-2 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, accusantium cupiditate eius iste beatae voluptate quam cum quas adipisci aspernatur nisi facere. Minima sit deleniti alias quaerat recusandae eos voluptates!</p>
        </div>
        <div className="Direksi mt-20 p-4">
          <h3 className="text-4xl font-bold text-center text-blue-900">BOARD OF DIRECTORS</h3>
          <p className="text-xl text-center mt-4 text-black">Para profesional terbaik di industri kami telah membuktikan kemampuan tim manajemen kami dalam menciptakan nilai. Ini memungkinkan kami untuk memberikan nilai jangka panjang bagi investor dan mitra kami.</p>
          <div className="gambar-direksi mt-20">
    
          {/* Menggunakan Grid untuk tata letak responsif */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              
              {direksi.map((t, index) => (
                  

                  <div key={index} className="flex flex-col items-center bg-white shadow-lg rounded-xl p-4 transition duration-300 hover:shadow-xl hover:scale-[1.02]">
                      
                      <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-blue-500 mb-4">
                          <img 
                              src={t.foto} 
                              alt={`Foto ${t.nama}`} 
                              className="w-full h-full object-cover" 
                              loading="lazy"
                          />
                      </div>
                      

                      <div className="text-center">

                          <p className="text-sm font-extrabold text-gray-900 leading-snug mb-1">
                              {t.nama}
                          </p>
                          
                          <p className="text-xs text-blue-600 uppercase tracking-wider font-medium">
                              {t.jabatan}
                          </p>
                      </div>
                  </div>
                  
              ))}
              
          </div>

      </div>

        </div>
    </section>

  )
}

export default About