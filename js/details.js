let product = JSON.parse(localStorage.getItem("product"));
let productId = localStorage.getItem("productId");
let itemDetails = document.querySelector('.home-content')
let productDetails= product.find((item) => item.id == productId);
console.log(productDetails);

itemDetails.innerHTML =
`
<img src="${productDetails.imageUrl}" alt="img">
<h2>${productDetails.title}</h2>
<span>${productDetails.size}</span><br>
<span> Order: ${productDetails.qty}</span>
`
