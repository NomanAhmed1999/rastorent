




// initialize

let namee = document.getElementById("name");
let profilePic = document.getElementById("profilePic");
let email = document.getElementById("email");
let password = document.getElementById("password");
let reTypePassword = document.getElementById("reTypePassword");
let profileInput = document.getElementById("profileInput");
// let profilePic = document.getElementById("profilePic");



// initialize end


// User Account create
let CreateUser = () =>{
  if(reTypePassword.value == password.value){
firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    window.location = "./index.html";


    let userInfoObj = {
        userProfile : userProfilePic(),
        userName : namee.value,
        userEmail : email.value,
    }
    // ...
  })

  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}else{
  console.error("passwprd does not match")
}
}

// User Account create end


// User Login
let userLogin = () =>{
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location = "./index.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(error);
  });
}
// User Login end




// user stateChange (checking user login or not)
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log("user login");
      // window.location = "./index.html";
      // ...
    } else {
      // User is signed out
      // ...
      console.log("user log out");
      // window.location = "./login-form.html";
    }
  });
// user stateChange end (checking user login or not)


// logOut
let userLogout = () =>{
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.warning(error);
      });
      
}
// logOut


// forgate password
let forgatePassword = () => {
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
// forgate password end















// let profile = profilePicInput.files[0];
// unknownProfilePic.src = `./images/${profile.name}`


function dpChange() {
  let dpImgFile = profileInput.files[0];
   profilePic.src = `./images/${dpImgFile.name}`
    console.log(profileInput.files[0]);
    console.log(profilePic);
}



let craetContainer = document.getElementById("craetContainer");
craetContainer.style.display = "none";
let displayCart = () =>{
    if(craetContainer.style.display == "none"){
        craetContainer.style.display = "block";
    }else if(craetContainer.style.display = "block"){
        craetContainer.style.display = "none";
    }
}


let cartImg = document.getElementById("cartImg");
console.log(cartImg);

let items = (item) => {
    let selectedItem = item.parentNode.parentNode.childNodes[1].src;
    let itemImg = cartImg.src = selectedItem;
    // console.log(item.parentNode.parentNode.childNodes[1].src);
    // console.log(cartImg);

}