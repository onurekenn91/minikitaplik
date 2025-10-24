const FavoriButonu = ({ kitap, favoriEkleKaldir, favoriMi }) => {
  const butonSinifi = favoriMi
    ? 'favori-butonu favori'
    : 'favori-butonu ekle';

  return (
    <button className={butonSinifi} onClick={() => favoriEkleKaldir(kitap)}>
      {favoriMi ? '★ Favoride' : '☆ Favori Ekle'}
    </button>
  );
};

export default FavoriButonu;