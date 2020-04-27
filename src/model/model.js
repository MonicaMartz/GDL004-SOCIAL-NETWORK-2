export const model ={

  //////////Nuevo usuario /////FUNCTION FIREBASE
    signUpUser:(newUserSignUp) => {

        return firebase.auth().createUserWithEmailAndPassword(newUserSignUp.email,  newUserSignUp.pass)

    }, 

  //////////Acceso de usuario ////FUNCTION FIREBASE
    signInUser:(newUserSignIn) => {

       return firebase.auth().signInWithEmailAndPassword(newUserSignIn.email,  newUserSignIn.pass)
        
    }, 
  /////////Cerrar sesión  /////FUNCTION FIREBASE
    signOutUser: () => {
      return firebase.auth().signOut()
    },

 
}

