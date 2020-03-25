export default () => {

    const signUp = `
        <h1>RED SOCIAL</h1>
        <h2>Sign Up</h2>
   
   <form class="signUpForm" id="signUpForm">

        <label for="name-signup">Nombre:</label>
        <input name="userNameUp" type="text" id="nameSignUp" placeholder="Ingresa tu Nombre"/>
        
        <label for="email-signup">Email:</label>
        <input name="userEmailUp" type="email" id="emailSignUp" placeholder="Ingresa tu E-mail"/>
        
        <label for="password-signup">Contraseña:</label>
        <input name="userPasswordUp" type="password" id="passwordSignUp" placeholder="Ingresa tu contraseña"/>
        

        <button type="submit" id="getSignUp">Sign Up</button>

    </form> `
   

   const divSingUp = document.createElement("div");
    divSingUp.innerHTML = signUp;

   return divSingUp;
    

}
