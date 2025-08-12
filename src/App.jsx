import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Album Kenangan</h1> 
      </header>

      <main className="cards">
        <div className="card">
          <img src="/Foto masa kecill.jpg" alt="Masa Kecil" />
          <h2>Masa Kecil Yang Abadi Dan Masih Bermakna</h2>
          <p>
           Foto ini diambil saat aku masih kecil bersama orang tua. Momen sederhana namun penuh kebahagiaan tertawa, bermain, dan merasakan kasih sayang yang tulus tanpa syarat
           setiap detik masa kecil adalah kenangan berharga yang membentuk siapa aku hari ini. Kehangatan keluarga dan canda tawa mengisi hari-hari yang tak terlupakan, menjadikan masa kecilku abadi dalam hati selamanya.
          </p>

        </div>
      <div className="card">
          <img src="/Tiup Lilin Penuh Ceria.jpg" alt="Tiup Lilin"/>
          <h2>Tiup Lilin Penuh Ceria Dan Bermakna</h2>
          <p>
          Tiup lilin sambil tersenyum polos, tak sabar memotong kue dan berebut hadiah
          Masa kecil yang penuh tawa, keceriaan, dan cinta sederhana dari orang-orang terdekat. Setiap nyala lilin yang padam membawa doa-doa tulus, harapan indah, dan kenangan manis yang akan selalu melekat di hati. 
          Momen sederhana yang terasa istimewa tetapi kebahagiaan sejati tak hanya tentang momen yang sempurna</p>
        </div>
        <div className="card">
          <img src="/Dokter Kecil Pertama.jpg" alt="Dokter Kecil" />
           <h2>Pengalaman Pertama Menjadi Dokter Kecil</h2>
           <p>
         Hari ini menjadi salah satu momen yang tak terlupakan. Untuk pertama kalinya,
          aku dan teman-teman mengenakan seragam dokter kecil dan belajar merawat orang lain.
      Rasanya bangga bisa memegang peran penting, meski masih kecil, namun penuh kepedulian
      dan rasa tanggung jawab. Bersama guru tercinta,Kenangan ini akan selalu hidup di dalam hati. </p>
    </div>
     <div className="card">
          <img src="/Pengalaman Pertama di Dunia Pramuka.jpg" alt="Pramuka" />
           <h2>Pengalaman Pertama di Dunia Pramuka</h2>
           <p>Hari ini jadi momen yang nggak akan terlupakan. Untuk pertama kalinya kami merasakan serunya dunia Pramuka—mulai dari baris-berbaris, belajar tali-temali, sampai kerja sama membangun tenda. 
            Capek sih, tapi semua terbayar sama tawa, cerita, dan persahabatan baru yang kami dapatkan. Pramuka itu bukan cuma kegiatan, tapi pengalaman hidup yang penuh warna </p>
      </div>
      </main>

      <footer>
        <p>Keluarga adalah rumah pertama, dan cinta mereka adalah kenangan terindah. Love Family!</p>
      </footer>
    </div>
  );
}

export default App;
