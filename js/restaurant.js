// MENU DATA
const menuItems = [
    {
        id: 1,
        name: "Cheese Burger",
        description: "Beef burger with cheese and vegetables",
        price: 5.99,
        image: "/images/burger.jpg"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        description: "Pizza with pepperoni and mozzarella cheese",
        price: 8.99,
        image: "/images/pizza.jpg"
    },
    {
        id: 3,
        name: "Fried Chicken",
        description: "Crispy fried chicken",
        price: 6.99,
        image: "/images/chicken.jpg"
    },
    {
        id: 4,
        name: "French Fries",
        description: "Crispy golden french fries",
        price: 2.99,
        image: "/images/fries.jpg"
    },
    {
        id: 5,
        name: "Chicken Pasta",
        description: "Creamy pasta with grilled chicken",
        price: 7.99,
        image: "/images/pasta.jpg"
    },
    {
        id: 6,
        name: "Ice Cream",
        description: "Vanilla ice cream with chocolate",
        price: 3.49,
        image: "/images/icecream.jpg"
    }
];

// ORDER ARRAY
let order = [];

// GET HTML ELEMENTS
const menu = document.getElementById("menu");
const orderList = document.getElementById("orderList");
const subtotalElement = document.getElementById("subtotal");
const taxElement = document.getElementById("tax");
const totalElement = document.getElementById("total");
const clearButton = document.getElementById("clearButton");
const placeOrderButton = document.getElementById("placeOrderButton");
const message = document.getElementById("message");


// DISPLAY MENU
function displayMenu() {
    menu.innerHTML = "";
    menuItems.forEach(function(item) {

        const card = document.createElement("div");
        card.classList.add("food-card");

        card.innerHTML = `
            <div class="food-image">
                <img
                    src="${item.image}"
                    alt="${item.name}"
                >
            </div>

            <div class="food-info">
                <h3>
                    ${item.name}
                </h3>

                <p class="food-description">
                    ${item.description}
                </p>

                <p class="price">
                    $${item.price.toFixed(2)}
                </p>

                <button
                    class="add-button"
                    onclick="addToOrder(${item.id})">
                    Add to Order
                </button>
            </div>
        `;
        menu.appendChild(card);
    });
}

// ADD TO ORDER
function addToOrder(itemId) {
    const item =
        menuItems.find(function(food) {
            return food.id === itemId;
        });

    const existingItem =
        order.find(function(food) {
            return food.id === itemId;
        });

    if (existingItem) {
        existingItem.quantity++;
    }
    else {
        order.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        });
    }
    displayOrder();
}

// DISPLAY ORDER
function displayOrder() {
    orderList.innerHTML = "";

    // Check empty order
    if (order.length === 0) {
        orderList.innerHTML = `
            <p class="empty">
                Your order is empty.
            </p>
        `;

        updateTotal();
        return;
    }

    // Display each order item
    order.forEach(function(item) {
        const orderItem = document.createElement("div");
        orderItem.classList.add("order-item");

        orderItem.innerHTML = `
            <div class="order-info">
                <h3>
                    ${item.name}
                </h3>
                <p class="order-price">
                    $${item.price.toFixed(2)}
                </p>
            </div>

            <div class="quantity">
                <button
                    onclick="decreaseQuantity(${item.id})">
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="increaseQuantity(${item.id})">
                    +
                </button>
            </div>

            <button
                class="remove-button"
                onclick="removeItem(${item.id})">
                Remove
            </button>
        `;

        orderList.appendChild(orderItem);
    });

    updateTotal();
}

// INCREASE QUANTITY
function increaseQuantity(itemId) {
    const item =
        order.find(function(food) {
            return food.id === itemId;
        });

    item.quantity++;
    displayOrder();
}

// DECREASE QUANTITY
function decreaseQuantity(itemId) {
    const item =
        order.find(function(food) {
            return food.id === itemId;
        });

    if (item.quantity > 1) {
        item.quantity--;
    }
    else {
        removeItem(itemId);
        return;
    }

    displayOrder();
}

// REMOVE ITEM
function removeItem(itemId) {
    order =
        order.filter(function(item) {
            return item.id !== itemId;
        });
    displayOrder();
}

// CALCULATE TOTAL
function updateTotal() {
    let subtotal = 0;

    order.forEach(function(item) {
        subtotal += item.price * item.quantity;
    });

    // 5% tax
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// CLEAR ORDER
clearButton.addEventListener("click",function() {
        order = [];
        displayOrder();
        message.textContent = "";
    }
);

// PLACE ORDER
placeOrderButton.addEventListener(
    "click",
    function() {

        if (order.length === 0) {
            message.textContent = "Please add some items to your order.";
            message.style.color = "#dc3545";
            return;
        }

        message.textContent = "✅ Order placed successfully!";
        message.style.color = "#28a745";
    }
);

displayMenu();
displayOrder();