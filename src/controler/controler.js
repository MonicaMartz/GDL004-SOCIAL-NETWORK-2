import { components, userView } from "../view/view.js";
import { model } from "../model/model.js";
import { cloud } from "../model/cloud.js";
import { userAuth } from "../model/auth.js";


export const controler = {
    
    newUser:(newUserSignUp) => {
       return model.signUpUser(newUserSignUp)
    },
//posibilidad de hacerlo en una linea. llaves
//neuUser:newUserSignUp => model.signUpUser(newUserSignUp),


    accesUser:(newUserSignIn) => {
       return  model.signInUser(newUserSignIn)
        .then(function(response){
            console.log(response);
        window.location.hash="#/profile";
        controler.changeView(window.location.hash);
        })
    },

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
    //console.log(hash)

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
            userAuth((user) => {
                if(user) {
                    const view = components.profile(user);
                    sectionMain.appendChild(view);
                    userView.initProfile()
                    userView.readPost(user)
                    userView.signOut ()

                } else {
                   window.location.hash = "#/home"
                    }
            })
            break

           case "#/general":  
           sectionMain.appendChild(components.general());                 
                      userView.readGeneral()
             
            break;
        default:
            sectionMain.appendChild(components.differen());
            
            
    }

}
};