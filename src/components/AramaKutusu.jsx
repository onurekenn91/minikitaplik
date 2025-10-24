const AramaKutusu = ({ aramaMetni, setAramaMetni }) => (
  <input
    type="text"
    placeholder="Başlık veya yazar ara..."
    value={aramaMetni}
    onChange={(e) => setAramaMetni(e.target.value)}
  />
);

export default AramaKutusu;