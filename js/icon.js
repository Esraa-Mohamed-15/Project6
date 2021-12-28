let cartProductDiv = document.querySelector('.cart-product div');
let cartProduct = document.querySelector('.cart-product');
let shoppingCart = document.querySelector('.shopping-cart');
let badge = document.querySelector('.badge');

/*لما اعمل ريفريش تفضل الداتا موجوده ف ال console application*/
let addedItem= localStorage.getItem("productsInCart")
? JSON.parse(localStorage.getItem("productsInCart"))
: [];
/*لما اعمل ريفريش تفضل الايقونه شايله الداتا ال ف ال console application*/
if(addedItem){
  addedItem.map((item) =>{
    cartProductDiv.innerHTML +=`<p> ${item.title} ${item.qty}</p>`;
  });
  badge.style.display="block";
  badge .innerHTML+= addedItem.length;
}

/*open cart menu*/
/*دا عشان اقفل وافتج بالضغط ع الايقونه*/

shoppingCart.addEventListener('click', openCart)
function openCart() {
  if (cartProductDiv.innerHTML !="") {
  if (cartProduct.style.display =="none") {
  cartProduct.style.display="block";
  }
  else {
    cartProduct.style.display="none";
  }
}
}
