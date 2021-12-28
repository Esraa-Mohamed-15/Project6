


let productName = document.getElementById('name');
let productDesc = document.getElementById('desc');
let productSize = document.getElementById('size');
let productForm = document.getElementById('btn');
let inputFile = document.getElementById('upload');
let sizeValue;
let productImage;
/*events*/
productSize.addEventListener("change" , getSizeValue);
productForm.addEventListener("submit" , createProduct);
inputFile.addEventListener("change" , uploadImage);


function getSizeValue(e) {
sizeValue = e.target.value;
}

/*اضافه عنصر جديد*/
function createProduct(e) {
  e.preventDefault();
let allProducts = JSON.parse(localStorage.getItem('product')) || product;
let nameValue = productName.value;
let descValue = productDesc.value;
if(nameValue && descValue){
let obj={
  id: allProducts ? allProducts.length + 1 : 1,
  title: nameValue,
  desc: descValue,
  imageUrl:productImage,
  size: sizeValue,
  qty: 1,
  isMe:"y",
};
let newProduct = allProducts ? [...allProducts, obj] : [obj];
localStorage.setItem('product' , JSON.stringify(newProduct));
productName.value="";
productDesc.value="";
productSize.value="";
setTimeout( () => {
  window.location = "index.html";
} , 500);
}
else {
  alert("enter data");
}
}
/*uploadImage*/
function uploadImage() {
let file = this.files[0];

let types =["image/jpg" ,"image/jpeg" ];
if (types.indexOf(file.type) == -1) {
alert("type not support");
return;
}
if (file.size >  2 * 1024 * 1024 ) {
alert("size not support");
return;
}
/*مسار للصوره ال خطتيها */
/*productImage = URL.createObjectURL(file)*/
getImage(file);
}
/*لظهور الصوره*/
function getImage(file) {
let reader = new FileReader();

reader.readAsDataURL(file);

reader.onload = function () {
productImage = reader.result ;
};
};
