import FavoriButonu from './FavoriButonu';

const Kitap = ({ kitap, favoriEkle, favoriMi }) => (
  <div className="kitap">
    <div>
      <strong>{kitap.baslik}</strong> - {kitap.yazar}
    </div>
    <FavoriButonu kitap={kitap} favoriEkle={favoriEkle} favoriMi={favoriMi} />
  </div>
);

export default Kitap;