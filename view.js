// Load order from localStorage and display it
function loadOrder() {
    const orderData = localStorage.getItem("order");
    const orderList = document.getElementById("order-list");
    orderList.innerHTML = ""; // clear list
    if (orderData) {
      const orderItems = JSON.parse(orderData); // convert text to array
      // Loop to create list item for each order item
      for (let i = 0; i < orderItems.length; i++) {
        let li = document.createElement("li");
        li.textContent = orderItems[i];
        orderList.appendChild(li);
      }
    } else {
      // Show message if no order found
      orderList.textContent = "No order found.";
    }
  }
  
  loadOrder();
  
