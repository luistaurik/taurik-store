// Buen dia profe, me tome la libertad de cambiar un poco la funcionalidad.
function plus() {
    var currentNumber, numberPlus;
    currentNumber = parseFloat(document.querySelector("#amountValue").value);
    numberPlus = currentNumber + 1;
    document.querySelector("#amountValue").value = numberPlus;
}

function less() {
    var currentNumber, MakeLess;
    currentNumber = parseFloat(document.querySelector("#amountValue").value);
    MakeLess = currentNumber - 1;
    document.querySelector("#amountValue").value = MakeLess;
}

var unitPrice = parseFloat(document.querySelector("#totalPrice").textContent.replace(",", "").replace("$", ""));;
function calculateValue() {
    var quantity = parseFloat(document.querySelector("#amountValue").value);
    var price = parseFloat(document.querySelector("#totalPrice").textContent.replace(",", "").replace("$", ""));
    var quantity, price;
    quantity = parseFloat(quantity.toFixed(2));
    price = parseFloat(price.toFixed(2));
    var totalPrice = quantity * unitPrice;
    document.querySelector("#totalPrice").textContent = totalPrice.toLocaleString({minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.querySelector("#totalPrice").innerHTML = text;
}

function plusQuantity() {
    plus();
    calculateValue();
}

function lessQuantity() {
    less();
    calculateValue();
}

function changeColor() {
    var color, currentColor;
    currentColor = document.querySelector("#colorValue").value;
    if (currentColor === "White") {color = "#ffffff";}
    else if (currentColor === "Black") {color = "#000000";}
    else if (currentColor === "Camel") {color = "#b38f71";}
    else if (currentColor === "Blue") {color = "#3e4f85";}
    else {color = "#b38f71";}
    document.querySelector("#finalColor").style.backgroundColor = color;
}

function changeImage() {
    var colorImage, currentColor;
    currentColor = document.querySelector("#colorValue").value;
    if (currentColor === "White") {colorImage = "https://cdn.shopify.com/s/files/1/0073/7699/4386/products/Unbranded__0042_CNeck_A_1_800x.jpg?v=1653449146";}
    else if (currentColor === "Black") {colorImage = "https://cdn.shopify.com/s/files/1/0073/7699/4386/products/Unbranded__0051_CNeck_A_10_800x.jpg?v=1660773141";}
    else if (currentColor === "Camel") {colorImage = "https://cdn.shopify.com/s/files/1/0073/7699/4386/products/Unbranded__0058_CNeck_A_17_800x.jpg?v=1660773141";}
    else if (currentColor === "Blue") {colorImage = "https://cdn.shopify.com/s/files/1/0073/7699/4386/products/Unbranded__0050_CNeck_A_9_800x.jpg?v=1660773141";}
    else {colorImage = "https://cdn.shopify.com/s/files/1/0073/7699/4386/products/Unbranded__0046_CNeck_A_5_800x.jpg?v=1660773141";}
    document.querySelector("#product-image").src = colorImage;
}

function change() {
    changeColor();
    changeImage();
}

function buy() {
    var addItem, carItems;
    carItems = parseFloat(document.querySelector("#carItems").textContent);
    addItem = carItems + 1;
    document.querySelector("#carItems").textContent = addItem;
    console.log(carItems);
}

function viewCarQuantity() {
    var carQuantity = document.querySelector("#carItems").value;
    var viewQuantity = document.querySelector("#carItems");
    if (carQuantity > 0) {viewQuantity.style.display = "block";} 
    else {viewQuantity.style.display = "none";}
}

