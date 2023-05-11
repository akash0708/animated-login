var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_uf1XAn4w4U004mzDOLgMLQBeHACmafA",
  authDomain: "fir-basics-36b6f.firebaseapp.com",
  projectId: "fir-basics-36b6f",
  storageBucket: "fir-basics-36b6f.appspot.com",
  messagingSenderId: "778094595115",
  appId: "1:778094595115:web:ada817f97211a7bf2e6e6e",
  measurementId: "G-2H9X097TXC"
});

var auth = firebaseApp.auth();
var database = firebaseApp.firestore();

var email = document.getElementById('email');
var password = document.getElementById('password');
var submit = document.getElementById('submit');

// Add an event listener to the submit button
submit.addEventListener('click', function(e) {
  e.preventDefault();
  
  // Create a new user account with Firebase Authentication
  auth.createUserWithEmailAndPassword(email.value, password.value)
    .then(function(userCredential) {
      // Add the user's email address to the Firestore database
      database.collection('users').doc(userCredential.user.uid).set({
        email: email.value
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    })
    .catch(function(error) {
      console.error("Error creating user: ", error);
    });
});