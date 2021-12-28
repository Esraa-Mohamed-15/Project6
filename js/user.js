/*login register logout*/
/*general*/
let showData = document.getElementById('js-show-after-login');
let user = document.getElementById('user');
let hideData = document.getElementById('js-hide-after-login');
let logOut = document.getElementById('logout');
if (localStorage.getItem("name")) {
hideData.remove();
showData.style.display ="flex";
user.innerHTML = localStorage.getItem("name");
}
logOut.addEventListener("click" , function (e) {
 e.preventDefault();
 setTimeout( () => {
   localStorage.clear();
   window.location = "login.html";
 } , 1500);
 localStorage.setItem('productsInCart',JSON.stringify(addedItem));
});
