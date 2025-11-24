let pokemonData = [];

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    pokemonData = data;
  });
document.getElementById('search').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();

  if (searchTerm === '') {
    document.getElementById('pokemon-list').innerHTML = '';
    return;
  }

  const filtered = pokemonData.filter(p =>
    p.name.toLowerCase().includes(searchTerm)
  );
  displayPokemon(filtered);
});

function displayPokemon(pokemons) {
  const container = document.getElementById('pokemon-list');
  container.innerHTML = '';
  pokemons.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${p.name}</strong> - Type: ${p.type.join(', ')} - Évolue en: ${p.evolution}`;
    container.appendChild(div);
  });
}
