const FavoriPaneli = ({ favoriler, favoriKaldir, aramaMetni }) => (
  <div className="favori-paneli">
    <h3>⭐ Favoriler</h3>
    <p>Son Arama: <em>{aramaMetni}</em></p>
    {favoriler.map((kitap) => (
      <div key={kitap.id}>
        {kitap.baslik}
        <button onClick={() => favoriKaldir(kitap.id)}>Kaldır</button>
      </div>
    ))}
  </div>
);

export default FavoriPaneli;