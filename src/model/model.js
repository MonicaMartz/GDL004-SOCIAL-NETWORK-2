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
    
    }

    
}

