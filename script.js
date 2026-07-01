const productList = document.querySelector("#product-list");
const cartList = document.querySelector("#cart-list");
const clearBtn = document.querySelector("#clear-cart-btn");

const products = [
	{id: 1, name: "product 1", price: 10},
	{id: 2, name: "product 2", price: 20},
	{id: 3, name: "product 3", price: 30},
	{id: 4, name: "product 4", price: 40},
	{id: 5, name: "product 5", price: 50},
]

function renderProducts() {
	products.forEach((product) => {
		const li = document.createElement("li");
		li.innerHTML = `${product.name} - $${product.price}
		<button>Add to cart</button>`;

		const btn = li.querySelector("button");
		btn.addEventListener("click", () => {
			addToCart(product.id);
		});
		productList.appendChild(li);
	});
}

function renderCart() {
	cartList.innerHTML = "";
	const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
	cart.forEach((product) => {
		const li = document.createElement("li");
		li.innerHTML = `${product.name} - $${product.price}`;
		cartList.appendChild(li);
	});
}

function addToCart(productId) {
	const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
	const product = products.find((item) => item.id === productId);
	cart.push(product);
	sessionStorage.setItem("cart", JSON.stringify(cart));
	renderCart();
}

function clearCart() {
	sessionStorage.removeItem("cart");
	renderCart();
}

clearBtn.addEventListener("click", clearCart);

renderProducts();