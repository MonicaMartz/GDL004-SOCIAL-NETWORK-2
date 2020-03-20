export default () => {

    const signUp = `
    <h1>RED SOCIAL</h1>
    <h2>Sign Up</h2>
   
   <form id="formSignUp">

   <label for="Name-signup">Nombre:</label>
   <input name="userNameUp" type="text" id="email-signup" placeholder="Ingresa tu Nombre"/>
   
   <label for="email-signup">Email:</label>
   <input name="userEmailUp" type="email" id="email-signup" placeholder="Ingresa tu E-mail"/>
  
   <label for="password-signup">Contraseña:</label>
   <input name="userPasswordUp" type="password" id="password-signup" placeholder="Ingresa tu contraseña"/>
 

  <button id="getSignUp">Sign Up</button>
   `;
   

   const divSingUp = document.createElement("div");
    divSingUp.innerHTML = signUp;

    return divSingUp;

};
