import Kitap from './Kitap';

const KitapListesi = ({ kitaplar, favoriEkle, favoriler }) => (
  <div>
    {kitaplar.map((kitap) => (
      <Kitap
        key={kitap.id}
        kitap={kitap}
        favoriEkle={favoriEkle}
        favoriMi={favoriler.some((f) => f.id === kitap.id)}
      />
    ))}
  </div>
);

export default KitapListesi;