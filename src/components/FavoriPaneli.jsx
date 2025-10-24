const FavoriPaneli = ({ favoriler, favoriKaldir }) => (
  <div className="favori-paneli">
    <h3>Favoriler ({favoriler.length})</h3>

    <ul>
      {favoriler.map((kitap) => (
        <li key={kitap.id}>
          <span>{kitap.baslik}</span>
          <button onClick={() => favoriKaldir(kitap)}>Kaldır</button>
        </li>
      ))}
    </ul>
  </div>
);

export default FavoriPaneli;