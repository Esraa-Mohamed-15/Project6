/*uploadImage*/
let inputFile = document.getElementById('upload');
inputFile.addEventListener("change" , uploadImage);

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
localStorage.setItem('image',JSON.stringify(inputFile));



/*data from local storage*/
let name = localStorage.getItem("name");
let mail = localStorage.getItem("mail");


/*variables*/
let changeName = document.getElementById('changename');
let changeEmail = document.getElementById('changeemail');
let editProfileForm = document.querySelector('#editprofile-form'); /*بمسك الفورم بدل الزرار*/
/*setting value*/
changeName.value=name;
changeEmail.value=mail;


/*events*/
editProfileForm.addEventListener("submit" , editProfileData);
function editProfileData(e) {
e.preventDefault();
localStorage.setItem("name" , changeName.value);
localStorage.setItem("mail" , changeEmail.value);

setTimeout( () => {
  window.location = "profile.html";
} , 500);
}
