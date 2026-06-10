// pagination.js

export function renderPagination(container, currentPage, totalPages, onPrev, onNext) {
  container.innerHTML = `
    <div class="pagination">
      <button id="prev-btn" ${currentPage <= 1 ? 'disabled' : ''}>Prev</button>
      <span>Seite ${currentPage} / ${totalPages}</span>
      <button id="next-btn" ${currentPage >= totalPages ? 'disabled' : ''}>Next</button>
    </div>
  `;

  const prevBtn = container.querySelector('#prev-btn');
  const nextBtn = container.querySelector('#next-btn');

  prevBtn.addEventListener('click', onPrev);
  nextBtn.addEventListener('click', onNext);
}
