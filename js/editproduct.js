/*نفس صفحه الcreate الفرق اني هعمل تعديل بس*/
let product = JSON.parse(localStorage.getItem("product")) || product ;
let productId = JSON.parse(localStorage.getItem("editProduct"));size
let getProduct = product.find((i) => i.id === productId);
console.log("befour update" , getProduct);


let productName = document.getElementById('name');
let productDesc = document.getElementById('desc');
let productSize = document.getElementById('size');
let productForm = document.getElementById('btn');
let inputFile = document.getElementById('upload');
let sizeValue;
let productImage;


productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSize.value = getProduct.size;
productImage = getProduct.imageUrl;

/*events*/
productSize.addEventListener("change" , getSizeValue);
productForm.addEventListener("submit" , updateProduct);
inputFile.addEventListener("change" , uploadImage);


function getSizeValue(e) {
sizeValue = e.target.value;
}

/*تعديل العنصر*/
function updateProduct(e) {
  e.preventDefault();
  getProduct.title = productName.value;
  getProduct.desc = productDesc.value;
  getProduct.size = productSize.value;
  getProduct.imageUrl = productImage;
console.log("after update" , getProduct);

  localStorage.setItem('product' , JSON.stringify(product));
  setTimeout( () => {
    window.location = "index.html";
  } , 500);
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
productImage = reader.result;
};
}
