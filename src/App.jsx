import React, { useState, useEffect } from 'react';
import AramaKutusu from './components/AramaKutusu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListesi from './components/KitapListesi';
import FavoriPaneli from './components/FavoriPaneli';
import kitaplar from './data/Kitaplar';

const kategoriler = ['Tümü', 'Roman', 'Algoritma', 'İşletim Sistemleri', 'Bilgisayar Mimarisi ve Donanım','Programlama Dilleri ve Derleyiciler'];

const App = () => {
  const [aramaMetni, setAramaMetni] = useState(
    localStorage.getItem('aramaMetni') || ''
  );
  const [secilenKategori, setSecilenKategori] = useState('Tümü');
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem('favoriler')) || []
  );

  useEffect(() => {
    localStorage.setItem('aramaMetni', aramaMetni);
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [aramaMetni, favoriler]);

  const filtrelenmisKitaplar = kitaplar.filter((kitap) => {
    const kategoriUygun =
      secilenKategori === 'Tümü' || kitap.kategori === secilenKategori;
    const aramaUygun =
      kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
    return kategoriUygun && aramaUygun;
  });

  const favoriEkleKaldir = (kitap) => {
    const favoriMi = favoriler.find((f) => f.id === kitap.id);

    if (favoriMi) {
      setFavoriler(favoriler.filter((f) => f.id !== kitap.id));
    } else {
      setFavoriler([...favoriler, kitap]);
    }
  };

  return (
    <div className="container">
      <h1>Mini Kitaplık</h1>

      <div className="arama-container">
        <AramaKutusu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
        <KategoriFiltre
          kategoriler={kategoriler}
          setSecilenKategori={setSecilenKategori}
        />
      </div>

      <div className="icerik-container">
        <div className="sol-panel">
          <KitapListesi
            kitaplar={filtrelenmisKitaplar}
            favoriEkleKaldir={favoriEkleKaldir}
            favoriler={favoriler}
          />
        </div>

        <div className="sag-panel">
          <FavoriPaneli
            favoriler={favoriler}
            favoriKaldir={favoriEkleKaldir}
          />
        </div>
      </div>
    </div>
  );
};

export default App;