import { components, userView } from "../view/view.js";
import { model } from "../model/model.js";
import { cloud } from "../model/cloud.js";


export const controler = {
    
    newUser:(newUserSignUp) => {
       return model.signUpUser(newUserSignUp)
    },

    accesUser:(newUserSignIn) => {
       return  model.signInUser(newUserSignIn)
        .then(function(response){
            console.log(response);
        window.location.hash="#/profile";
        controler.changeView(window.location.hash);
        })
    },

//prueba
    /*controlerProfile: () => {
       return model.profileUserNew()
    },
    */

    controlerSignOut: () => {
        return model.signOutUser()
    },
   
    newPost:(userPost) => {
       return cloud.post(userPost)
    },

    deletePost:(id) => {
        return cloud.delete(id)
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
            const view = components.profile();
            sectionMain.appendChild(view);
            userView.initProfile()
            userView.readPost()
            //userView. signOutButton()
            //userView.eventPost()
           
            
            break;
        default:
            
    }

}
};