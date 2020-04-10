export const model ={

  //NEW USER
    signUpUser:(newUserSignUp) => {

        return firebase.auth().createUserWithEmailAndPassword(newUserSignUp.email,  newUserSignUp.pass)

    }, 

    //LOGIN USER
    signInUser:(newUserSignIn) => {

       return firebase.auth().signInWithEmailAndPassword(newUserSignIn.email,  newUserSignIn.pass)
        
    }, 
    
    //INFO USER 
    //ACTIVE SESION
  //POSIBLES DATOS DE LOCAL STORAGE

    

  //congigurar el cierre de cedsión.
  //////****************** */
  /*crear un boton evento on click que llame a la 
  cerrar sesión, así tal cual, y que envíe a la pagina
  de inicio */
/*
    signOutUser: () => {
      return firebase.auth().signOut()
    },
*/
    //obtiene la sesión activa
    userAuth: () => {
      return firebase.auth().currentUser;
    }


/*
//obtener el usuario con la sesión activa
al parecer va solita por separado en un archivo
aqui se coloca lo de local storage
///////************
 */
/*
firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });

obtener el usuario que accedio
//var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}


/*
//obtener el perfil de un usuario
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid; 

*/
    
}

