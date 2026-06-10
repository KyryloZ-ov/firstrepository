// Product.js
export function ProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p><strong>${product.price} €</strong></p>
  `;

  return card;
}
