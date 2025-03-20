// Get the order items list and button
const orderItemsList = document.getElementById("order-items");
const finalizeOrderBtn = document.getElementById("finalize-order");

// Check if there is an existing order in localStorage
let orderData = localStorage.getItem("order");
if (orderData) {
  // (Assignment: Use JSON.parse() to access previous configuration)
  orderData = JSON.parse(orderData);
  renderOrderItems(orderData);
} else {
  // No existing order; start a new order (empty array)
  orderData = [];
  renderOrderItems(orderData);
}

// Function to display order items on the Order Page
function renderOrderItems(items) {
  orderItemsList.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.title + " - $" + item.price;
    orderItemsList.appendChild(li);
  });
}

// (Assignment: On finalizing the order, save order data with JSON.stringify and localStorage.setItem)
finalizeOrderBtn.addEventListener("click", () => {
  const orderString = JSON.stringify(orderData); // Convert order to string
  localStorage.setItem("order", orderString);      // Save to localStorage
  // Redirect to view page to see the order details
  window.location.href = "view.html";
});
