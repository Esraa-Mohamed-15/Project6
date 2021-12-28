let product = JSON.parse(localStorage.getItem("product")) || product ;
let productItems = document.querySelector('.product-items');





/*html*/
let drawProduct;
drawProduct = function (product=[]) {/*عملت الفانكشن كدا عشان اعرف اناديها تحت ف السيرش*/
let myProduct = product.filter((item) => item.isMe=== 'y');
if (myProduct){
let products = myProduct.map( (item) =>{
  return `
  <div class="row product-item" style="color: ${item.isMe==="y"
  ? "darkgreen"
  : ""}">
  <img class="col-lg-2" src="${item.imageUrl}" alt="lap">

    <div class="desc col-lg-6">
       <h2 onclick="saveItemData(${item.id})">${item.title}</h2>
       <p>${item.desc}</p>
       <span> ${item.size}</span></br>
       <button class='edit' onclick='editProduct(${item.id})'> Edit Product </button>
       <button class='edit' onclick='deleteProduct(${item.id})'> Delete Product </button>
    </div>
  </div>
  `;
});
productItems.innerHTML=products.join(""); /*اي علامات بين العناصر ف ال html بتتشال ب join*/
};
}
drawProduct(JSON.parse(localStorage.getItem("product")));

/*editProduct*/
function editProduct(id) {
localStorage.setItem("editProduct" , id);
window.location="editproduct.html";
}

/*عشان احدف المنتج*/
function deleteProduct(id) {
  let product = JSON.parse(localStorage.getItem("product"))|| product;
  let myProduct = product.filter((item) => item.isMe=== 'y');
  let filterItem = myProduct.filter((i) => i.id !== id);
  drawProduct(filterItem);
  let clickedItem = myProduct.find((i) => i.id === id);
  product = product.filter((i) => i.id !== clickedItem.id);
  localStorage.setItem('product',JSON.stringify(product));
}
