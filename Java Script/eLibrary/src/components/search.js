// search.js

export function renderSearch(container, onSearch) {
  container.innerHTML = `
    <input id="search-input" type="text" placeholder="Suche nach Büchern..." />
  `;

  const input = container.querySelector('#search-input');

  input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const value = input.value.trim();
      onSearch(value);
    }
  });
}
