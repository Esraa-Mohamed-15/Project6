let name = document.getElementById('name');
let mail = document.getElementById('mail');
let pass = document.getElementById('pass');
let login = document.getElementById('login');
login.addEventListener("click" , function (e) {
  e.preventDefault();
if (name.value === "" || mail.value === "" || pass.value === ""){
  alert("please fill the data");
}
else {
  localStorage.setItem("name" , name.value);
  localStorage.setItem("mail" , mail.value);
  localStorage.setItem("pass" , pass.value);
  name.value="";
  mail.value="";
  pass.value="";
  setTimeout( () => {
    window.location = "login.html";
  } , 1500)
}
});
