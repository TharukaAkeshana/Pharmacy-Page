document.addEventListener("DOMContentLoaded", function () {
    var totalPrice = localStorage.getItem("totalPrice");
    var productTitles = JSON.parse(localStorage.getItem("productTitles"));
    
    // Check if total price exists in local storage
    if (totalPrice) {
      document.getElementById("total-price-display").innerText =
        "Total is Rs " + totalPrice;
      document.getElementById("total_price").value = totalPrice;
    }
  
    // Check if product titles exist in local storage
    if (productTitles) {
      document.getElementById("product_titles").value = productTitles.join(", ");
      document.getElementById("total-title-display").innerText +=
        "\nItem: " + productTitles.join(", ");
    }
  });
  
  document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate all fields are filled
    const email = document.getElementById('email').value.trim();
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const address = document.getElementById('address').value.trim();
    const postal = document.getElementById('postal').value.trim();
    const cardno = document.getElementById('cardno').value.trim();
    const expire = document.getElementById('expire').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (
        email && name && contact && address &&
        postal && cardno && expire && cvv
    ) {
        // All fields are filled, proceed
        alert('Order placed');
        window.location.href = 'ThankYou.html'; // Redirect to shop.html
    } else {
        // If any field is empty
        alert('Please fill all the fields.');
    }
});