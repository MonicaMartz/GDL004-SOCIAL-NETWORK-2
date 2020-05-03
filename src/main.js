import { controler } from "./controler/controler.js";

const init = () => {
       //console.log("Hola mundo");
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
        controler.changeView(window.location.hash)
        window.addEventListener("hashchange", () => controler.changeView(window.location.hash));
        
}


window.addEventListener("load", init);
/*el load es un evento que se dispara cuando un recurso
y sus recursos  dependientes han terminado de cargar*/



      