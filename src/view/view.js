import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
import SignIn from "./pages/signin.js";
import { model } from "../model/model.js";
//import { controler }from "../controler/controler.js";

const components = {
    home: Home,
    signup: SignUp,
    signin: SignIn
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
            model.signUpUser(newUserSignUp);
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
            //userSignI.reset();//reset reestablece los valores del formulario
            
        })
    },


}

export { components, userView };