const FavoriButonu = ({ kitap, favoriEkle, favoriMi }) => (
  <button onClick={() => favoriEkle(kitap)}>
    {favoriMi ? '★ Favori' : 'Favori Ekle'}
  </button>
);

export default FavoriButonu;