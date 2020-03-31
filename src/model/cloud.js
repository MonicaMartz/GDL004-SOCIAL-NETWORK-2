
// Get a reference to the database service
//var database = firebase.database();








/*También puedes usar la propiedad currentUser para obtener 
el usuario que accedió. Si no accedió ningún usuario, 
el valor de currentUser es null:

var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}
*/


/*
Obtén el perfil de un usuario
Para obtener la información del perfil de un usuario, puedes usar 
las propiedades de una instancia de User. Por ejemplo:

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}
*/

/*
Actualiza el perfil de un usuario
Puedes actualizar información básica del perfil de usuario (el nombre visible y la URL de la foto de perfil del usuario) con el método updateProfile. Por ejemplo:

var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
*/