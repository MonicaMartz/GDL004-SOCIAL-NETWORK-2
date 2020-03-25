export default () => {

    const signIn = `
    <h1>RED SOCIAL</h1>
    <h2>Sign In</h2>
   
   <form class= "signInForm" id="signInForm">
   
        <label for="email-signin">Email:</label>
        <input name="userEmail" type="email" id="emailSignIn" placeholder="Ingresa tu E-mail"/>
        
        <label for="password-signin">Contraseña:</label>
        <input name="userPassword" type="password" id="passwordSignIn" placeholder="Ingresa tu E-mail"/>


        <button type="submit" id="getInfo">Sign In</button>
  </form> `

   const divSingIn = document.createElement("div");
    divSingIn.innerHTML = signIn;

    return divSingIn;
}
