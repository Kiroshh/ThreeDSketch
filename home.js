

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      let user = firebase.auth().currentUser;
      usermail = user.email;

    } else {
      // No user is signed in.

      window.location = "index.html";
    }
});

function logout() {

         firebase.auth().signOut();
               window.location = "index.html";

      }