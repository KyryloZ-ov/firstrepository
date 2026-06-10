// main.js
import { loadProducts } from "./api.js";
import { ProductCard } from "./Product.js";

const container = document.getElementById("products");
const reloadBtn = document.getElementById("reload");

async function showProducts() {
  container.innerHTML = "Lade Produkte...";

  let products = await loadProducts();

  // // Optional: nur 10 Produkte
  // products = products.slice(0, 10);

  // // Optional: Filter > 50 €
  // products = products.filter(p => p.price > 50);

  container.innerHTML = "";

  products.forEach(product => {
    const card = ProductCard(product);
    container.appendChild(card);
  });
}

reloadBtn.addEventListener("click", showProducts);


showProducts();
