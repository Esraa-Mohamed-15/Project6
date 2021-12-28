let name = document.getElementById('name');
let pass = document.getElementById('pass');
let btn = document.getElementById('sign');

let getUser = localStorage.getItem("name");
let getPass = localStorage.getItem("pass");

btn.addEventListener("click" , function (e) {
  e.preventDefault();
  if (name.value === "" || pass.value === ""){
    alert("please fill the data");
  }
  else {
    if (getUser && getUser.trim() === name.value && getPass && getPass=== pass.value) { /* .trim تمنع المسافات*/
      setTimeout( () => {
        window.location = "index.html";
      } , 1500);
    }
  }
  });
