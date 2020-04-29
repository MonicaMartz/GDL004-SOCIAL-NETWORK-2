export default () => {

    const signUp = `
<div class="signup-container">
        <div class ="content-sip">

            <div class="plantlover">
                <h2 class="text-logo">Sing Up</h2>
            </div>

            <div class="logo2">
                <img src="/src/images/logo.png" alt="LogoPlantLover"  width="75" ">
            </div>
   
        <form class="signUpForm" id="signUpForm">

            <label for="name-signup">Nombre:</label>
            <input name="userNameUp" type="text" id="nameSignUp" placeholder="Ingresa tu Nombre"/>
            
            <label for="email-signup">Email:</label>
            <input name="userEmailUp" type="email" id="emailSignUp" placeholder="Ingresa tu E-mail"/>
            
            <label for="password-signup">Contraseña:</label>
            <input name="userPasswordUp" type="password" id="passwordSignUp" placeholder="Ingresa tu contraseña"/>
            

            <button type="submit" id="getSignUp" class="button-Signup-profile">Sign Up</button>

        </form> 
    </div>
</div>`
   

   const divSingUp = document.createElement("div");
    divSingUp.innerHTML = signUp;

   return divSingUp;
    

}
