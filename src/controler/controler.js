import { components, userView } from "../view/view.js";

export const controler = {

    initControlerSignUp: () => {
        userView.initSignUp()
    }, 

   changeView: (hash) => {
    console.log(hash)

    const sectionMain = document.getElementById("container");
    sectionMain.innerHTML =" ";

    switch (hash) {
        case " ":
        case "#/":
        case "#/home":
            sectionMain.appendChild(components.home());
            break;
            
            case "#/signup": 
            sectionMain.appendChild(components.signup());
            controler.initControlerSignUp()
            break; 

        case "#/signin": 
            sectionMain.appendChild(components.signin());
            break;   
        default:
            
    }

}
};