import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
import SignIn from "./pages/signin.js";
import Profile from "./pages/profile.js";
import { model } from "../model/model.js";

//import { controler }from "../controler/controler.js";

const components = {
    home: Home,
    signup: SignUp,
    signin: SignIn,
    profile: Profile
}

const userView = {

    //obtiene el formSignUp de html y captura los valores ingresados nombre, correo y contraseña
    initSignUp: () => {
        const userNewData = document.getElementById("signUpForm");
        console.log(userNewData);

        userNewData.addEventListener("submit", (e) => {
            e.preventDefault(); //evita que se elecute el submit
            const newUserSignUp = {
              name: userNewData.nameSignUp.value,
              email: userNewData.emailSignUp.value,
              pass: userNewData.passwordSignUp.value
            }
            console.log(newUserSignUp);
            userNewData.reset();//reset reestablece los valores del formulario
            //controler.newUser(newUserSignUp);
            model.signUpUser(newUserSignUp)
            .catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                //let errorMessage = error.message;
                let errorMessage = "Verifica tus datos";
                
                alert(errorMessage);
              });;
        })
    },

    initSignIn: () => {
        const userSignIn = document.getElementById("signInForm");
        console.log(userSignIn);

        userSignIn.addEventListener("submit", (e) => {
            e.preventDefault(); //evita que se elecute el submit
            const newUserSignIn = {
              email: userSignIn.emailSignIn.value,
              pass: userSignIn.passwordSignIn.value
            }
            console.log(newUserSignIn);
            userSignIn.reset();
            //userSignI.reset();//reset reestablece los valores del formulario
            model.signInUser(newUserSignIn)
            .catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = "Verifica tus datos";
                //let errorMessage = error.message;
             
                alert(errorMessage);
              });
              
        })
    },

    initProfile: () => {
      const userProfile = document.getElementById("profileForm");
      console.log(userProfile);

      
    }
    

}

export { components, userView };