export const model ={

    signUpUser:(newUserSignUp) => {

        firebase.auth().createUserWithEmailAndPassword(newUserSignUp.email,  newUserSignUp.pass)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            alert(errorMessage);
          });
    
    }

    
}

