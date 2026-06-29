// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM Elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearBtn = document.getElementById("clear-cart-btn");

// Render Product List
function renderProducts() {

  products.forEach((product) => {

    const li = document.createElement("li");

    li.innerHTML = `
      ${product.name} - $${product.price}
      <button>Add to Cart</button>
    `;

    const button = li.querySelector("button");

    button.addEventListener("click", () => {
      addToCart(product.id);
    });

    productList.appendChild(li);

  });

}

// Render Cart
function renderCart() {

  cartList.innerHTML = "";

  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  cart.forEach((product) => {

    const li = document.createElement("li");

    li.innerHTML = `${product.name} - $${product.price}`;
    cartList.appendChild(li);

  });

}

// Add Item
function addToCart(productId) {

  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  const product = products.find((item) => item.id === productId);

  cart.push(product);

  sessionStorage.setItem("cart", JSON.stringify(cart));

  renderCart();

}


// Clear Cart
function clearCart() {

  sessionStorage.removeItem("cart");

  renderCart();

}

clearBtn.addEventListener("click", clearCart);

// Initial Render
renderProducts();
renderCart();