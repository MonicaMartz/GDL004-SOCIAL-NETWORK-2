export default () => {

    const signIn = `
    <h1>RED SOCIAL</h1>
    <h2>Sign In</h2>
   
   <form id="signIn">
   
   <label for="email-signin">Email:</label>
   <input name="userEmail" type="email" id="email-signin" placeholder="Ingresa tu E-mail"/>
  
   <label for="password-signin">Contraseña:</label>
   <input name="userPassword" type="password" id="password-signin" placeholder="Ingresa tu E-mail"/>


  <button id="getInfo">Sign In</button>
   `;

   const divSingIn = document.createElement("div");
    divSingIn.innerHTML = signIn;

    return divSingIn;

};
