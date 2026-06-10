// api.js

export function fetchBooks(page = 1) {
  return fetch(`https://gutendex.com/books?page=${page}`)
    .then(res => res.json());
}

export function searchBooks(query) {
  return fetch(`https://gutendex.com/books?search=${query}`)
    .then(res => res.json());
}
