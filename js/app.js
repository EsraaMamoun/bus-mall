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
    new Product (productsImg[i]);
}

var leftProduct, centerProduct, rightProduct
function render () {
    leftProduct = Product.all[randomNumber(0,Product.all.length-1)];
    centertProduct = Product.all[randomNumber(0,Product.all.length-1)];
    rightProduct = Product.all[randomNumber(0,Product.all.length-1)];
    leftProductImg.setAttribute('src',leftProduct.pathOfImage);
    leftProductImg.setAttribute('alt',leftProduct.productName);
    leftProductImg.setAttribute('title',leftProduct.productName);
    centerProductImg.setAttribute('src',centerProduct.pathOfImage);
    centerProductImg.setAttribute('alt',centerProduct.productName);
    centerProductImg.setAttribute('title',centerProduct.productName);
    rightProductImg.setAttribute('src',rightProduct.pathOfImage);
    rightProductImg.setAttribute('alt',rightProduct.productName);
    rightProductImg.setAttribute('title',rightProduct.productName);
}
render ();

sectionProductsImg.addEventListener('click',handleClickOnProduct);

