
// Data Berita Perumahan (Diambil dari respons sebelumnya)
const news_perumahan = [
  {
    title: "Sukses Raih Rumah Subsidi: Pengalaman Keluarga Wiraswasta dengan KPR Cepat",
    summary: "Awalnya kami pesimis bisa punya rumah dengan gaji pas-pasan. Tapi tim [Nama Perusahaan] memandu kami mengurus KPR Subsidi dari A sampai Z. Rumahnya berkualitas dan prosesnya sungguh cepat! Impian keluarga kami terwujud.",
    source: "Wawancara Eksklusif dengan Rina & Ahmad (Wiraswasta)",
    published_date: "12 November 2025",
    image_tag: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Rumah Subsidi
  },
  {
    title: "Hunian Terjangkau dengan Cicilan Ringan Jadi Pilihan Utama Pekerja Swasta",
    summary: "Terima kasih [Nama Perusahaan] karena menyediakan rumah dengan cicilan yang sangat terjangkau. Lokasinya strategis dan lingkungannya sudah terbentuk. Kami merasa aman dan nyaman tinggal di sini.",
    source: "Survei Kepuasan Pelanggan PT Persada",
    published_date: "28 Oktober 2025",
    image_tag: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Perumahan pinggiran kota
  },
  {
    title: "Transparansi Biaya dalam Properti: Kunci Kepercayaan Konsumen PNS",
    summary: "Tidak ada biaya tersembunyi, semua transparan. Inilah yang paling kami hargai. Pelayanannya ramah dan sangat membantu kami yang awam soal properti.",
    source: "Ulasan dari Konsumen Denny Kurniawan (PNS)",
    published_date: "05 Desember 2025",
    image_tag: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Transparansi/Bisnis
  },
  {
    title: "Pemerintah Tingkatkan Kuota KPR Subsidi, Bidik 300 Ribu Unit Tahun Depan",
    summary: "Kementerian PKP memastikan peningkatan alokasi Fasilitas Likuiditas Pembiayaan Perumahan (FLPP) tahun anggaran 2026 sebagai upaya mengejar target 3 Juta Rumah. Subsidi bunga tetap 5%.",
    source: "Kementerian Perumahan dan Kawasan Permukiman",
    published_date: "09 Desember 2025",
    image_tag: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Kebijakan/Tujuan
  },
  {
    title: "Moratorium Izin Perumahan di Bandung Raya Dievaluasi: Fokus Mitigasi Bencana",
    summary: "Kebijakan penghentian sementara izin pembangunan perumahan baru di Bandung Raya mulai membuahkan hasil. Pengembang diwajibkan menjamin 10% lahan untuk area resapan air guna mencegah banjir bandang.",
    source: "Pemerintah Provinsi Jawa Barat",
    published_date: "07 Desember 2025",
    image_tag: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Resapan air/Alam
  },
  {
    title: "BTN Targetkan Penyaluran KPR Non-Subsidi untuk Milenial Tumbuh 15%",
    summary: "Bank pelat merah fokus menggarap pasar milenial dengan menawarkan skema KPR dengan tenor panjang dan DP (Down Payment) yang lebih ringan. Pembelian unit apartemen mulai diminati di perkotaan.",
    source: "PT Bank Tabungan Negara (Persero) Tbk",
    published_date: "01 Desember 2025",
    image_tag: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Milenial/Apartemen
  },
  {
    title: "Ancaman Defisit Lahan Sawah: Pengembang Diimbau Hentikan Konversi untuk Hunian",
    summary: "Isu ketahanan pangan mencuat seiring masifnya pembangunan perumahan di lahan sawah produktif. Pemerintah mengeluarkan peringatan keras bagi pengembang yang melanggar Undang-Undang Perlindungan Lahan Pertanian.",
    source: "Kementerian Pertanian dan Tata Ruang",
    published_date: "25 November 2025",
    image_tag: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Sawah dan Properti
  },
  {
    title: "Peluncuran Hunian Berkonsep 'Transit Oriented Development' (TOD) di Cikarang",
    summary: "Pengembang properti merilis klaster baru yang terintegrasi langsung dengan stasiun KRL dan jalur bus, menawarkan solusi mobilitas bagi pekerja komuter di area Jakarta dan sekitarnya.",
    source: "Pengembang Properti X Group",
    published_date: "18 November 2025",
    image_tag: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // TOD/Transportasi
  },
  {
    title: "Tingginya Permintaan Renovasi: Program BSPS Targetkan 200 Ribu Rumah Tidak Layak Huni",
    summary: "Bantuan Stimulan Perumahan Swadaya (BSPS) menjadi fokus utama pemerintah untuk memastikan pemerataan kualitas hunian layak di seluruh Indonesia, khususnya di daerah pedesaan terpencil.",
    source: "Ditjen Perumahan Rakyat",
    published_date: "10 November 2025",
    image_tag: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Renovasi/BSPS
  },
  {
    title: "Izin Bermasalah: Puluhan Proyek Properti Mangkrak Akibat Tumpang Tindih Regulasi",
    summary: "Sejumlah pengembang besar mengeluhkan ketidakpastian regulasi dan lambatnya proses perizinan di tingkat daerah yang menyebabkan proyek senilai triliunan rupiah tertunda. Pemerintah didesak menyederhanakan birokrasi.",
    source: "Asosiasi Pengembang Perumahan dan Permukiman Seluruh Indonesia (APERSI)",
    published_date: "02 November 2025",
    image_tag: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Konstruksi Mangkrak
  },
];

// Komponen Utama
const Blog = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 mt-20 mb-20">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Berita & Info Properti Terbaru
      </h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Melakukan looping (map) pada data berita */}
        {news_perumahan.map((news, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="h-48 w-full overflow-hidden">
                <img 
                    src={news.image_tag} 
                    alt={news.title} 
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
            </div>
            
            <div className="p-6">
              {/* Judul Berita */}
              <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-indigo-600 cursor-pointer">
                {news.title}
              </h2>
              
              {/* Ringkasan Berita */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {news.summary}
              </p>
              
              {/* Info Sumber dan Tanggal */}
              <div className="text-xs text-gray-500 border-t pt-3">
                <p className="font-medium">
                  Sumber: <span className="text-indigo-500">{news.source}</span>
                </p>
                <p className="mt-1">
                  Tanggal Publikasi: <span className="font-semibold">{news.published_date}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Ekspor komponen agar bisa digunakan di aplikasi React Anda
export default Blog;