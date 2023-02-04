let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// let addCart = document.querySelector('.products');

// document.querySelector('#add-cart').onclick = () =>{
//   shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

// var addToCart = document.querySelector('#add-cart').onclick = () =>{
//   shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }
  var productBox = document.getElementsByClassName('.btn');
  for ( var i = 0; i < productBox.length; i++){
    var buttonBox = productBox[i];
    buttonBox.addEventListener('click', function(){
      console.log('clicked')
    })
  }

// let addCart = document.querySelector('.products');

// document.querySelector('#add-cart').onclick = () =>{
//   shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//validation login


document
.getElementById('button')
.addEventListener('click' ,loginButtonClicked)


function loginButtonClicked(){

  var email = document.getElementById('email');
  var password = document.getElementById('password');
  

  if(email.value == "admin@gmail.com" && password.value == "admin"){
      alert('login sukses')
      document.location.reload(true);
      
  }else {
    if(email.value == "" && password.value == ""){
      alert('Email dan Password Belum Disi')
    }else{
      alert('Password dan email salah')
    }
   
  }
  
  
  
  
}






var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});












// Cart Working 
if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)

}else{
  ready()
}

// Making Function
function ready(){
  //Remove Item From Cart
  var removeCartButtons = document.getElementsByClassName('cart-remove')
  console.log(removeCartButtons)
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i]
    button.addEventListener('click', removeCartItem)
  }
  //Quantity Changes
  var quantityInput = document.getElementsByClassName('cart-quantity')
  for (var i = 0; i < quantityInput.length; i++){
    var  input = quantityInput[i]
    input.addEventListener('change', quantityChanged)
  }
  // Add To Cart
  var addCart = document.getElementsByClassName('btn')
  for (var i = 0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener('click' , addCartClicked);
  }
  // Buy Button Work
  document
  .getElementsByClassName('buyButton')[0]
  .addEventListener('click', buyButtonClicked);
}

//Buy Button
function buyButtonClicked(){
  
    alert('Your Order is placed')
    var cartContent = document.getElementsByClassName('cart-contentku')[0]
    while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
  
  }

    
  


//Add To Cart
function addCartClicked(event){
  var button = event.target;
  var shopProduct = button.parentElement;
  var title = shopProduct.getElementsByClassName('product-title')[0].innerText;
  var productImg = shopProduct.getElementsByClassName('product-image')[0].src;
  var price = shopProduct.getElementsByClassName('price')[0].innerText;
  addProductToCart(title, productImg, price);
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
  
  updateTotal();

}

function addProductToCart(title, price, productImg){
  var cartShopBox = document.createElement('div')
  cartShopBox.classList.add('box-content')
  var cartItem = document.getElementsByClassName('cart-contentku')[0];
  var cartItemName = cartItem.getElementsByClassName('title');
  for (var i = 0; i < cartItemName.length; i++){
    if(cartItemName[i].innerText == title){
      alert("You have already add this item to cart");
      return;
    }
    
  }
  


var cartBoxContent = `
                    <i class="fas fa-trash cart-remove"></i>
                    <img src="${price}" alt="inifoto" class="product-image">
                    <div class="content">
                    <h3 class="title">${title}</h3>
                    <span class="price">${productImg}</span>
                    <input type="number" value="1" class="cart-quantity">
                    </div>`;

cartShopBox.innerHTML = cartBoxContent
cartItem.append(cartShopBox);
cartShopBox
.getElementsByClassName('cart-remove')[0]
.addEventListener('click', removeCartItem)
cartShopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change', quantityChanged)
}

function updateTotal(){
  var cartBoxes = document.getElementsByClassName('cart-contentku')
  var cartContent = document.getElementsByClassName('box-content')
  var total = 0;
  for (var i = 0; i < cartContent.length; i++){
    var cartBox = cartContent[i];
    var priceElement = cartBox.getElementsByClassName('price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
  }
    // if price contain some cents value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total')[0].innerText = '$'+ total;  
  
}

//Remove Item From Cart
function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.remove('add-cart')
  updateTotal();
}

//Quantity Changed
function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateTotal()
}

//Update Total





