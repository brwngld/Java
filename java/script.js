// Define your payment data
//----------------------------------------
const paymentData = [
  { title: "Payment amount", amount: "$500.00", detail: "**** **** 3484", icon: "fas fa-dollar-sign", color: "light-red" },
  { title: "Payment order", amount: "$200.00", detail: "**** **** 5542", icon: "fas fa-list", color: "light-purple" },
  { title: "Payment Customer", amount: "$350.00", detail: "**** **** 8896", icon: "fas fa-users", color: "light-green" },
  { title: "Payment Proceed", amount: "$150.00", detail: "**** **** 7745", icon: "fa-solid fa-check", color: "light-blue" }
];


// Function to create payment cards dynamically
function createPaymentCards() {
const paymentCardsContainer = document.getElementById("paymentCards");

// Loop through the payment data and create cards dynamically
paymentData.forEach(data => {
  const card = document.createElement("div");
  card.classList.add("payment--card", data.color);
  
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card--header");
  
  const amountDiv = document.createElement("div");
  amountDiv.classList.add("amount");
  
  const titleSpan = document.createElement("span");
  titleSpan.classList.add("title");
  titleSpan.textContent = data.title;
  
  const amountValueSpan = document.createElement("span");
  amountValueSpan.classList.add("amount--value");
  amountValueSpan.textContent = data.amount;
  
  const icon = document.createElement("i");
  icon.classList.add(data.icon, "icon");
  
  const cardDetail = document.createElement("span");
  cardDetail.classList.add("card-detail");
  cardDetail.textContent = data.detail;
  
  amountDiv.appendChild(titleSpan);
  amountDiv.appendChild(amountValueSpan);
  
  cardHeader.appendChild(amountDiv);
  cardHeader.appendChild(icon);
  
  card.appendChild(cardHeader);
  card.appendChild(cardDetail);
  
  paymentCardsContainer.appendChild(card);
});
}

// Call the function to create payment cards when the page loads
document.addEventListener("DOMContentLoaded", createPaymentCards);




//Implementing Search function on the page
//------------------------------------------

function search() {
  const searchText = document.getElementById("searchInput").value.toLowerCase().trim();

  // Search within payment cards
  const paymentCards = document.querySelectorAll(".payment--card");
  paymentCards.forEach(card => {
    const cardDetail = card.querySelector(".card-detail").textContent.toLowerCase();
    const cardTitle = card.querySelector(".title").textContent.toLowerCase();
    const cardAmount = card.querySelector(".amount--value").textContent.toLowerCase();

    if (cardDetail.includes(searchText) || cardTitle.includes(searchText) || cardAmount.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // Search within orders
  const orders = document.querySelectorAll(".order");
  orders.forEach(order => {
    const orderNumber = order.querySelector(".order-number").textContent.toLowerCase();
    const orderDate = order.querySelector(".order-date").textContent.toLowerCase();
    const orderStatus = order.querySelector(".order-status").textContent.toLowerCase();

    if (orderNumber.includes(searchText) || orderDate.includes(searchText) || orderStatus.includes(searchText)) {
      order.style.display = "block";
    } else {
      order.style.display = "none";
    }
  });

  // Add more sections as needed
}


//Implementing Darkmode on the page
//------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Check if dark mode preference is stored in localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
      enableDarkMode();
  }

  // Toggle dark mode
  darkModeToggle.addEventListener("click", function(e) {
      e.preventDefault();
      if (document.body.classList.contains("dark-mode")) {
          disableDarkMode();
      } else {
          enableDarkMode();
      }
  });

  function enableDarkMode() {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
  }

  function disableDarkMode() {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
  }
});

// Function to toggle the popup and modal overlay
function toggleOptions() {
  var options = document.querySelector(".profile-options");
  var overlay = document.querySelector(".modal-overlay");

  if (options.style.display === "none" || options.style.display === "") {
      options.style.display = "block";
      overlay.style.display = "block";
  } else {
      options.style.display = "none";
      overlay.style.display = "none";
  }
};

// Function to close the popup and modal overlay
function closeOptions() {
  var options = document.querySelector(".profile-options");
  var overlay = document.querySelector(".modal-overlay");

  options.style.display = "none";
  overlay.style.display = "none";
};
