const AramaKutusu = ({ aramaMetni, setAramaMetni }) => (
  <input
    type="text"
    placeholder="Kitap ara..."
    value={aramaMetni}
    onChange={(e) => setAramaMetni(e.target.value)}
  />
);

export default AramaKutusu;