
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
      window.location = "index.html";
    }
});

  $(document).ready(function(){

     console.log( "ready!" );

    });




var tblUsers=document.getElementById("tbl_users_list");
var databaseref = firebase.database().ref('users/');
var rowIndex=1;
var selectedFile;

databaseref.once('value', function(snapshot) {
	snapshot.forEach(function(childSnaphot){
		var childkey=childSnaphot.key;
		var childData=childSnaphot.val();
		var row=tblUsers.insertRow(rowIndex);
		var cellId=row.insertCell(0);
		var cellName=row.insertCell(1);
		var cellAge=row.insertCell(2);
		cellId.appendChild(document.createTextNode(childkey));
		cellName.appendChild(document.createTextNode(childData.username));
		cellAge.appendChild(document.createTextNode(childData.age));
		rowIndex=rowIndex+1;
	});
});

$("#file").on("change", function(event) {
	selectedFile = event.target.files[0];
});


function Save(){
	var user_name=document.getElementById("user_name").value;
	var user_id=document.getElementById("user_id").value;
	var age=document.getElementById("age").value;

	firebase.database().ref('users/' + user_id).set({
    	username: user_name,
    	age: age
  	});
  		// Create a root reference
	var filename = selectedFile.name;
		  console.log(filename);

	var storageRef = firebase.storage().ref('/Images/' + filename);
	var uploadTask = storageRef.put(selectedFile);

	uploadTask.on('state_changed', function(snapshot){
	  // Observe state change events such as progress, pause, and resume
	  // See below for more detail
	}, function(error) {
	  // Handle unsuccessful uploads
	  window.alert("unsuccessful");
	}, function() {
	  // Handle successful uploads on complete
	  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	  var postKey = firebase.database().ref('Posts/').push().key;
	  var downloadURL = uploadTask.snapshot.downloadURL;
	  console.log(downloadURL);
});
	window.location.reload();
}

function Update(){
	var user_name=document.getElementById("user_name").vaue;
	var user_id=document.getElementById("user_id").value;
	var age=document.getElementById("age").value;


	firebase.database().ref('users/' + user_id).set({
    	username: user_name,
    	age: age
  	});
  		window.location.reload();


}

function Delete(){
	var user_id=document.getElementById("user_id").value;

	firebase.database().ref('users/' + user_id).remove();
	window.location.reload();

}
