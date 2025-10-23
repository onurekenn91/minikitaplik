const KategoriFiltre = ({ kategoriler, setSecilenKategori }) => (
  <select onChange={(e) => setSecilenKategori(e.target.value)}>
    {kategoriler.map((kat) => (
      <option key={kat} value={kat}>{kat}</option>
    ))}
  </select>
);

export default KategoriFiltre;