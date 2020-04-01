import { components, userView } from "../view/view.js";
import { model } from "../model/model.js";
import { cloud } from "../model/cloud.js";


export const controler = {
    
    newUser:(newUserSignUp) => {
        model.signUpUser(newUserSignUp)
        
    },
    accesUser:(newUserSignIn) => {
       return  model.signInUser(newUserSignIn)
        .then(function(response){
            console.log(response);

        window.location.hash="#/profile";
        controler.changeView(window.location.hash);
        
        })
        /*.catch(function(error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                //let errorMessage = "Verifica tus datos";
                
                alert(errorMessage);


        })*///Lo envíe a vista
    },
   
    newPost:(userPost) => {
        cloud.post(userPost)
    },

    
    changeView: (hash) => {
    console.log(hash)

    const sectionMain = document.getElementById("container");
    sectionMain.innerHTML =" ";

    switch (hash) {
        case "":
        case "#/":
        case "#/home":
            sectionMain.appendChild(components.home());
            break;
            
            case "#/signup": 
            sectionMain.appendChild(components.signup());
            userView.initSignUp()
            break; 

            case "#/signin": 
            sectionMain.appendChild(components.signin());
            userView.initSignIn()
            break;  
            
            case "#/profile":
            sectionMain.appendChild(components.profile());
            userView.initProfile()
            userView.readPost()
            
            break;
        default:
            
    }

}
};