let cart = {};

function updateCart(input) {
    const medicineName = input.dataset.name;
    const pricePerUnit = parseFloat(input.dataset.price);
    const quantity = parseInt(input.value);

    if (quantity > 0) {
        cart[medicineName] = {
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            totalPrice: quantity * pricePerUnit
        };
    } else {
        delete cart[medicineName];
    }

    renderCartTable();
}

function renderCartTable() {
    const cartTableBody = document.getElementById("cartTableBody");
    const totalCartPriceEl = document.getElementById("totalCartPrice");
    cartTableBody.innerHTML = "";

    let totalCartPrice = 0;

    for (const [name, details] of Object.entries(cart)) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${details.quantity}</td>
            <td class="text-right">$${details.pricePerUnit.toFixed(2)}</td>
            <td class="text-right">$${details.totalPrice.toFixed(2)}</td>
        `;
        cartTableBody.appendChild(row);
        totalCartPrice += details.totalPrice;
    }

    totalCartPriceEl.textContent = `$${totalCartPrice.toFixed(2)}`;
}

// Function to save the current cart as a favorite in localStorage
function saveToFavorites() {
  if (cart.length === 0) {
      alert("Your cart is empty. Add items to save as favourites.");
      return;
  }

  localStorage.setItem("favoriteOrder", JSON.stringify(cart));
  alert("Your cart has been saved as favourites!");
}

// Function to apply the saved favorites to the cart
function applyFavorites() {
  const favoriteOrder = localStorage.getItem("favoriteOrder");

  if (!favoriteOrder) {
      alert("No favourite order found. Please save one first.");
      return;
  }

  // Parse the saved favorites and update the cart
  cart = JSON.parse(favoriteOrder);

  // Update the cart table to reflect the applied favorites
  renderCartTable();

  alert("Your favourites have been applied!");
}

// Add event listeners to the buttons
document.getElementById("saveFavoritesBtn").addEventListener("click", saveToFavorites);
document.getElementById("applyFavoritesBtn").addEventListener("click", applyFavorites);
