import { components } from "../view/view.js";


const changeView = (hash) => {

    const sectionMain = document.getElementById("sectionPages");
    sectionMain.innerHTML = " ";

    switch (hash) {
        case "#/":
        case "#/home":
            sectionMain.appendChild(components.home());
            break;
        case "#/signin": 
        sectionPages.appendChild(components.signin());
            break;   
        default:
            

    }
console.log(hash)

}
//
export { changeView };