export default () => {

    const signIn = `
    <h1>RED SOCIAL</h1>
   
   <form id="signIn">
   
   <label for="email-input">Email</label>
   <input name="userEmail" type="email" id="email-input" placeholder="Ingresa tu password"/>
  
  <button id="getInfo">Sign In</button>
   `;

   const divSingIn = document.createElement("div");
    divSingIn.innerHTML = signIn;

    return divSingIn;

};
