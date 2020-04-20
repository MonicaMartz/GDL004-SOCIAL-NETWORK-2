export default () => {

    const signIn = `
<div class="signin-container">
    <div class ="content-sin">

        <div class="plantlover">
            <h2 class="text-logo">Sing In</h2>
        </div>

        <div class="logo2">
            <img src="/src/images/logo.png" alt="LogoPlantLover"  width="75" ">
        </div>
   
        <form class= "signInForm" id="signInForm">
   
        <label for="email-signin">Email:</label>
        <input name="userEmail" type="email" id="emailSignIn" placeholder="Ingresa tu E-mail"/>
        
        <label for="password-signin">Contraseña:</label>
        <input name="userPassword" type="password" id="passwordSignIn" placeholder="Ingresa tu E-mail"/>


        <button type="submit" id="getInfo" class="button-Sign-profile">Sign In</button>
        </form> 
    </div>
</div>
  `

   const divSingIn = document.createElement("div");
    divSingIn.innerHTML = signIn;

    return divSingIn;
}


