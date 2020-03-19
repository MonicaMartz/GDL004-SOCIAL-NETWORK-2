import { changeView } from "./controler/controler.js";

const init = () =>{
        changeView(window.location.hash)
        window.addEventListener("hashchange", () => changeView(window.location.hash));
}

window.addEventListener("load", init);
/*el load es un evento que se dispara cuando un recurso
y sus recursos  dependientes han terminado de cargar*/
