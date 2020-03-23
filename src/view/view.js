import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
import SignIn from "./pages/signin.js";
import { controler }from "../controler/controler.js";

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
            e.preventDefault();
            const newUserSignUp = {
              name: userNewData.nameSignUp.value,
              email: userNewData.emailSignUp.value,
              pass: userNewData.passwordSignUp.value
            }
            console.log(newUserSignUp);
            userNewData.reset();
            controler.newUser(newUserSignUp);
    })
}
}

export { components, userView };