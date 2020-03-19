import { components } from "../view/index.js";


const changeView = (hash) => {

    const sectionPages = document.getElementById("changeView");
    sectionPages.innerHTML = " ";

    switch (hash) {
        case "#/":
        case "#/home":
            sectionPages.appendChild(components.home());
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