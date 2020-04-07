export const model ={

    signUpUser:(newUserSignUp) => {

        return firebase.auth().createUserWithEmailAndPassword(newUserSignUp.email,  newUserSignUp.pass)

    }, 


    signInUser:(newUserSignIn) => {

       return firebase.auth().signInWithEmailAndPassword(newUserSignIn.email,  newUserSignIn.pass)
        
    }, 
    
    signOutUser: () => {
      return firebase.auth().signOut()
    },

    //obtiene la sesión activa
    userAuth: () => {
      return firebase.auth().currentUser;
    }


/*
    observador: firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
        } else {
          // No user is signed in.
        }
      });

*/
    
}

