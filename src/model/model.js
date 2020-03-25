export const model ={

    signUpUser:(newUserSignUp) => {

        firebase.auth().createUserWithEmailAndPassword(newUserSignUp.email,  newUserSignUp.pass)
        .catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // ...
            alert(errorMessage);
          });
    
    }, 

/*
    signInUser:(newUserSignUp) => {

        firebase.auth().createUserWithEmailAndPassword(newUserSignUp.email,  newUserSignUp.pass)
        .catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // ...
            alert(errorMessage);
          });
    
    }, 

    //observador
   /* firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          document.getElementById("login").innerHTML ="logueado";
        
          // ...
        } else {
            document.getElementById("login").innerHTML ="logueado"; // User is signed out.
          // ...
        }
      });*/

    
}

