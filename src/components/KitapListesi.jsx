import KitapKarti from './KitapKarti';

const KitapListesi = ({ kitaplar, favoriEkleKaldir, favoriler }) => (
  <>
    {kitaplar.map((kitap) => (
      <KitapKarti
        key={kitap.id}
        kitap={kitap}
        favoriEkleKaldir={favoriEkleKaldir}
        favoriMi={favoriler.some((f) => f.id === kitap.id)}
      />
    ))}
  </>
);

export default KitapListesi;