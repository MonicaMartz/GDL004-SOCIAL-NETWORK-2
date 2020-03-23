import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
import SignIn from "./pages/signin.js";

const components = {
    home: Home,
    signup: SignUp,
    signin: SignIn
}

const userView = {

    initSignUp: () => {
        const userNewData = document.getElementById("signUpForm");
        console.log(userNewData);

        userNewData.addEventListener("submit", (e) => {
            e.preventDefault();
            const newUser = {
              name:userNewData.nameSignUp.value,
              email: userNewData.emailSignUp.value,
              pass: userNewData.passwordSignUp.value
            }
            console.log(newUser);
    })
}
}

export { components, userView };