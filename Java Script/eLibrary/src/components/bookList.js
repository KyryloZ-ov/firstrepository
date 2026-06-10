export function renderBooks(container, books) {
  if (!books || books.length === 0) {
    container.innerHTML = '<p>Keine Bücher gefunden.</p>';
    return;
  }

  const html = books.map(book => `
    <article class="book-card">
      <h3>${book.title}</h3>
    </article>
  `).join('');

  container.innerHTML = `
    <div class="books-grid">
      ${html}
    </div>
  `;
}
