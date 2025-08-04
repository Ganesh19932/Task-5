const products = [
  { name: "Bag", price: 999, image: "images/Bag.jpg" },
  { name: "Bike", price: 29999, image: "images/Bike.jpg" },
  { name: "Crocks", price: 499, image: "images/Crocks.jpg" },
  { name: "Drone", price: 15999, image: "images/Drone.jpg" },
  { name: "Headphones", price: 1299, image: "images/headphones.jpg" },
  { name: "HP Laptop", price: 45999, image: "images/Hp.jpg" },
  { name: "Infinix Phone", price: 9999, image: "images/Infinix.jpg" },
  { name: "Nirvana Boats", price: 1599, image: "images/nirvana-boats.jpg" },
  { name: "Shirt", price: 799, image: "images/Shirt.jpg" },
  { name: "Bluetooth Speaker", price: 899, image: "images/speaker.jpg" },
  { name: "Smart Watch", price: 1299, image: "images/watch.jpg" },
  { name: "Crocks", price: 1099, image: "images/Crocks.jpg" } 
];




const productList = document.getElementById("product-list");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button class="add-btn">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
  setupCartButtons();
}

function setupCartButtons() {
  const buttons = document.querySelectorAll(".add-btn");
  const cartCount = document.querySelector(".cart-count");
  let count = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("remove")) {
        button.textContent = "Add to Cart";
        button.classList.remove("remove");
        count--;
      } else {
        button.textContent = "Remove from Cart";
        button.classList.add("remove");
        count++;
      }
      cartCount.textContent = count;
    });
  });
}

displayProducts(products);

document.getElementById("search-input").addEventListener("input", e => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filtered);
});
