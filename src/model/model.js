export const model ={

    signUpUser:(newUserSignUp) => {

        return firebase.auth().createUserWithEmailAndPassword(newUserSignUp.email,  newUserSignUp.pass)

    }, 


    signInUser:(newUserSignIn) => {

       return firebase.auth().signInWithEmailAndPassword(newUserSignIn.email,  newUserSignIn.pass)
        
    }, 
    
}

