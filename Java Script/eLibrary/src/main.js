import { renderHeader } from './components/header.js';
import { renderSearch } from './components/search.js';
import { renderBooks } from './components/bookList.js';
import { renderPagination } from './components/pagination.js';
import { fetchBooks, searchBooks } from './api.js';
import { state } from './state.js';

const headerEl = document.getElementById('header');
const searchEl = document.getElementById('search');
const booksEl = document.getElementById('books');
const paginationEl = document.getElementById('pagination');

function setPaginationVisible(visible) {
  if (visible) paginationEl.classList.remove('hidden');
  else paginationEl.classList.add('hidden');
}

function showLoading() {
  booksEl.innerHTML = `<p>Laden...</p>`;
}

function loadPage(page = 1) {
  state.isSearchMode = false;
  state.currentPage = page;
  state.isLoading = true;

  setPaginationVisible(true);
  showLoading();

  fetchBooks(page)

    .then(data => {
      state.totalPages = Math.ceil(data.count / 32);
      state.isLoading = false;

      renderBooks(booksEl, data.results);

      renderPagination(
        paginationEl,
        state.currentPage,
        state.totalPages,
        () => loadPage(state.currentPage - 1),
        () => loadPage(state.currentPage + 1)
      );
    })
    .catch(err => {
      state.isLoading = false;
      booksEl.innerHTML = `<p>Fehler beim Laden: ${err.message}</p>`;

    });
}

function performSearch(query) {
  if (!query) {
    loadPage(1);
    setPaginationVisible(false);
    return;
  }

  state.isSearchMode = true;
  state.isLoading = true;

  setPaginationVisible(false);
  showLoading();

  searchBooks(query)
    .then(data => {
      state.isLoading = false;

      renderBooks(booksEl, data.results);

      if (!data.results || data.results.length === 0) {
        booksEl.innerHTML = '<p>Keine Bücher gefunden.</p>';
      }
    })
    .catch(err => {
      state.isLoading = false;
      booksEl.innerHTML = `<p>Fehler bei der Suche: ${err.message}</p>`;
    });
}

renderHeader(headerEl);
renderSearch(searchEl, performSearch);
loadPage(1);
