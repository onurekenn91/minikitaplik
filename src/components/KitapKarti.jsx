import FavoriButonu from './FavoriButonu';

const KitapKarti = ({ kitap, favoriEkleKaldir, favoriMi }) => {
  const { baslik, yazar, kategori } = kitap;

  return (
    <div className="kitap">
      <div className="kitap-bilgi">
        <h3>{baslik}</h3>
        <p>
          {yazar} • {kategori}
        </p>
      </div>

      <FavoriButonu
        kitap={kitap}
        favoriEkleKaldir={favoriEkleKaldir}
        favoriMi={favoriMi}
      />
    </div>
  );
};

export default KitapKarti; 