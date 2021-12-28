/*removeFromCard*/
/*let productsInCart = localStorage.getItem('productsInCart');*/
let productItems = document.querySelector('.product-items');


/*if (productsInCart) {
  let items = JSON.parse(productsInCart);
drawCartProduct(items);
}*/
/* لغيت ال فوق دول عشان احل مشكله ال remove*//*الحل السطر 13*/

function drawCartProduct(allProduct=[]) {
  /* product دي عايده ع الداتا بتاعت كل عنصركتبتها كدا بدل ماعيد كتابه كل id*/
let product = JSON.parse(localStorage.getItem("productsInCart")) || allProduct;
let products = product.map( (item) =>{
  return `
  <div class="row product-item">
  <img class="col-lg-2" src="${item.imageUrl}" alt="lap">
    <div class="desc col-lg-6">
       <h2>${item.title}</h2>
       <p>${item.desc}</p>
       <span> ${item.size}</span><br>
       <span> Order: ${item.qty}</span>
    </div>
    <div class="actions col-lg-4">
  <button class="add" onclick="removeFromCard(${item.id})"> Remove From Cart</button>
    </div>
  </div>
  `;
});
productItems.innerHTML=products.join("");
};
drawCartProduct();

/*عشان احدف المنتج*/
function removeFromCard(id) {
  let productsInCart = localStorage.getItem("productsInCart");
if (productsInCart) {
let items = JSON.parse(productsInCart);
let filterItem = items.filter((item) => item.id !== id);
drawCartProduct(filterItem);
localStorage.setItem('productsInCart',JSON.stringify(filterItem));
}
}
