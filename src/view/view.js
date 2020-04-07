import Home from "./pages/home.js";
import SignUp from "./pages/signup.js";
import SignIn from "./pages/signin.js";
import Profile from "./pages/profile.js";
import { model } from "../model/model.js";
import { controler }from "../controler/controler.js";

const components = {
    home: Home,
    signup: SignUp,
    signin: SignIn,
    profile: Profile
}

const userView = {

    //obtiene el formSignUp de html y captura los valores ingresados nombre, correo y contraseña
///SIGNUP

    initSignUp: () => {
        const userNewData = document.getElementById("signUpForm");
        console.log(userNewData);

        userNewData.addEventListener("submit", (e) => {
            e.preventDefault(); 
            const newUserSignUp = {
              name: userNewData.nameSignUp.value,
              email: userNewData.emailSignUp.value,
              pass: userNewData.passwordSignUp.value
            }
            console.log(newUserSignUp);
            userNewData.reset();
            
            controler.newUser(newUserSignUp)
            .catch(function(error) {
              let errorCode = error.code;
              let errorMessage = error.message;
              alert(errorMessage);
            });
                     
          })
          
    },


///SIGNIN
    initSignIn: () => {
        const userSignIn = document.getElementById("signInForm");
        console.log(userSignIn);

        userSignIn.addEventListener("submit", (e) => {
            e.preventDefault(); 
            const newUserSignIn = {
              email: userSignIn.emailSignIn.value,
              pass: userSignIn.passwordSignIn.value
            }
            console.log(newUserSignIn);
            userSignIn.reset();
            controler.accesUser(newUserSignIn)
            .catch(function(error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                //let errorMessage = "Verifica tus datos";
                            
                alert(errorMessage);
              });
          
        })
    },

    ///SIGN OUT
    signOutButton: () => {
      const userSignOut = document.getElementById("exitbutton");
      console.log(userSignOut);
      const signout = controler.controlerSignOut()
      userSignOut.addEventListener("click",signout);

    },

/*funcion anterior
    initProfile: () => {
      const userProfile = document.getElementById("profileForm");
      console.log(userProfile);

      userProfile.addEventListener("submit", (e) => {
        e.preventDefault();
        const userPost = {
          text: userProfile.post.value,
        }
        userProfile.reset();
        controler.newPost(userPost)
        .catch(function(error) {
          //if (text.userPost = "") 
          //let errorCode = error.code;
          let errorMessage = error.message;      
          alert(errorMessage);
        });
        });
        
    },
*/
//funcion para pruebas 
//timestamp: firebase.firestore.FieldValue.serverTimestamp()

    initProfile: () => {
      /*const userProfile = document.getElementById("profileForm");
      console.log(userProfile);

      userProfile.addEventListener("submit", (e) => {
        e.preventDefault();
        const userPost = {
          text: userProfile.post.value,
        }
        userProfile.reset();
        controler.newPost(userPost)
        .catch(function(error) {
          //if (text.userPost = "") 
          //let errorCode = error.code;
          let errorMessage = error.message;      
          alert(errorMessage);
        });
        });*/
        
    },
// initProfile: () => {
      /*const userProfile = document.getElementById("profileForm");
      console.log(userProfile);

      userProfile.addEventListener("submit", (e) => {
        e.preventDefault();
        const userPost = {
          text: userProfile.post.value,
        }
        userProfile.reset();
        controler.newPost(userPost)
        .catch(function(error) {
          //if (text.userPost = "") 
          //let errorCode = error.code;
          let errorMessage = error.message;      
          alert(errorMessage);
        });
        });
        
    },*/

    /*
    readPost: () => {
            const postRead = document.getElementById("table");
        console.log(postRead);
        const db = firebase.firestore()
          db.collection("posts").onSnapshot((querySnapshot) => {
            postRead.innerHTML = "";
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            postRead.innerHTML += `
            <tr>
            <th>${doc.id}</th>
            <td>${doc.data().text}</td>
            <td><button onclick="deletePost('${doc.id}')">Eliminar</button></td>
            <td><button id="edit">Editar</button>
            </tr>
                `
                const postspace = document.createElement("div");
                postspace.innerHTML = postRead;
                
                return postspace;
                  })
                })
    },
/**/ 
    readPost: () => {
      const postRead = document.getElementById("table");
  
      const db = firebase.firestore()
        db.collection("posts").onSnapshot((querySnapshot) => {
       
        postRead.innerHTML = "";
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().text}`);

        //postRead.innerHTML + = 

        const containerPost = document.createElement("div");
        containerPost.setAttribute("id", "containerPost");

        const textPost =document.createElement("textarea");
        textPost.setAttribute("id", "textPost");
        textPost.value =  doc.data().text

        textPost.setAttribute("placeholder", "Comparte tus ideas");

        const buttonEdit = document.createElement("button");
        buttonEdit.innerHTML ="Editar";
        buttonEdit.setAttribute("id", "editButton");

        const buttonDelete = document.createElement("button");
        buttonDelete.innerHTML ="Eliminar";
        buttonDelete.dataset.notaID = doc.id
        buttonDelete.setAttribute("id", "deleteButton");

        buttonDelete.addEventListener('click', (e) => {
          console.log(e.target.dataset.notaID);
        })
          
    containerPost.appendChild(textPost);
    containerPost.appendChild(buttonEdit);
    containerPost.appendChild(buttonDelete);
    table.appendChild(containerPost);
})
 })

}
/*
       deletePost: (id) => {
        const db = firebase.firestore()
        db.collection("posts").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        }).catch(function(error) {
          console.error("Error removing document: ", error);
        });
      }*/

        
}

export { components, userView };
