`use strict`;

var productsImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var leftProductImg = document.querySelector('#leftProductImg');
var centerProductImg = document.querySelector('#centerProductImg');
var rightProductImg = document.querySelector('#rightProductImg');
var allProductsImg = document.querySelector('#allProductsImg');


function Product(productName) {
    this.productName = productName;
    this.clicks = 0;
    this.views = 0;
    this.pathOfImage = `img/${this.productName}`;
    Product.all.push(this);
}
Product.all = [];

for (var i = 0; i < productsImg.length; i++) {
    new Product(productsImg[i]);
}

function randomNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

var leftProduct, centerProduct, rightProduct
function render() {
    leftProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    centerProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    rightProduct = Product.all[randomNumber(0, Product.all.length - 1)];
    leftProductImg.setAttribute('src', leftProduct.pathOfImage);
    leftProductImg.setAttribute('alt', leftProduct.productName);
    leftProductImg.setAttribute('title', leftProduct.productName);
    centerProductImg.setAttribute('src', centerProduct.pathOfImage);
    centerProductImg.setAttribute('alt', centerProduct.productName);
    centerProductImg.setAttribute('title', centerProduct.productName);
    rightProductImg.setAttribute('src', rightProduct.pathOfImage);
    rightProductImg.setAttribute('alt', rightProduct.productName);
    rightProductImg.setAttribute('title', rightProduct.productName);
}

render();

sectionProductsImg.addEventListener('click', clickOnProduct);

var totalClicks = 0;
function clickOnProduct(event) {
    if (totalClicks < 25) {
        if (event.target.id !== 'sectionProductsImg') {
            if (event.target.id === 'leftProductImg') {
                leftProduct.clicks++;
            } else if (event.target.id === 'centerProductImg') {
                centerProduct.clicks++;
            } else if (event.target.id === 'rightProductImg') {
                rightProduct.clicks++;
            }
            totalClicks++;
            leftProduct.views++;
            centerProduct.views++;
            rightProduct.views++;
            render();
        }
    } else {
        sectionProductsImg.removeEventListener('click', clickOnProduct);
        Render();
    }
}

function Render() {
    var ulE0 = document.getElementById('synopsis');
    for (var i = 0; i < Product.all.length; i++) {
        var liE1 = document.createElement('li');
        ulE0.appendChild(liE1);
        liE1.textContent = `${Product.all[i].productName.split('.')[0]} has ${Product.all[i].clicks} clicks and ${Product.all[i].views} views`;
    }
}