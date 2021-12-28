/*data from local storage*/
let name = localStorage.getItem("name");
let mail = localStorage.getItem("mail");
let product = JSON.parse(localStorage.getItem("product"));
let myProduct = product.filter((i) => i.isMe === "y");

/*variables*/
let username = document.getElementById('username');
let email = document.getElementById('email');
let productLength = document.querySelector('#product-length span');

username.innerHTML=name;
email.innerHTML=mail;
if(myProduct.length !== 0){
productLength.innerHTML=myProduct.length;
}else {
  productLength.remove();
}
