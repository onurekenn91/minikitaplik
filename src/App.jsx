import React, { useState, useEffect } from 'react';
import AramaKutusu from './components/AramaKutusu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListesi from './components/KitapListesi';
import FavoriPaneli from './components/FavoriPaneli';
import kitaplar from './data/Kitaplar';

const kategoriler = ['Tümü', 'Roman', 'Algoritma', 'İşletim Sistemleri', 'Bilgisayar Mimarisi ve Donanım','Programlama Dilleri ve Derleyiciler'];

const App = () => {
  const [aramaMetni, setAramaMetni] = useState(localStorage.getItem('aramaMetni') || '');
  const [secilenKategori, setSecilenKategori] = useState('Tümü');
  const [favoriler, setFavoriler] = useState(JSON.parse(localStorage.getItem('favoriler')) || []);

  useEffect(() => {
    localStorage.setItem('aramaMetni', aramaMetni);
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [aramaMetni, favoriler]);

  const filtrelenmisKitaplar = kitaplar.filter((kitap) => {
    const kategoriUygun = secilenKategori === 'Tümü' || kitap.kategori === secilenKategori;
    const aramaUygun = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    return kategoriUygun && aramaUygun;
  });

  const favoriEkle = (kitap) => {
    if (!favoriler.find((f) => f.id === kitap.id)) {
      setFavoriler([...favoriler, kitap]);
    }
  };

  const favoriKaldir = (id) => {
    setFavoriler(favoriler.filter((kitap) => kitap.id !== id));
  };

  return (
    <div className="container">
      <h1> Mini Kitaplık</h1>
      <AramaKutusu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
      <KategoriFiltre kategoriler={kategoriler} setSecilenKategori={setSecilenKategori} />
      <KitapListesi kitaplar={filtrelenmisKitaplar} favoriEkle={favoriEkle} favoriler={favoriler} />
      <FavoriPaneli favoriler={favoriler} favoriKaldir={favoriKaldir} aramaMetni={aramaMetni} />
    </div>
  );
};

export default App;