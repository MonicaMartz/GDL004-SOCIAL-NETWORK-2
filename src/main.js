import { controler } from "./controler/controler.js";

const init = () => {
        controler.changeView(window.location.hash)
        window.addEventListener("hashchange", () => controler.changeView(window.location.hash));
        firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  //redireccion a la pagina solicitada
                  
                  
                  // ...
                } else {

                   
                  // redireccion a login
                }
              });
}


window.addEventListener("load", init);
/*el load es un evento que se dispara cuando un recurso
y sus recursos  dependientes han terminado de cargar*/


//Configuración de firebase
let firebaseConfig = {
        apiKey: "AIzaSyCMSU1YmFf97sfsOJgTkF9DvSC18sVoYQQ",
        authDomain: "redsocial-ecb03.firebaseapp.com",
        databaseURL: "https://redsocial-ecb03.firebaseio.com",
        projectId: "redsocial-ecb03",
        storageBucket: "redsocial-ecb03.appspot.com",
        messagingSenderId: "874220428496",
        appId: "1:874220428496:web:bfaed7c9ff27131bd512d5"
      };

// inicialización de firebase
firebase.initializeApp(firebaseConfig);
     