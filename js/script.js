/*add to card and search for item*/ /*part 7 for search by size*/
/*بحفظ الداتا للفورممن خلال ال key , value */
/* الشرح لتخزين الداتا
localStorage.setItem("name","esraa");
localStorage.setItem("age","23");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
localStorage.clear(); /*مسح كل الداتا*/


 /*هستخدم دا عشان يظهر داتا الفورم ف الصفحه الرايسيه*/

/* دا لو انا عاوزه اعمل نفس السيكشن لكن بلجافا بدل (html,css)
/*product*/
let productItems = document.querySelector('.product-items');
let cartProduct = document.querySelector('.cart-product');
let cartProductDiv = document.querySelector('.cart-product div');
let badge = document.querySelector('.badge');
let shoppingCart = document.querySelector('.shopping-cart');
let product_ = JSON.parse(localStorage.getItem("product")) || product;

/*html*/
let drawProduct;
drawProduct = function (product=[]) {  /*عملت الفانكشن كدا عشان اعرف اناديها تحت ف السيرش*/
let products = product_.map( (item) =>{
  return `
  <div class="row product-item" style="color: ${item.isMe==="y"
  ? "darkgreen"
  : ""}">
  <img class="col-lg-2" src="${item.imageUrl}" alt="lap">
    <div class="desc col-lg-6">
       <h2 onclick="saveItemData(${item.id})">${item.title}</h2>
       <p>${item.desc}</p>
       <span> ${item.size}</span></br>

       ${item.isMe==="y" ?
       "<button class='edit' onclick='editProduct(" + item.id +")'> Edit Product </button>"
       : ""}

    </div>
    <div class="actions col-lg-4">
  <button class="add" onclick="addedToCard(${item.id})"> Add To Cart</button>
  <i class="fas fa-heart fa-lg" onclick="addedTofav(${item.id})"></i>
    </div>
  </div>
  `;
});
productItems.innerHTML=products.join(""); /*اي علامات بين العناصر ف ال html بتتشال ب join*/
};
drawProduct(JSON.parse(localStorage.getItem("product")));



/* اما اضغط ع اي منجج يروح للتخزين رقم المنتج عشان يتفتحلك صح ف صفحه ال details*/
function saveItemData(id) {
localStorage.setItem('productId' , id)
window.location="details.html";
};

/*add to card=======*/
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
/*اضافه الداتا في الايقونه والبادج*/
/*وانك تقدري تضيفي منتجات وكدا*/
/* 112 to 137 modfy عشان يظبط اللسته بتاعت الايقونه وتفضل الداتا محفوظه ف الريفريش ووقت مارجع باك*/
function addedToCard(id) {
if(localStorage.getItem("name")){
  let product_  = JSON.parse(localStorage.getItem("product")) || product ; /*لل newProduct*/
  let choosenItem =product_.find((item) => item.id===id);
  /*ي تري العنصر المختار دا كان موجود ف العناصر ؟اه تمام عاوزه اضيف واحد كمان اعمل اي يتكتب تاني ؟ لا نكتب جمب العنصر 2*/
  let item = addedItem.some((i) => i.id === choosenItem.id);
  /*؟لو العنصر المختار هو هو العنصر ال موجود بالفعل ف ال array*/

if (item) {/*لو اه*/
   addedItem = addedItem.map((p) =>{
     if(p.id === choosenItem.id)
     p.qty += 1;
     return p;
   });
}
else {
  addedItem.push(choosenItem); /*لو لا خلاص حط العنصر المختار*/
}
cartProductDiv.innerHTML ="";
addedItem.forEach((item) => {
cartProductDiv.innerHTML +=`<p> ${item.title} ${item.qty}</p>`;
});
  /*عشان الكلام يتحط ف صفحه ال product*/
/*save data*/
  localStorage.setItem('productsInCart',JSON.stringify(addedItem));
  /*هيطله بقا الجديد ال هو الرقم لو العنصر متعاد مش هيرجه يكتبه تاني */
/*add numbers to product*/
  let cartProductItems =document.querySelectorAll('.cart-product div p'); /*كام p جوه الdiv*/
  badge.style.display="block";
  badge .innerHTML= cartProductItems.length;
}
else {
  window.location="login.html";
}
}





/*حل مشكله تكرار العنصر بردو ف الداتا بيز وف صفحه product cart (all product)*/
function uniqeItem(arr , filterType) {
let uniqe = arr.map((item) => item[filterType])
.map((item,i,final) => final.indexOf(item) === i && i)
/*لو ال index بتاع الجديد هو هو ال index بتاع ال i يبقي رجعهولي (&& i)*/
/*ضفت عنصر ب [1] وف الاري رقمه ب 0 .. ال 0 دا هو الفاينل .طب ضفت كمان عنصر رقم 1[1,1] رقمه ف الاراي ب1 يعني مش بيساوي ال فاينل وهكدا ودا المقصود بالكود دا*/
.filter((item) => arr[item])/*دا هيشيل الخطا ف انهم مش بيساوا بعض ف بيضاف جمب العنصر رقم 1 دا 2 ف ال product list*/
.map((item) => arr[item]);
return uniqe;
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



/*search script*/
let input=document.getElementById('search');
input.addEventListener("keyup", function (e) {
search(e.target.value ,JSON.parse(localStorage.getItem("product")));

if (e.target.value.trim()==="")
drawProduct(JSON.parse(localStorage.getItem("product")));
});


function search(title , myArray) {
let arr=myArray.filter((item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
/*!== من غيرها هيجبلك العناصر ال مفهاش ال انتي كتبتيه ف البحث*/
 /*يعني لو السيرش يحتوي علي اي جزء من الكلمه مكنش ابعت -1*/
drawProduct(arr);  /*فوق عملتها داله معرفه عشان اعرف اناديها كدا (داله معروفه يعني مكتوبه برا فانكشن)*/
}
/*search("Headphone Item",JSON.parse(localStorage.getItem("product")));*/





/*add to fav *//*part 5*/
let fav= localStorage.getItem("productsFav")
? JSON.parse(localStorage.getItem("productsFav"))
: [];
function addedTofav(id) {

if(localStorage.getItem("name")){
let choosenItem =product.find((item) => item.id===id);
/*let choosenItem.liked=true;*/
fav =[...fav , choosenItem];
let uniqeProduct = uniqeItem(fav , "id");
localStorage.setItem("productsFav",JSON.stringify(uniqeProduct));
/*product.map((item) => {
if(item.id === choosenItem.id){
  item.liked=true;
}
});
localStorage.setItem("product",JSON.stringify(Product));
drawProduct(product);
+
هشيل السطر 56 واضيف ف السطر ال 20 let product=product;
وف السطر ال82 هضيف || product
*/ /*تبع الايك لو الايقونه ساده*/

}else {
  window.location="login.html";
}
};
/*
/*editProduct*/
function editProduct(id) {
localStorage.setItem("editProduct" , id);
window.location="editproduct.html";
}


/*change direction*/
/*نحطه ف صفحه لوحد بردو
let getlang = localStorage.getItem("langDir");
if(getlang){
if(getlang=="rtl"){
changeDir("rtl");
}else{
changeDir("ltr");
}
}
let en= document.getElementById('en');
let ar= document.getElementById('ar');
en.addEventListener('click', () => changeDir('ltr'));
ar.addEventListener('click', () => changeDir('rtl'));

function changeDir(dir) {
document.documentElement.setAttribute('dir' , dir);
localStorage.setItem('langDir' , dir);
}*/
