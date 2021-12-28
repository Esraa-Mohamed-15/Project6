let productItems = document.querySelector('.product-items');
function drawFavProduct(allProduct=[]) {
  /* product دي عايده ع الداتا بتاعت كل عنصركتبتها كدا بدل ماعيد كتابه كل id*/
let product = JSON.parse(localStorage.getItem("productsFav")) || allProduct;
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
  <button class="add" onclick="removeFromFav(${item.id})" > Remove From favourite</button>
    </div>
  </div>
  `;
});
productItems.innerHTML=products.join("");
};
drawFavProduct();

/*عشان احدف المنتج*/

function removeFromFav(id) {
  let productsFav = localStorage.getItem("productsFav");
if (productsFav) {
let items = JSON.parse(productsFav);
let filterItem = items.filter((item) => item.id !== id);
drawFavProduct(filterItem);
localStorage.setItem('productsFav',JSON.stringify(filterItem));
}
}
/*اخر فيديو 23 واول فيديو 24 عشان تعديل علامه الاف*/
