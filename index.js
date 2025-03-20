// Book data
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction" },
    { title: "Educated", author: "Tara Westover", category: "non-fiction" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "fantasy" },
    { title: "Dune", author: "Frank Herbert", category: "science-fiction" },
    { title: "Pride and Prejudice", author: "Jane Austen", category: "fiction" },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "non-fiction" },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", category: "fantasy" },
    { title: "Foundation", author: "Isaac Asimov", category: "science-fiction" },
    { title: "The Book Thief", author: "Markus Zusak", category: "historical-fiction" },
    { title: "The Da Vinci Code", author: "Dan Brown", category: "mystery" }
  ];
  
  // Category data
  const categories = ["mystery", "historical-fiction", "science-fiction", "fantasy", "non-fiction", "fiction"];
  
  // Render books on page
  function renderBooks(booksToRender) {
    let bookListHTML = document.getElementById('bookList');
    bookListHTML.innerHTML = ''; // clear books
    for (let i = 0; i < booksToRender.length; i++) {
      let book = booksToRender[i];
      let bookHTML = document.createElement('div');
      bookHTML.className = "book";
  
      let bookTitleHTML = document.createElement("h3");
      bookTitleHTML.innerText = book.title;
  
      let bookAuthorHTML = document.createElement("p");
      bookAuthorHTML.innerText = "Author: " + book.author;
  
      let addToCartButtonHTML = document.createElement("button");
      addToCartButtonHTML.className = "add-to-cart";
      addToCartButtonHTML.innerText = "Add to Cart";
      // Add book to cart when clicked
      addToCartButtonHTML.addEventListener("click", function() {
        let cartList = document.getElementById('cart-list');
        let newCartItem = document.createElement('li');
        newCartItem.className = "cart-item";
        newCartItem.textContent = book.title;
        cartList.appendChild(newCartItem);
      });
  
      bookHTML.appendChild(bookTitleHTML);
      bookHTML.appendChild(bookAuthorHTML);
      bookHTML.appendChild(addToCartButtonHTML);
      bookListHTML.appendChild(bookHTML);
    }
  }
  
  // Render categories on page
  function renderCategories(categoriesToRender){
    let categoriesListHTML = document.getElementById("categoryList");
  
    // "ALL" category to show all books
    let allCategoryHTML = document.createElement("li");
    allCategoryHTML.className = "category";
    allCategoryHTML.innerText = "ALL";
    allCategoryHTML.addEventListener('click', function() {
      renderfilteredBooksByCategory(undefined, books);
    });
    categoriesListHTML.append(allCategoryHTML);
  
    // Each category button
    for (let i = 0; i < categoriesToRender.length; i++){
      let category = categoriesToRender[i];
      let categoryHTML = document.createElement("li");
      categoryHTML.className = "category";
      categoryHTML.innerText = category.toUpperCase();
      // Filter books on click
      categoryHTML.addEventListener('click', function() {
        renderfilteredBooksByCategory(category, books);
      });
      categoriesListHTML.appendChild(categoryHTML);
    }
  }
  
  // Filter books by category then render
  function renderfilteredBooksByCategory(category, booksToRender) {
    let filteredBooks = [];
    if (!category) { 
      // No category means show all books
      filteredBooks = booksToRender;
    } else {
      // Loop to filter matching books
      for (let i = 0; i < booksToRender.length; i++) {
        if (booksToRender[i].category === category) {
          filteredBooks.push(booksToRender[i]);
        }
      }
    }
    renderBooks(filteredBooks);
  }
  
  // Load saved order from localStorage
  function loadCartFromLocalStorage() {
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      const orderItems = JSON.parse(savedOrder); // convert text to array
      const cartList = document.getElementById("cart-list");
      cartList.innerHTML = ""; // clear cart
      for (let i = 0; i < orderItems.length; i++) {
        let li = document.createElement("li");
        li.className = "cart-item";
        li.textContent = orderItems[i];
        cartList.appendChild(li);
      }
    }
  }
  
  // Clear cart button action
  let clearCartButton = document.getElementById("clear-cart");
  clearCartButton.addEventListener("click", function(){
    let cartItems = document.getElementsByClassName("cart-item");
    for (let i = cartItems.length - 1; i >= 0; i--) {
      cartItems[i].remove();
    }
    // Remove order from storage
    localStorage.removeItem("order");
  });
  
  // Place order button action
  let placeOrderButton = document.getElementById("place-order");
  placeOrderButton.addEventListener("click", function(){
    let cartItems = document.getElementsByClassName("cart-item");
    let order = [];
    // Loop to get each item text
    for (let i = 0; i < cartItems.length; i++) {
      order.push(cartItems[i].textContent);
    }
    // Save order to storage
    localStorage.setItem("order", JSON.stringify(order));
    alert("Order placed!");
  });
  
  // Show books and categories on page load
  renderCategories(categories);
  renderBooks(books);
  loadCartFromLocalStorage();
  