firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

   document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";


   var user = firebase.auth().currentUser;

   if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "logged in as User : " + email_id;

    }

  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });


}

function logoutt(){
     // window.location.href = "indexx.html";

}


function logout(){

  firebase.auth().signOut();


}
var tblUsers=document.getElementById(tbl_users_list);
var databaseRef =firebase.database().ref('users/');

var user_name=document.getElementById(user_name).value;
var user_id=document.getElementById(user_id).value;


